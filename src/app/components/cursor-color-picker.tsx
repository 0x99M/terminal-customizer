'use client';

import { useState } from 'react';
import { ColorPicker } from '@/components/ui/color-picker';

export default function CursorColorPicker() {
  const [cursorColor, setCursorColor] = useState('#ffffff');

  return (
    <div className="w-full flex justify-between items-center">
      <ColorPicker
        name="Cursor Color"
        value={cursorColor}
        onChange={setCursorColor}
      />
    </div>
  );
}