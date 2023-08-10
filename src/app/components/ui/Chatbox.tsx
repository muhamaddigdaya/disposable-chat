import React from 'react'
import Chatinput from './Chatinput'
import { ScrollArea } from "@/components/ui/scroll-area"
import Conversation from './Conversation'
import { Separator } from "@/components/ui/separator"
import Info from './Info'

type Props = {}

const Chatbox = (props: Props) => {
  return (
    <div className='h-full w-full h-max-full bg-popover flex flex-col'>
      <ScrollArea className='h-full text-foreground px-8'>
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