'use client';

import { Slider } from '@/components/ui/slider';
import { useTerminal } from '@/contexts/terminal-context';

export default function LineSpacingSelector() {
  const { state, updateLineSpacing } = useTerminal();

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Line Spacing</label>
        <span className="text-sm text-muted-foreground">{state.lineSpacing.toFixed(1)}</span>
      </div>
      <Slider
        value={[state.lineSpacing * 10]}
        onValueChange={(value) => updateLineSpacing(value[0] / 10)}
        max={20}
        min={8}
        step={1}
        className="w-full"
      />
    </div>
  );
}