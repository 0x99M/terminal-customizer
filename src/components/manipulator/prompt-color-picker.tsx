'use client';

import { ColorPicker } from '@/components/ui/color-picker';
import { useTerminal } from '@/contexts/terminal-context';

export default function PromptColorPicker() {
  const { state, updatePromptColor } = useTerminal();

  return (
    <div className="w-full flex justify-between items-center">
      <ColorPicker
        name="Prompt Color"
        value={state.promptColor}
        onChange={updatePromptColor}
      />
    </div>
  );
}