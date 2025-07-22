'use client';

import { Slider } from '@/components/ui/slider';
import { useTerminal } from '@/contexts/terminal-context';

export default function FontWeightSelector() {
  const { state, updateFontWeight } = useTerminal();

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Font Weight</label>
        <span className="text-sm text-muted-foreground">{state.fontWeight}</span>
      </div>
      <Slider
        value={[state.fontWeight]}
        onValueChange={(value) => updateFontWeight(value[0])}
        max={900}
        min={100}
        step={100}
        className="w-full"
      />
    </div>
  );
}