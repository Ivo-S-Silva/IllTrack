// src/lib/utils/dates.ts

import { format, parseISO, isValid, differenceInDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatDate = (date: Date | string, formatStr: string = 'dd/MM/yyyy'): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  if (!isValid(dateObj)) return 'Data inválida';
  return format(dateObj, formatStr, { locale: ptBR });
};

export const formatDateTime = (date: Date | string): string => {
  return formatDate(date, 'dd/MM/yyyy HH:mm');
};

export const formatTime = (date: Date | string): string => {
  return formatDate(date, 'HH:mm');
};

export const getDuration = (startDate: Date, endDate: Date | null): string => {
  if (!endDate) return 'Em curso';
  const days = differenceInDays(endDate, startDate);
  if (days === 0) return 'Menos de 1 dia';
  if (days === 1) return '1 dia';
  return `${days} dias`;
};

export const isToday = (date: Date): boolean => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};
