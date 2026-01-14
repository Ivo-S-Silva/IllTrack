// src/lib/utils/validation.ts

export const validatePin = (pin: string): boolean => {
  return /^\d{4,6}$/.test(pin);
};

export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isNotEmpty = (value: string): boolean => {
  return value.trim().length > 0;
};

export const isWithinRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};
