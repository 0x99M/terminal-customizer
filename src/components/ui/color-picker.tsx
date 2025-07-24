"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface ColorPickerProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
};

const solids = [
  "#E2E2E2",
  "#ff75c3",
  "#ffa647",
  "#ffe83f",
  "#9fff5b",
  "#70e2ff",
  "#cd93ff",
  "#09203f",
  "#537895",
  "#ffffff",
  "#000000",
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#ff00ff",
  "#00ffff",
];

export function ColorPicker({ name, value, onChange, }: ColorPickerProps) {
  const [background, setBackground] = React.useState(value);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={`w-full justify-center items-center text-left font-medium ${!background ? "text-muted-foreground" : ""}`}
          style={{ borderColor: background, borderWidth: 2 }}
        >
          <span>{name}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="flex flex-wrap gap-1 mb-4">
          {solids.map((s) => (
            <div
              key={s}
              style={{ background: s }}
              className="rounded-md h-6 w-6 cursor-pointer active:scale-105 border border-gray-200"
              onClick={() => {
                setBackground(s)
                onChange(s)
              }}
            />
          ))}
        </div>

        <Input
          id="custom"
          value={background}
          className="h-8"
          onChange={(e) => {
            setBackground(e.currentTarget.value)
            onChange(e.currentTarget.value)
          }}
        />
      </PopoverContent>
    </Popover>
  )
};