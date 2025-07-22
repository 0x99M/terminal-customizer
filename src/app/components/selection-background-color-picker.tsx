'use client';

import { useState } from 'react';
import { ColorPicker } from '@/components/ui/color-picker';

export default function SelectionBackgroundColorPicker() {
  const [selectionBackgroundColor, setSelectionBackgroundColor] = useState('#0078d4');

  return (
    <div className="w-full flex justify-between items-center">
      <ColorPicker
        name="Selection Background"
        value={selectionBackgroundColor}
        onChange={setSelectionBackgroundColor}
      />
    </div>
  );
}