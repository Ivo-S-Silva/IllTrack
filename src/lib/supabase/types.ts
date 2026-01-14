// src/lib/supabase/types.ts
// Preparado para sincronização futura com Supabase

export interface SupabaseFlare {
  id: string;
  user_id: string;
  name: string;
  start_date: string;
  end_date: string | null;
  overall_severity: number;
  color: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
  local_id: string; // Para mapear com IndexedDB
  synced_at: string;
}

export interface SupabaseSymptom {
  id: string;
  flare_id: string;
  name: string;
  created_at: string;
  updated_at: string;
  local_id: string;
  synced_at: string;
}

export interface SupabaseSymptomEvolution {
  id: string;
  symptom_id: string;
  intensity: number;
  timestamp: string;
  notes: string | null;
  is_active: boolean;
  local_id: string;
  synced_at: string;
}

export interface SupabaseMedication {
  id: string;
  flare_id: string;
  name: string;
  dosage: string;
  timestamp: string;
  notes: string | null;
  created_at: string;
  local_id: string;
  synced_at: string;
}

export interface SupabaseContamination {
  id: string;
  origin: string;
  severity: number;
  type: string;
  timestamp: string;
  notes: string | null;
  created_at: string;
  local_id: string;
  synced_at: string;
}
