"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeContextType = {
    isDark: boolean;
    setIsDark: (val: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [isDark, setIsDark] = useState(false);
    
    useEffect(() => {
        if (typeof document !== 'undefined') {
            if (isDark) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
        }
    }, [isDark]);

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) return { isDark: false, setIsDark: () => {} };
    return context;
}
