'use client';
import TextareaAutosize from 'react-textarea-autosize';
import React from 'react'
import { Button } from "@/app/components/ui/button"
import { SendHorizonal } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/app/components/ui/hover-card"

type Props = {}

const Chatinput = (props: Props) => {
  return (
    <div className='stretch flex bg-gray-700 p-8 pt-0 items-centerrelative bottom-0 w-full '>
      <form className='stretch shadow-md bg-gray-600 flex px-4 py-2 items-center rounded-lg relative bottom-0 w-full'>
        <TextareaAutosize
          className="placeholder:text-gray-400 text-gray-50 m-0 min-h-10 max-h-[44vh] w-full resize-none border-0 bg-transparent mr-2 p-0 dark:bg-transparent pl-"
          placeholder="Type your message here..."
        />
        <HoverCard>
          <HoverCardTrigger>
            <Button size="icon" type="submit" variant="appear" className='self-end bottom-0 hover:bg-gray-400 text-gray-300 hover:text-gray-100'>
              <SendHorizonal className="h-4 w-4 "/>
            </Button></HoverCardTrigger>
          <HoverCardContent>
            Send message
          </HoverCardContent>
        </HoverCard>

      </form>
    </div>
  )
}

export default Chatinput