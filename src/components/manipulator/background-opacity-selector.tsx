'use client';

import { Slider } from '@/components/ui/slider';
import { useTerminal } from '@/contexts/terminal-context';

export default function BackgroundOpacitySelector() {
  const { state, updateBackgroundOpacity } = useTerminal();

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Background Opacity</label>
        <span className="text-sm text-muted-foreground">{state.backgroundOpacity}%</span>
      </div>
      <Slider
        value={[state.backgroundOpacity]}
        onValueChange={(value) => updateBackgroundOpacity(value[0])}
        max={100}
        min={0}
        step={1}
        className="w-full"
      />
    </div>
  );
}