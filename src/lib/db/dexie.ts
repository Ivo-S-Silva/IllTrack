// src/lib/db/dexie.ts

import Dexie, { Table } from 'dexie';
import type {
  User,
  Flare,
  Symptom,
  SymptomEvolution,
  Medication,
  GlutenContamination,
  AutocompleteEntry,
  AppSettings
} from '@/types';

export class FlareTrackerDB extends Dexie {
  users!: Table<User>;
  flares!: Table<Flare>;
  symptoms!: Table<Symptom>;
  symptomEvolutions!: Table<SymptomEvolution>;
  medications!: Table<Medication>;
  contaminations!: Table<GlutenContamination>;
  autocomplete!: Table<AutocompleteEntry>;
  settings!: Table<AppSettings>;

  constructor() {
    super('FlareTrackerDB');

    this.version(1).stores({
      users: 'id, lastLogin',
      flares: 'id, startDate, endDate, color, name',
      symptoms: 'id, flareId, name, createdAt',
      symptomEvolutions: 'id, symptomId, timestamp, isActive',
      medications: 'id, flareId, timestamp, name',
      contaminations: 'id, timestamp, type, severity',
      autocomplete: 'id, category, value, lastUsed, usageCount',
      settings: 'id'
    });
  }
}

export const db = new FlareTrackerDB();

// Inicialização padrão
export const initializeDB = async () => {
  const settingsCount = await db.settings.count();
  if (settingsCount === 0) {
    await db.settings.add({
      id: 'default',
      theme: 'dark',
      defaultView: 'calendar',
      language: 'pt'
    });
  }
};
