import React from 'react'

/**
 * Represents the document settings options
 * @component
 */
const SettingsBar = () => {
  return (
    <nav className='ml-[1px]'>
      <ul className='flex flex-row space-x-2 text-[14px] font-normal text-text'>
        <li className='py-[2px] px-2 rounded-smdm hover:bg-gray-100'>
          <a href="/">File</a>
        </li>
        <li className='py-[2px] px-2 rounded-md hover:bg-gray-100'>
          <a href="/">Edit</a>
        </li>
        <li className='py-[2px] px-2 rounded-md hover:bg-gray-100'>
          <a href="/">View</a>
        </li>
        <li className='py-[2px] px-2 rounded-md hover:bg-gray-100'>
          <a href="/">Insert</a>
        </li>
        <li className='py-[2px] px-2 rounded-md hover:bg-gray-100'>
          <a href="/">Format</a>
        </li>
        <li className='py-[2px] px-2 rounded-md hover:bg-gray-100'>
          <a href="/">Tools</a>
        </li>
        <li className='py-[2px] px-2 rounded-md hover:bg-gray-100'>
          <a href="/">Extensions</a>
        </li>
        <li className='py-[2px] px-2 rounded-md hover:bg-gray-100'>
          <a href="/">Help</a>
        </li>
      </ul>
    </nav>
  )
}

export default SettingsBar