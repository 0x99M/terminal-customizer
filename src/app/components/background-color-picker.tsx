'use client';

import { useState } from 'react';
import { ColorPicker } from '@/components/ui/color-picker';

export default function BackgroundColorPicker() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  return (
    <div className="w-full flex justify-between items-center">
      <ColorPicker
        name="Background Color"
        value={backgroundColor}
        onChange={setBackgroundColor}
      />
    </div>
  );
}