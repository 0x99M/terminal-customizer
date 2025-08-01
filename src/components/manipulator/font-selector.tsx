'use client';

import { Check, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTerminal } from '@/contexts/terminal-context';

const FONTS = [
  'Inter',
  'Roboto',
  'Open Sans',
  'Lato',
  'Montserrat',
  'Poppins',
  'Source Sans Pro',
  'Playfair Display',
  'Merriweather',
  'Lora',
  'Fira Code',
  'JetBrains Mono',
];

export default function FontSelector() {
  const { state, updateFont } = useTerminal();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`w-full px-4 py-3 text-left bg-background border border-input rounded-md shadow-sm hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors`}
        >
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">{state.selectedFont}</div>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        {FONTS.map((font) => (
          <DropdownMenuItem
            key={font}
            onClick={() => updateFont(font)}
            className="cursor-pointer"
          >
            <div className="flex items-center justify-between w-full">
              <span>{font}</span>
              {state.selectedFont === font && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}