'use client';

import { ColorPicker } from '@/components/ui/color-picker';
import { useTerminal } from '@/contexts/terminal-context';

export default function BackgroundColorPicker() {
  const { state, updateBackgroundColor } = useTerminal();

  return (
    <div className="w-full flex justify-between items-center">
      <ColorPicker
        name="Background Color"
        value={state.backgroundColor}
        onChange={updateBackgroundColor}
      />
    </div>
  );
}