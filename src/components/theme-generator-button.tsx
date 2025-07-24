'use client';

import { useTerminal } from '@/contexts/terminal-context';
import { Sparkles } from 'lucide-react';

export default function ThemeGeneratorButton() {
  const { generateCoolTheme } = useTerminal();

  return (
    <button
      onClick={generateCoolTheme}
      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
    >
      <Sparkles className="w-5 h-5" />
      <span>Generate Terminal Theme</span>
    </button>
  );
}