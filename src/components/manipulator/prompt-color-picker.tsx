'use client';

import { useState } from 'react';
import { ColorPicker } from '@/components/ui/color-picker';

export default function PromptColorPicker() {
  const [promptColor, setPromptColor] = useState('#00ff00');

  return (
    <div className="w-full flex justify-between items-center">
      <ColorPicker
        name="Prompt Color"
        value={promptColor}
        onChange={setPromptColor}
      />
    </div>
  );
}