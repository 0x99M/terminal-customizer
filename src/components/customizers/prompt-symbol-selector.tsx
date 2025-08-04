'use client';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useTerminal } from '@/contexts/terminal-context';

export default function PromptSymbolSelector() {
  const { state, updatePromptSymbol } = useTerminal();

  return (
    <div className="w-full flex justify-between items-center">
      <label className="text-sm font-medium">Prompt Symbol:</label>
      <ToggleGroup
        type="single"
        variant="outline"
        value={state.promptSymbol}
        onValueChange={(value) => value && updatePromptSymbol(value)}
        className="justify-start"
      >
        <ToggleGroupItem value="❯" aria-label="Arrow prompt" className="font-mono text-sm">
          ❯
        </ToggleGroupItem>
        <ToggleGroupItem value="λ" aria-label="Lambda prompt" className="font-mono text-sm">
          λ
        </ToggleGroupItem>
        <ToggleGroupItem value="$" aria-label="Dollar prompt" className="font-mono text-sm">
          $
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}