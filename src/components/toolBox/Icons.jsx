import React from 'react'

/**
 * Represents the icons in toolbox.
 * @component
 */
const Icons = (props) => {
  return (
    <span className="material-symbols-outlined font-normal text-lg text-gray-700">{props.item}</span>
  )
}

export default Icons