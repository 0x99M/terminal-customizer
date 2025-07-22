'use client';

import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export default function CursorStyleSelector() {
  const [cursorStyle, setCursorStyle] = useState('block');

  return (
    <div className="w-full flex justify-between items-center">
      <label className="text-sm font-medium">Cursor Style:</label>
      <ToggleGroup
        type="single"
        variant="outline"
        value={cursorStyle}
        onValueChange={(value) => value && setCursorStyle(value)}
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