import React from 'react'
import Chatinput from './Chatinput'
import { ScrollArea } from "@/app/components/ui/scroll-area"
import Conversation from './Conversation'
import { Separator } from "@/app/components/ui/separator"
import Info from './Info'

type Props = {}

const Chatbox = (props: Props) => {
  return (
    <div className='h-full w-full h-max-full bg-gray-700 flex flex-col'>
      <ScrollArea className='h-full text-slate-100 px-8'>
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