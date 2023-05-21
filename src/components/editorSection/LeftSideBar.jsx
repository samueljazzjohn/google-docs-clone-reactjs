import React, { useState } from "react";

const LeftSideBar = () => {
  const [visiblale, setVisible] = useState(true);
  const [summary, setSummary] = useState(false);

  const handleVisible = () => {
    setVisible(!visiblale);
  };

  const handleSummary = () => {
    setSummary(!summary);
  };

  return (
    <>
      <div className="flex flex-col p-5 w-[300px]">
        {visiblale ? (
          <>
            <span className="w-full material-symbols-outlined cursor-pointer" onClick={handleVisible}>arrow_back</span>
            <div className="flex flex-row justify-between mt-5">
                <p className="text-[12px] translate-y-1">Summary</p>
                <div className="flex justify-center items-center h-10 w-10 rounded-full cursor-pointer hover:bg-gray-300" onClick={handleSummary}>
                  {summary ? (
                    <span className="material-symbols-outlined text-xl">edit</span>
                  ) : (
                    <span className="material-symbols-outlined text-xl">add</span>
                  )} 
                </div>
            </div>
            <div className="text-center bg-gray-600 w-[95%] h-[0.5px] mt-1"></div>
            <p className="text-[12px] mt-5">Outline</p>
            <p className="text-[12px] mt-4 text-gray-500"><i>Headings you add to the document will appear here.</i></p>
          </>
        ) : (
          <>
            <span className="material-symbols-outlined cursor-pointer" onClick={handleVisible}>
              list
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default LeftSideBar;
