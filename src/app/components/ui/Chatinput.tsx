'use client';
import TextareaAutosize from 'react-textarea-autosize';
import React from 'react'
import { Button } from "@/app/components/ui/button"
import { SendHorizonal } from 'lucide-react';
import { icons } from 'lucide-react';

type Props = {}

const Chatinput = (props: Props) => {
  return (
    <div className='stretch flex bg-white p-8 pt-0 items-centerrelative bottom-0 w-full'>
      <form className='stretch flex border-2 p-2 items-center rounded-lg relative bottom-0 w-full'>
        <TextareaAutosize
          className="m-0 min-h-10 max-h-[44vh] w-full resize-none border-0 bg-transparent mr-2 p-0 dark:bg-transparent pl-"
          placeholder="Type your message here..."
        />
        <Button size="icon" type="submit" className='self-end bottom-0'>
          <SendHorizonal className="h-4 w-4"/>
        </Button>
      </form>
    </div>
  )
}

export default Chatinput