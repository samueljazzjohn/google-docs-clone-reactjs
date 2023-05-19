import React from 'react'

const SettingsBar = () => {
  return (
    <nav className='ml-2'>
      <ul className='flex flex-row space-x-5 text-[14px] font-normal text-text'>
        <li>
          <a href="/">File</a>
        </li>
        <li>
          <a href="/">Edit</a>
        </li>
        <li>
          <a href="/">View</a>
        </li>
        <li>
          <a href="/">Insert</a>
        </li>
        <li>
          <a href="/">Format</a>
        </li>
        <li>
          <a href="/">Tools</a>
        </li>
        <li>
          <a href="/">Extensions</a>
        </li>
        <li>
          <a href="/">Help</a>
        </li>
      </ul>
    </nav>
  )
}

export default SettingsBar