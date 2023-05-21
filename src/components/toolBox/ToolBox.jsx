import React, { useState } from "react";
import Icons from "../Icons";
import VerticalLine from "../toolBox/VerticalLine";
import "./ToolBox.css";

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
  const [screenDropdown, setScreenDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const handleScreenDropdown = () => {
    setScreenDropdown(true);
  };

  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
    setSelectedOption(option);
    setScreenDropdown(false);
  };

  return (
    <>
      <div className="flex flex-row mx-5 rounded-3xl justify-between bg-toolbox px-3 py-1">
        <div className="flex flex-row space-x-3 ">
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="undo" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="redo" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="print" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="spellcheck" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="imagesearch_roller" />
          </div>
          <div
            className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md"
            onClick={handleScreenDropdown}
          >
            <div className="flex flex-row">
              <p className="text-[14px]">{selectedOption}</p>
              {screenDropdown ? (
                <Icons item="expand_less" />
              ) : (
                <Icons item="expand_more" />
              )}
              {screenDropdown && (
                <select
                  name="screenWidth"
                  id="screenWidth"
                  value={selectedOption}
                  className=" absolute bg-toolbox hover:bg-toolboxHover text-[14px] focus:outline-none ring-0 ring-transparent appearance-none  z-10 translate-y-6"
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => handleOptionSelect(e.target.value)}
                >
                  {options.map((option) => (
                    <option value={option} className="appearance-none">
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>

          <VerticalLine />
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <select
              name="textVariant"
              id="textVariant"
              className="bg-toolbox hover:bg-toolboxHover text-[14px] focus:outline-none ring-0 ring-transparent"
            >
              {textOptions.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
          </div>

          <VerticalLine />
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="add" />
          </div>
          <input
            type="number"
            name="text"
            id="text"
            defaultValue="11"
            className="max-w-[35px] h-[26px] border-[1px] border-gray-700 bg-toolbox rounded-md p-1 flex text-center  appearance-none number-input"
          />
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="remove" />
          </div>
          <VerticalLine />
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="format_bold" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="format_italic" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="format_underlined" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="format_color_text" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="stylus" />
          </div>
          <VerticalLine />
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="link" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="add_comment" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="image" />
          </div>
          <VerticalLine />
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="format_align_right" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="format_line_spacing" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="checklist" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="format_list_bulleted" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="format_list_numbered" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="format_indent_increase" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="format_indent_decrease" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer px-1 py-[2px] rounded-md">
            <Icons item="format_clear" />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center space-x-3">
          <div className="flex flex-row space-x-3 px-3 rounded-3xl hover:bg-toolboxHover cursor-pointer">
            <Icons item="edit" />
            <p className="text-[15px]">Editing</p>
            <Icons item="arrow_drop_down" />
          </div>
          <VerticalLine />
          <Icons item="expand_less" />
        </div>
      </div>
    </>
  );
};

export default ToolBox;
