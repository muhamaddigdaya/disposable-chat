import React from 'react'

type Props = {}

const Leftbar = (props: Props) => {
  return (
    <div className='h-full w-1/6 bg-gray-800 text-slate-100 pl-8 pt-8'>
      <ul>
        <li className='mb-2 hover:underline cursor-pointer'>Clear</li>
        <li className='mb-2 hover:underline cursor-pointer'></li>
        <li className='mb-2 hover:underline cursor-pointer'>Theme</li>
        <li className='mb-2 hover:underline cursor-pointer'>Settings</li>
      </ul>
    </div>
  )
}

export default Leftbar