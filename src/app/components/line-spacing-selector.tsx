'use client';

import { useState } from 'react';
import { Slider } from '@/components/ui/slider';

export default function LineSpacingSelector() {
  const [lineSpacing, setLineSpacing] = useState(1.0);

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Line Spacing</label>
        <span className="text-sm text-muted-foreground">{lineSpacing.toFixed(1)}</span>
      </div>
      <Slider
        value={[lineSpacing * 10]}
        onValueChange={(value) => setLineSpacing(value[0] / 10)}
        max={20}
        min={8}
        step={1}
        className="w-full"
      />
    </div>
  );
}