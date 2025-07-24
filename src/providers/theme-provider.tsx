'use client';

import { ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes';

interface ThemeContextProps extends ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children, ...props }: ThemeContextProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}