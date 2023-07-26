import React from 'react'

type Props = {}

const Rightbar = (props: Props) => {
  return (
    <div className='h-full w-1/6 bg-gray-800 text-slate-100 p-4'>
        <div className='p-2 hover:bg-gray-600 hover:text-slate-50 rounded-md cursor-pointer'>Clear chat</div>
    </div>
  )
}

export default Rightbar