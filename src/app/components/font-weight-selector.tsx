'use client';

import { useState } from 'react';
import { Slider } from '@/components/ui/slider';

export default function FontWeightSelector() {
  const [fontWeight, setFontWeight] = useState(400);

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Font Weight</label>
        <span className="text-sm text-muted-foreground">{fontWeight}</span>
      </div>
      <Slider
        value={[fontWeight]}
        onValueChange={(value) => setFontWeight(value[0])}
        max={900}
        min={100}
        step={100}
        className="w-full"
      />
    </div>
  );
}