// src/lib/hooks/useAutocomplete.ts

import { useState } from 'react';
import { db } from '@/lib/db/dexie';
import { nanoid } from 'nanoid';
import type { AutocompleteEntry } from '@/types';

export const useAutocomplete = (category: AutocompleteEntry['category']) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const loadSuggestions = async (query: string) => {
    const entries = await db.autocomplete
      .where('category')
      .equals(category)
      .and(entry => entry.value.toLowerCase().includes(query.toLowerCase()))
      .sortBy('usageCount');

    setSuggestions(entries.reverse().map(e => e.value));
  };

  const addOrUpdateEntry = async (value: string) => {
    const existing = await db.autocomplete
      .where('category')
      .equals(category)
      .and(entry => entry.value === value)
      .first();

    if (existing) {
      await db.autocomplete.update(existing.id, {
        usageCount: existing.usageCount + 1,
        lastUsed: new Date()
      });
    } else {
      await db.autocomplete.add({
        id: nanoid(),
        category,
        value,
        usageCount: 1,
        lastUsed: new Date()
      });
    }
  };

  return { suggestions, loadSuggestions, addOrUpdateEntry };
};
