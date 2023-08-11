import React from 'react'
import Chatinput from './Chatinput'
import { ScrollArea } from "./scroll-area"
import Conversation from './Conversation'
import { Separator } from "./separator"
import Info from './Info'
import Pinned from './Pinned'

type Props = {}

const Chatbox = (props: Props) => {
  return (
    <div className='h-full w-full h-max-full bg-popover flex flex-col'>
      <ScrollArea className='h-full text-foreground px-8'>
        <Pinned />
        <Info />
        <Separator />
        <Conversation />
        <Separator />
      </ScrollArea>
      <Chatinput />
    </div>

  )
}

export default Chatbox