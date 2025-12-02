"use client"

import React, { createContext, useContext, useState } from 'react';
import { dictionary, Locale } from '@/lib/dictionary';

type I18nContextType = {
  locale: Locale;
  t: (path: string) => string;
  toggleLocale: () => void;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('zh');

  const toggleLocale = () => {
    setLocale(prev => prev === 'zh' ? 'en' : 'zh');
  };

  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = dictionary[locale];
    for (const key of keys) {
      if (current?.[key] === undefined) return path;
      current = current[key];
    }
    return current;
  };

  return (
    <I18nContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
