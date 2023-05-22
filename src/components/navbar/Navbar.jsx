import React from 'react'
import DocsIcon from '../../assets/Google-Docs-logo.png'
import ProfileBar from './ProfileBar'
import SettingsBar from './SettingsBar'
import TitleBar from './TitleBar'

/**
 * This is the navbar component that contain all the settings and profile and other options for the user
 * @component
 */

const Navbar = () => {
  return (
    <>
        <div className='flex flex-row justify-between px-2 py-2 items-center'>
            <div className='flex flex-row'>
                <img src={DocsIcon} alt='Google Docs Icon' className='mt-2 h-8 w-15'/>
                <div className='flex flex-col'>
                    <TitleBar/>
                    <SettingsBar/>
                </div>
            </div>
            <div>
                <ProfileBar />
            </div>
        </div>
    </>
  )
}

export default Navbar