import React from 'react'

function Button({id , title , containerClass , leftIcon}) {
  return (
    <button id={id} className={`group relative ${containerClass} rounded-full px-5 py-2.5 overflow-hidden cursor-pointer text-black w-fit z-10 `}>
        {leftIcon}
        <span className='inline-flex relative overflow-hidden font-general text-xs  uppercase'>
            <div>
                {title}
            </div>
        </span>
    </button>
  )
}

export default Button
