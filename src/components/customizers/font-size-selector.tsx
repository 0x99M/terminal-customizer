'use client';

import { Slider } from '@/components/ui/slider';
import { useTerminal } from '@/contexts/terminal-context';

export default function FontSizeSelector() {
  const { state, updateFontSize } = useTerminal();

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Font Size</label>
        <span className="text-sm text-muted-foreground">{state.fontSize}px</span>
      </div>
      <Slider
        value={[state.fontSize]}
        onValueChange={(value) => updateFontSize(value[0])}
        max={48}
        min={8}
        step={1}
        className="w-full"
      />
    </div>
  );
}