'use client';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useTerminal } from '@/contexts/terminal-context';

export default function CursorStyleSelector() {
  const { state, updateCursorStyle } = useTerminal();

  return (
    <div className="w-full flex justify-between items-center">
      <label className="text-sm font-medium">Cursor Style:</label>
      <ToggleGroup
        type="single"
        variant="outline"
        value={state.cursorStyle}
        onValueChange={(value) => value && updateCursorStyle(value)}
        className="justify-start"
      >
        <ToggleGroupItem value="block" aria-label="Block cursor" className="font-mono text-sm">
          █
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline cursor" className="font-mono text-sm">
          _
        </ToggleGroupItem>
        <ToggleGroupItem value="bar" aria-label="Bar cursor" className="font-mono text-sm">
          |
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}