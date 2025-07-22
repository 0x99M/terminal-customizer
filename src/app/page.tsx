import { TerminalProvider } from "@/contexts/terminal-context";
import BackgroundColorPicker from "../components/manipulator/background-color-picker";
import BackgroundOpacitySelector from "../components/manipulator/background-opacity-selector";
import CursorColorPicker from "../components/manipulator/cursor-color-picker";
import CursorStyleSelector from "../components/manipulator/cursor-style-selector";
import FontSelector from "../components/manipulator/font-selector";
import FontSizeSelector from "../components/manipulator/font-size-selector";
import FontWeightSelector from "../components/manipulator/font-weight-selector";
import LineSpacingSelector from "../components/manipulator/line-spacing-selector";
import PromptColorPicker from "../components/manipulator/prompt-color-picker";
import PromptSymbolSelector from "../components/manipulator/prompt-symbol-selector";
import SelectionBackgroundColorPicker from "../components/manipulator/selection-background-color-picker";
import TextColorPicker from "../components/manipulator/text-color-picker";

export default function Home() {
  return (
    <TerminalProvider>
      <div className="h-screen w-screen grid grid-rows-[1fr_7fr_1fr] gap-4 p-8">
        <div className="bg-gray-100 rounded-lg flex items-center justify-center">
          <h1 className="text-2xl font-semibold">Header Section</h1>
        </div>

        <div className="grid grid-cols-5 gap-4">
          <div className="flex flex-col items-center justify-start gap-6">
            <FontSelector />
            <FontSizeSelector />
            <FontWeightSelector />
            <LineSpacingSelector />
            <CursorStyleSelector />
            <PromptSymbolSelector />
          </div>
          <div className="col-span-3 flex flex-col items-center justify-center">
            <h2 className="text-xl font-medium">Main Content</h2>
          </div>
          <div className="flex flex-col items-center justify-start gap-6">
            <BackgroundColorPicker />
            <BackgroundOpacitySelector />
            <CursorColorPicker />
            <TextColorPicker />
            <SelectionBackgroundColorPicker />
            <PromptColorPicker />
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg flex items-center justify-center">
          <h3 className="text-lg font-medium">Footer Section</h3>
        </div>
      </div>
    </TerminalProvider>
  );
}
