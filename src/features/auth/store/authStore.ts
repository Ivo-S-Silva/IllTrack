// src/features/auth/store/authStore.ts

import { create } from 'zustand';
import { db } from '@/lib/db/dexie';
import { hashPin, verifyPin } from '../utils/pinHash';
import { nanoid } from 'nanoid';
import type { User } from '@/types';

interface AuthState {
  isAuthenticated: boolean;
  currentUser: User | null;
  isLoading: boolean;
  error: string | null;

  // Actions
  checkUser: () => Promise<boolean>;
  setupPin: (pin: string, securityQuestion: string, securityAnswer: string) => Promise<void>;
  login: (pin: string) => Promise<boolean>;
  logout: () => void;
  recoverWithSecurityAnswer: (answer: string) => Promise<boolean>;
  resetPin: (newPin: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  currentUser: null,
  isLoading: false,
  error: null,

  checkUser: async () => {
    set({ isLoading: true });
    try {
      const users = await db.users.toArray();
      const hasUser = users.length > 0;

      if (hasUser) {
        const user = users[0];
        set({ currentUser: user, isLoading: false });
      } else {
        set({ isLoading: false });
      }

      return hasUser;
    } catch (error) {
      set({ error: 'Erro ao verificar usuário', isLoading: false });
      return false;
    }
  },

  setupPin: async (pin: string, securityQuestion: string, securityAnswer: string) => {
    set({ isLoading: true, error: null });
    try {
      const pinHash = await hashPin(pin);
      const answerHash = await hashPin(securityAnswer.toLowerCase());

      const newUser: User = {
        id: nanoid(),
        pinHash,
        securityQuestion,
        securityAnswerHash: answerHash,
        createdAt: new Date(),
        lastLogin: new Date()
      };

      await db.users.add(newUser);
      set({
        currentUser: newUser,
        isAuthenticated: true,
        isLoading: false
      });
    } catch (error) {
      set({ error: 'Erro ao configurar PIN', isLoading: false });
      throw error;
    }
  },

  login: async (pin: string) => {
    set({ isLoading: true, error: null });
    try {
      const user = get().currentUser;

      if (!user) {
        set({ error: 'Usuário não encontrado', isLoading: false });
        return false;
      }

      const isValid = await verifyPin(pin, user.pinHash);

      if (isValid) {
        await db.users.update(user.id, { lastLogin: new Date() });
        set({ isAuthenticated: true, isLoading: false });
        return true;
      } else {
        set({ error: 'PIN incorreto', isLoading: false });
        return false;
      }
    } catch (error) {
      set({ error: 'Erro ao fazer login', isLoading: false });
      return false;
    }
  },

  logout: () => {
    set({ isAuthenticated: false });
  },

  recoverWithSecurityAnswer: async (answer: string) => {
    set({ isLoading: true, error: null });
    try {
      const user = get().currentUser;

      if (!user) {
        set({ error: 'Usuário não encontrado', isLoading: false });
        return false;
      }

      const isValid = await verifyPin(answer.toLowerCase(), user.securityAnswerHash);

      if (isValid) {
        set({ isLoading: false });
        return true;
      } else {
        set({ error: 'Resposta incorreta', isLoading: false });
        return false;
      }
    } catch (error) {
      set({ error: 'Erro ao verificar resposta', isLoading: false });
      return false;
    }
  },

  resetPin: async (newPin: string) => {
    set({ isLoading: true, error: null });
    try {
      const user = get().currentUser;

      if (!user) {
        throw new Error('Usuário não encontrado');
      }

      const newPinHash = await hashPin(newPin);
      await db.users.update(user.id, { pinHash: newPinHash });

      set({
        currentUser: { ...user, pinHash: newPinHash },
        isAuthenticated: true,
        isLoading: false
      });
    } catch (error) {
      set({ error: 'Erro ao redefinir PIN', isLoading: false });
      throw error;
    }
  }
}));
