'use client';

import { ColorPicker } from '@/components/ui/color-picker';
import { useTerminal } from '@/contexts/terminal-context';

export default function TextColorPicker() {
  const { state, updateTextColor } = useTerminal();

  return (
    <div className="w-full flex justify-between items-center">
      <ColorPicker
        name="Text Color"
        value={state.textColor}
        onChange={updateTextColor}
      />
    </div>
  );
}