import React from "react";
import EditorScreen from "./EditorScreen";
import SummarySection from "./LeftSideBar";

const EditorSection = () => {
  return (
    <>
     <div className=" p-3">
        <div className=" flex flex-row h-[1000px] w-[100%] bg-editorSecondary border-l-[0.5px] border-t-[0.5px] border-gray-700">
            <SummarySection/>
            <EditorScreen/>
        </div>
     </div>
    </>
  );
};

export default EditorSection;
