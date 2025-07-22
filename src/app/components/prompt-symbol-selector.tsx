'use client';

import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export default function PromptSymbolSelector() {
  const [promptSymbol, setPromptSymbol] = useState('❯');

  return (
    <div className="w-full flex justify-between items-center">
      <label className="text-sm font-medium">Prompt Symbol:</label>
      <ToggleGroup
        type="single"
        variant="outline"
        value={promptSymbol}
        onValueChange={(value) => value && setPromptSymbol(value)}
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