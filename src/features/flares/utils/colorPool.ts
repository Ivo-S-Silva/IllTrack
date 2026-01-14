// src/features/flares/utils/colorPool.ts

import { db } from '@/lib/db/dexie';

const COLOR_POOL = [
  '#EF4444', // red
  '#3B82F6', // blue
  '#10B981', // green
  '#F59E0B', // amber
  '#8B5CF6', // purple
  '#EC4899', // pink
  '#14B8A6', // teal
  '#F97316', // orange
];

export const getAvailableColor = async (): Promise<string> => {
  const activeFlares = await db.flares
    .filter(flare => flare.endDate === null)
    .toArray();

  const usedColors = new Set(activeFlares.map(f => f.color));

  const available = COLOR_POOL.find(color => !usedColors.has(color));
  return available || COLOR_POOL[0];
};

export const getAllColors = (): string[] => {
  return [...COLOR_POOL];
};
