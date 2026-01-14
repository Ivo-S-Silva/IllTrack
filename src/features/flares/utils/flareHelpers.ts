// src/features/flares/utils/flareHelpers.ts

import type { Flare } from '@/types';
import { getDuration } from '@/lib/utils/dates';

export const isFlareActive = (flare: Flare): boolean => {
  return flare.endDate === null;
};

export const getFlareDuration = (flare: Flare): string => {
  return getDuration(flare.startDate, flare.endDate);
};

export const sortFlaresByDate = (flares: Flare[], ascending: boolean = false): Flare[] => {
  return [...flares].sort((a, b) => {
    const timeA = a.startDate.getTime();
    const timeB = b.startDate.getTime();
    return ascending ? timeA - timeB : timeB - timeA;
  });
};

export const filterActiveFlares = (flares: Flare[]): Flare[] => {
  return flares.filter(isFlareActive);
};

export const filterCompletedFlares = (flares: Flare[]): Flare[] => {
  return flares.filter(f => !isFlareActive(f));
};
