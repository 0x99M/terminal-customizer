'use client';

import { useState } from 'react';
import { Slider } from '@/components/ui/slider';

export default function FontSizeSelector() {
  const [fontSize, setFontSize] = useState(14);

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Font Size</label>
        <span className="text-sm text-muted-foreground">{fontSize}px</span>
      </div>
      <Slider
        value={[fontSize]}
        onValueChange={(value) => setFontSize(value[0])}
        max={48}
        min={8}
        step={1}
        className="w-full"
      />
    </div>
  );
}