import BackgroundColorPicker from "./components/background-color-picker";
import CursorColorPicker from "./components/cursor-color-picker";
import CursorStyleSelector from "./components/cursor-style-selector";
import FontSelector from "./components/font-selector";
import FontSizeSelector from "./components/font-size-selector";
import FontWeightSelector from "./components/font-weight-selector";
import LineSpacingSelector from "./components/line-spacing-selector";
import SelectionBackgroundColorPicker from "./components/selection-background-color-picker";
import TextColorPicker from "./components/text-color-picker";

export default function Home() {
  return (
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
        </div>
        <div className="col-span-3 flex flex-col items-center justify-center">
          <h2 className="text-xl font-medium">Main Content</h2>
        </div>
        <div className="flex flex-col items-center justify-start gap-6">
          <BackgroundColorPicker />
          <CursorColorPicker />
          <TextColorPicker />
          <SelectionBackgroundColorPicker />
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg flex items-center justify-center">
        <h3 className="text-lg font-medium">Footer Section</h3>
      </div>
    </div>
  );
}
