'use client';

import { ColorPicker } from '@/components/ui/color-picker';
import { useTerminal } from '@/contexts/terminal-context';

export default function CursorColorPicker() {
  const { state, updateCursorColor } = useTerminal();

  return (
    <div className="w-full flex justify-between items-center">
      <ColorPicker
        name="Cursor Color"
        value={state.cursorColor}
        onChange={updateCursorColor}
      />
    </div>
  );
}