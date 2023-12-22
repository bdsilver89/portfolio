import React, { createContext, useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export type DarkModeContextType = {
  isDarkMode: boolean;
  setDarkMode: (mode: boolean) => void;
};

export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const systemPreference = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
  );

  const [isDarkMode, setDarkMode] = useState(!!systemPreference);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return <DarkModeContext.Provider value={{ isDarkMode, setDarkMode }}>{children}</DarkModeContext.Provider>;
}

export function useDarkModeContext() {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error("useDarkModeContext must be used inside the DarkModeProvider");
  }

  return context;
}
