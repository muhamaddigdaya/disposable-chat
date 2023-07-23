'use client';
import TextareaAutosize from 'react-textarea-autosize';
import React from 'react'
import { Button } from "@/app/components/ui/button"
import { SendHorizonal } from 'lucide-react';
import { icons } from 'lucide-react';

type Props = {}

const Chatinput = (props: Props) => {
  return (
    <form className='flex border-2 p-2 items-center rounded-lg sticky bottom-4 w-full'>
      <TextareaAutosize
        className="m-0 min-h-10 max-h-[44vh] w-full resize-none border-0 bg-transparent mr-2 p-0 dark:bg-transparent pl-"
        placeholder="Type your message here..."
      />
        <Button size="icon" type="submit" className='self-end bottom-0'>
          <SendHorizonal className="h-4 w-4"/>
        </Button>

      
  </form>
  )
}

export default Chatinput