// src/features/auth/hooks/useBiometric.ts
// Preparado para implementação futura de autenticação biométrica

import { useState } from 'react';

export const useBiometric = () => {
  const [isAvailable] = useState(false);
  const [isEnrolled] = useState(false);

  const checkBiometricAvailability = async () => {
    // Implementação futura
    // Verificar se o dispositivo suporta WebAuthn API
    console.log('Biometric check not yet implemented');
    return false;
  };

  const authenticate = async () => {
    // Implementação futura
    console.log('Biometric authentication not yet implemented');
    return false;
  };

  return {
    isAvailable,
    isEnrolled,
    checkBiometricAvailability,
    authenticate
  };
};
