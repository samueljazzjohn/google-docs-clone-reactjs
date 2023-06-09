import React, { useEffect, useRef } from "react";

/**
 * Represents the title bar of the document which contains the title of the document and some icons.
 * @component
 */
const TitleBar = () => {
    // This is the reference to the document title element
    const inputRef = useRef(null);

    useEffect(() => {
      adjustInputWidth()
    }, []);

    // This function adjusts the width of the input element according to the length of the text
    const adjustInputWidth = () => {
        if (inputRef.current) {
          const inputElement = inputRef.current;
          inputElement.style.width = 0;    
          inputElement.style.width = `${inputElement.scrollWidth}px`; 
        }
      };

    const handleInputChange = () => {
        adjustInputWidth();
      };

  return (  
    <>
      <div className="flex flex-row space-x-5">
        <input
          type="text"
          defaultValue="Untitiled Document"
          className="text-[20px] font-normal text-text rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
          ref={inputRef}
          onChange={handleInputChange}
        />
        <span className="material-symbols-outlined translate-y-1">star</span>
        <span className="material-symbols-outlined translate-y-1">
          cloud_done
        </span>
        <span className="material-symbols-outlined translate-y-1">drive_file_move</span>
      </div>
    </>
  );
};

export default TitleBar;
