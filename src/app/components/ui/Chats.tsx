import React from 'react'
import Chatinput from './Chatinput'

type Props = {}

const Chats = (props: Props) => {
  return (
    <div className='h-full w-full h-max-full  flex flex-col'>
      <div className='h-full'></div>
      <Chatinput />
    </div>
    
  )
}

export default Chats