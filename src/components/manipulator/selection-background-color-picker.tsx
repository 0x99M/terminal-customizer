'use client';

import { ColorPicker } from '@/components/ui/color-picker';
import { useTerminal } from '@/contexts/terminal-context';

export default function SelectionBackgroundColorPicker() {
  const { state, updateSelectionBackgroundColor } = useTerminal();

  return (
    <div className="w-full flex justify-between items-center">
      <ColorPicker
        name="Selection Background"
        value={state.selectionBackgroundColor}
        onChange={updateSelectionBackgroundColor}
      />
    </div>
  );
}