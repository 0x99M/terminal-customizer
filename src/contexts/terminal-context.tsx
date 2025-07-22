'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface TerminalState {
  // Font settings
  selectedFont: string;
  fontSize: number;
  fontWeight: number;
  lineSpacing: number;
  
  // Colors
  backgroundColor: string;
  textColor: string;
  cursorColor: string;
  selectionBackgroundColor: string;
  promptColor: string;
  
  // Cursor and prompt
  cursorStyle: string;
  promptSymbol: string;
  
  // Background
  backgroundOpacity: number;
}

interface TerminalContextType {
  state: TerminalState;
  updateFont: (font: string) => void;
  updateFontSize: (size: number) => void;
  updateFontWeight: (weight: number) => void;
  updateLineSpacing: (spacing: number) => void;
  updateBackgroundColor: (color: string) => void;
  updateTextColor: (color: string) => void;
  updateCursorColor: (color: string) => void;
  updateSelectionBackgroundColor: (color: string) => void;
  updatePromptColor: (color: string) => void;
  updateCursorStyle: (style: string) => void;
  updatePromptSymbol: (symbol: string) => void;
  updateBackgroundOpacity: (opacity: number) => void;
}

const TerminalContext = createContext<TerminalContextType | undefined>(undefined);

export function TerminalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<TerminalState>({
    // Font settings
    selectedFont: 'Inter',
    fontSize: 14,
    fontWeight: 400,
    lineSpacing: 1.0,
    
    // Colors
    backgroundColor: '#000000',
    textColor: '#ffffff',
    cursorColor: '#ffffff',
    selectionBackgroundColor: '#0078d4',
    promptColor: '#00ff00',
    
    // Cursor and prompt
    cursorStyle: 'block',
    promptSymbol: '❯',
    
    // Background
    backgroundOpacity: 100,
  });

  const updateFont = (font: string) => setState(prev => ({ ...prev, selectedFont: font }));
  const updateFontSize = (size: number) => setState(prev => ({ ...prev, fontSize: size }));
  const updateFontWeight = (weight: number) => setState(prev => ({ ...prev, fontWeight: weight }));
  const updateLineSpacing = (spacing: number) => setState(prev => ({ ...prev, lineSpacing: spacing }));
  const updateBackgroundColor = (color: string) => setState(prev => ({ ...prev, backgroundColor: color }));
  const updateTextColor = (color: string) => setState(prev => ({ ...prev, textColor: color }));
  const updateCursorColor = (color: string) => setState(prev => ({ ...prev, cursorColor: color }));
  const updateSelectionBackgroundColor = (color: string) => setState(prev => ({ ...prev, selectionBackgroundColor: color }));
  const updatePromptColor = (color: string) => setState(prev => ({ ...prev, promptColor: color }));
  const updateCursorStyle = (style: string) => setState(prev => ({ ...prev, cursorStyle: style }));
  const updatePromptSymbol = (symbol: string) => setState(prev => ({ ...prev, promptSymbol: symbol }));
  const updateBackgroundOpacity = (opacity: number) => setState(prev => ({ ...prev, backgroundOpacity: opacity }));

  return (
    <TerminalContext.Provider value={{
      state,
      updateFont,
      updateFontSize,
      updateFontWeight,
      updateLineSpacing,
      updateBackgroundColor,
      updateTextColor,
      updateCursorColor,
      updateSelectionBackgroundColor,
      updatePromptColor,
      updateCursorStyle,
      updatePromptSymbol,
      updateBackgroundOpacity,
    }}>
      {children}
    </TerminalContext.Provider>
  );
}

export function useTerminal() {
  const context = useContext(TerminalContext);
  if (context === undefined) {
    throw new Error('useTerminal must be used within a TerminalProvider');
  }
  return context;
}