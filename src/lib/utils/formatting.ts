// src/lib/utils/formatting.ts

import type { SeverityLevel, ContaminationType } from '@/types';

export const getSeverityLabel = (severity: SeverityLevel): string => {
  const labels: Record<SeverityLevel, string> = {
    1: 'Leve',
    2: 'Moderado',
    3: 'Médio',
    4: 'Alto',
    5: 'Severo'
  };
  return labels[severity];
};

export const getContaminationTypeLabel = (type: ContaminationType): string => {
  const labels: Record<ContaminationType, string> = {
    outright: 'Contaminação Direta',
    definite_cross: 'Contaminação Cruzada (Certa)',
    possible_cross: 'Contaminação Cruzada (Possível)'
  };
  return labels[type];
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
