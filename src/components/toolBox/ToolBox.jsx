import React, { useState } from "react";
import Icons from "./Icons";
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

/**
 * Represents the toolbox for the editor screen
 * @component
 */
const ToolBox = () => {
    // This is for managing the screen width
  const [screenDropdown, setScreenDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  
//   This states are for managing the background color for bold,italics and underline
  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(false)
  const [underline, setUnderline] = useState(false)

//   This is for managing text variant dropdown
  const [textDropdown,setTextDropdown] = useState(false)
  const [selectedText,setSelectedText] = useState(textOptions[0])

//   This is for managing the text size
  const [textSize, setTextSize ] = useState(10)

//   This function is for handling the screen dropdown
  const handleScreenDropdown = () => {
    setScreenDropdown(!screenDropdown);
  };


// this function is for handling the option select
  const handleOptionSelect = (option) => {
    console.log("Selected option:", option);
    setSelectedOption(option);
    setScreenDropdown(false);
  };

//   This function is for handling the text variant dropdown
  const handleTextDropdown = ()=>{
    setTextDropdown(!textDropdown)
  }

//   This function is for handling the text variant select
  const handleTextOptionsSelect=(option)=>{
    setSelectedText(option)
    setTextDropdown(false)
  } 

//   This function is for incrementing the text size
  const incrementTextSize = ()=>{
    setTextSize(textSize+1)
  }

//   This function is for decrementing the text size
  const decrementTextSize = ()=>{
    setTextSize(textSize-1)
  }

//   These functions are for handling the bold,italic and underline
  const handleBold = ()=>{
    setBold(!bold)
    }

    const handleItalic = ()=>{
        setItalic(!italic)
    }

    const handleUnderline = ()=>{
        setUnderline(!underline)
    }

  return (
    <>
      <div className="flex flex-row mx-5 rounded-3xl justify-between bg-toolbox px-3 py-1">
        <div className="flex flex-row space-x-1 ">
          <div className="hover:bg-toolboxHover cursor-pointer flex justify-center items-center px-2 rounded-md">
            <Icons item="undo" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer flex justify-center items-center px-2 rounded-md">
            <Icons item="redo" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer flex justify-center items-center px-2 rounded-md">
            <Icons item="print" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer flex justify-center items-center px-2 rounded-md">
            <Icons item="spellcheck" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer flex justify-center items-center px-2 rounded-md">
            <Icons item="imagesearch_roller" />
          </div>
          <div
            className="hover:bg-toolboxHover cursor-pointer flex justify-center items-center px-2 rounded-md"
            onClick={handleScreenDropdown}
          >
            <div className="flex flex-row">
              <p className="text-[14px] translate-y-1">{selectedOption}</p>
              {screenDropdown ? (
                <Icons item="arrow_drop_up" />
              ) : (
                <Icons item="arrow_drop_down" />
              )}
              {
                screenDropdown && (
                    <div className="absolute pl-5 pr-1 py-2  bg-white text-[14px] focus:outline-none rounded-md  z-10 translate-y-8 -translate-x-1">
                        <div className="flex flex-col justify-end space-y-2">
                            {options.map((option)=>(
                                <p onClick={(e)=>handleOptionSelect(option)}>{option}</p>
                            ))}
                        </div>
                    </div>
                )
              }
            </div>
          </div>

          <VerticalLine />
          <div
            className="hover:bg-toolboxHover cursor-pointer flex justify-center items-center px-2 rounded-md"
            onClick={handleTextDropdown}
          >
            <div className="flex flex-row">
              <p className="text-[14px] translate-y-1">{selectedText}</p>
              {textDropdown ? (
                <Icons item="arrow_drop_up" />
              ) : (
                <Icons item="arrow_drop_down" />
              )}
              {
                textDropdown && (
                    <div className="absolute  w-[150px]  bg-white text-[14px] focus:outline-none rounded-md  z-10 translate-y-8 -translate-x-1 shadow-md">
                        <div className="flex flex-col justify-end space-y-2">
                            {textOptions.map((option)=>(
                                <div className="flex flex-col">
                                    <div className="flex flex-row py-5 px-3 justify-between">
                                    <p  onClick={(e)=>handleTextOptionsSelect(option)}>{option}</p>
                                        <Icons item="arrow_right" />
                                    </div>
                                
                                <div className="w-full h-[1px] bg-gray-200"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
              }
            </div>
          </div>

          <VerticalLine />
          <div className="hover:bg-toolboxHover cursor-pointer flex justify-center items-center px-2 rounded-md" onClick={incrementTextSize}>
            <Icons item="add" />
          </div>
          <input
            type="number"
            name="text"
            id="text"
            value={textSize}
            onChange={(e)=>setTextSize(e.target.value)}
            className="max-w-[35px] h-[26px] border-[1px] border-gray-700 bg-toolbox rounded-md p-1 flex text-center  appearance-none number-input"
          />
          <div className="hover:bg-toolboxHover cursor-pointer flex justify-center items-center px-2 rounded-md" onClick={decrementTextSize}>
            <Icons item="remove" />
          </div>
          <VerticalLine />
          <div className={`hover:bg-toolboxHover flex justify-center items-center cursor-pointer ${bold && 'bg-blue-200'} px-2 rounded-md`} onClick={handleBold}>
            <Icons item="format_bold" />
          </div>
          <div className={`hover:bg-toolboxHover flex justify-center items-center cursor-pointer ${italic && 'bg-blue-200'} px-2 rounded-md`} onClick={handleItalic}>
            <Icons item="format_italic" />
          </div>
          <div className={`hover:bg-toolboxHover flex justify-center items-center cursor-pointer ${underline && 'bg-blue-200'} px-2 rounded-md`} onClick={handleUnderline}>
            <Icons item="format_underlined" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer flex justify-center items-center px-2 rounded-md">
            <Icons item="format_color_text" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer flex justify-center items-center px-2 rounded-md">
            <Icons item="stylus" />
          </div>
          <VerticalLine />
          <div className="hover:bg-toolboxHover cursor-pointer flex justify-center items-center px-2 rounded-md">
            <Icons item="link" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer flex justify-center items-center px-2 rounded-md">
            <Icons item="add_comment" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer flex justify-center items-center px-2 rounded-md">
            <Icons item="image" />
          </div>
          <VerticalLine />
          <div className="hover:bg-toolboxHover cursor-pointer flex justify-center items-center px-2 rounded-md">
            <Icons item="format_align_right" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer flex justify-center items-center px-2 rounded-md">
            <Icons item="format_line_spacing" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer flex justify-center items-center px-2 rounded-md">
            <Icons item="checklist" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer flex justify-center items-center px-2 rounded-md">
            <Icons item="format_list_bulleted" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer flex justify-center items-center px-2 rounded-md">
            <Icons item="format_list_numbered" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer flex justify-center items-center px-2 rounded-md">
            <Icons item="format_indent_increase" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer flex justify-center items-center px-2 rounded-md">
            <Icons item="format_indent_decrease" />
          </div>
          <div className="hover:bg-toolboxHover cursor-pointer flex justify-center items-center px-2 rounded-md">
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
