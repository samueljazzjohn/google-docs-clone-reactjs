import React from 'react'

const EditorScreen = () => {
  return (
    <>
      <div className='flex border-[0.5px] border-gray-400 m-4 w-[50%] bg-editorPrimary'>
        <textarea className='w-[100%] h-[1000px] bg-editorPrimary outline-none p-10' placeholder='Start writing here...'></textarea>
      </div>
    </>
  )
}

export default EditorScreen