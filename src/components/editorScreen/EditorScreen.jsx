import React from "react";
import Icons from "../Icons";
import VerticalLine from "./VerticalLine";

const options = ["Fit", "50%", "75%", "90%", "100%", "125%", "150%", "200%"];
const textOptions = ["Normal text", "Title", "Subtitle", "Heading 1", "Heading 2", "Heading 3", "Heading 4", "Heading 5", "Heading 6"];

const EditorScreen = () => {
  return (
    <>
      <div className="flex flex-row mx-5 rounded-3xl  bg-[#edf2fa] p-3 space-x-3">
        <div className="hover:bg-gray-200 cursor-pointer px-1 py-1 rounded-md">
          <Icons item="undo" />
        </div>
        <div className="hover:bg-gray-200 cursor-pointer px-1 py-1 rounded-md">
          <Icons item="redo" />
        </div>
        <div className="hover:bg-gray-200 cursor-pointer px-1 py-1 rounded-md">
          <Icons item="print" />
        </div>
        <div className="hover:bg-gray-200 cursor-pointer px-1 py-1 rounded-md">
          <Icons item="spellcheck" />
        </div>
        <div className="hover:bg-gray-200 cursor-pointer px-1 py-1 rounded-md">
          <Icons item="imagesearch_roller" />
        </div>
        <VerticalLine />
        <select name="screenWidth" id="screenWidth" className="bg-[#edf2fa]">
        {options.map((option) => (
            <option value={option}>{option}</option>
        ))}
      </select>
      <VerticalLine />
      <select name="textVariant" id="textVariant" className="bg-[#edf2fa]">
        {textOptions.map((option) => (
            <option value={option}>{option}</option>
        ))}
      </select>
      <VerticalLine />
      <Icons item="add" />
            <input type="text" name="text" id="text" />
        <Icons item="remove"/>
        <VerticalLine/>
        <Icons item="format_bold"/>
        <Icons item="format_italic"/>
        <Icons item="format_underlined"/>
        <Icons item="format_color_text"/>
        <Icons item="stylus"/>
        <VerticalLine/>
        <Icons item="link"/>
        <Icons item="add_comment"/>
        <Icons item="image"/>
        <VerticalLine />
      </div>
    </>
  );
};

export default EditorScreen;
