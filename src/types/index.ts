// src/types/index.ts

export type SeverityLevel = 1 | 2 | 3 | 4 | 5;

export type ContaminationType = 'outright' | 'definite_cross' | 'possible_cross';

export interface User {
  id: string;
  pinHash: string;
  securityQuestion: string;
  securityAnswerHash: string;
  createdAt: Date;
  lastLogin: Date;
}

export interface Flare {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date | null; // null = ainda ativa
  overallSeverity: SeverityLevel;
  color: string; // hex color do pool
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Symptom {
  id: string;
  flareId: string;
  name: string; // autocomplete expandível
  createdAt: Date;
  updatedAt: Date;
}

export interface SymptomEvolution {
  id: string;
  symptomId: string;
  intensity: SeverityLevel;
  timestamp: Date;
  notes?: string;
  isActive: boolean; // false quando sintoma desaparece
}

export interface Medication {
  id: string;
  flareId: string;
  name: string; // autocomplete expandível
  dosage: string; // ex: "500mg", "2 comprimidos"
  timestamp: Date;
  notes?: string;
  createdAt: Date;
}

export interface GlutenContamination {
  id: string;
  origin: string; // autocomplete expandível
  severity: SeverityLevel;
  type: ContaminationType;
  timestamp: Date;
  notes?: string;
  createdAt: Date;
}

export interface AutocompleteEntry {
  id: string;
  category: 'symptom' | 'medication' | 'contamination_origin';
  value: string;
  usageCount: number;
  lastUsed: Date;
}

export interface AppSettings {
  id: string;
  theme: 'dark' | 'light' | 'system';
  defaultView: 'calendar' | 'timeline';
  language: 'pt' | 'en';
}

// Tipos auxiliares para Timeline/Calendar
export interface TimelineEvent {
  id: string;
  type: 'flare' | 'contamination' | 'symptom';
  title: string;
  start: Date;
  end: Date | null;
  color: string;
  data: Flare | GlutenContamination | (Symptom & { evolution: SymptomEvolution[] });
}

export interface CalendarFilters {
  showFlares: boolean;
  showContaminations: boolean;
  showSymptoms: boolean;
  selectedFlareIds: string[];
  dateRange: {
    start: Date;
    end: Date;
  };
}
