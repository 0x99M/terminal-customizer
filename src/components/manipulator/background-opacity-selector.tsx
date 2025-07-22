'use client';

import { useState } from 'react';
import { Slider } from '@/components/ui/slider';

export default function BackgroundOpacitySelector() {
  const [backgroundOpacity, setBackgroundOpacity] = useState(100);

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Background Opacity</label>
        <span className="text-sm text-muted-foreground">{backgroundOpacity}%</span>
      </div>
      <Slider
        value={[backgroundOpacity]}
        onValueChange={(value) => setBackgroundOpacity(value[0])}
        max={100}
        min={0}
        step={1}
        className="w-full"
      />
    </div>
  );
}