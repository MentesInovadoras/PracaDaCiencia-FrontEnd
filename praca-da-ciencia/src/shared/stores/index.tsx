// src/stores/index.tsx

// Hook customizado para gerenciar o localStorage
import { useState, useEffect } from 'react';

interface LocalStorageStore<T> {
  value: T;
  setValue: (newValue: T) => void;
  removeValue: () => void;
}

export function useLocalStorage<T>(key: string, initialValue: T): LocalStorageStore<T> {
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage key “' + key + '”:', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting localStorage key “' + key + '”:', error);
    }
  }, [key, value]);

  const removeValue = () => {
    window.localStorage.removeItem(key);
    setValue(initialValue);
  };

  return { value, setValue, removeValue };
}