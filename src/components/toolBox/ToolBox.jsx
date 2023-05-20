import React from 'react'
import Icons from "../Icons";
import VerticalLine from "../toolBox/VerticalLine";
import './ToolBox.css'

const options = ["Fit", "50%", "75%", "90%", "100%", "125%", "150%", "200%"];
const textOptions = [
  "Normal text",
  "Title",
  "Subtitle",
  "Heading 1",
  "Heading 2",
  "Heading 3",
  "Heading 4",
  "Heading 5",
  "Heading 6",
];

const ToolBox = () => {
  return (
    <>
         <div className="flex flex-row mx-5 rounded-3xl justify-between bg-toolbox p-3">
        <div className="flex flex-row space-x-3 ">
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
          <select name="screenWidth" id="screenWidth" className="bg-toolbox">
            {options.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
          <VerticalLine />
          <select name="textVariant" id="textVariant" className="bg-toolbox">
            {textOptions.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
          <VerticalLine />
          <Icons item="add" />
          <input type="number" name="text" id="text" className='max-w-[35px] h-[26px] border-[1px] border-gray-700 bg-toolbox rounded-md p-1 flex text-center  appearance-none number-input' />
          <Icons item="remove" />
          <VerticalLine />
          <Icons item="format_bold" />
          <Icons item="format_italic" />
          <Icons item="format_underlined" />
          <Icons item="format_color_text" />
          <Icons item="stylus" />
          <VerticalLine />
          <Icons item="link" />
          <Icons item="add_comment" />
          <Icons item="image" />
          <VerticalLine />
          <Icons item="format_align_right" />
          <Icons item="format_line_spacing" />
          <Icons item="checklist" />
          <Icons item="format_list_bulleted" />
          <Icons item="format_list_numbered" />
          <Icons item="format_indent_increase" />
          <Icons item="format_indent_decrease" />
          <Icons item="format_clear" />
        </div>
        <div className="flex flex-row justify-center items-center space-x-3">
            <div className="flex flex-row space-x-3">
            <Icons item="edit" />
            <p className="text-[15px]">Editing</p>
            <Icons item="arrow_drop_down" />
            </div>
            <VerticalLine />
            <Icons item="expand_less" />
            
        </div>
      </div>
    </>
  )
}

export default ToolBox