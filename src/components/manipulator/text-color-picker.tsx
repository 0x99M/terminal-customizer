'use client';

import { useState } from 'react';
import { ColorPicker } from '@/components/ui/color-picker';

export default function TextColorPicker() {
  const [textColor, setTextColor] = useState('#ffffff');

  return (
    <div className="w-full flex justify-between items-center">
      <ColorPicker
        name="Text Color"
        value={textColor}
        onChange={setTextColor}
      />
    </div>
  );
}