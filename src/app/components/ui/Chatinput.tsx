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
import { CopyBlock } from "react-code-blocks";

type Props = {}

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  // Get the input text
  const inputText = (document.getElementById('inputText') as HTMLTextAreaElement).value.trim();

  if (inputText !== '') {
    // Create a new paragraph element
    const newP = document.createElement('p');
    newP.textContent = inputText;

    // Append the new paragraph to the conversation div
    const conversation = document.getElementById('conversation');
    if (conversation) {
      conversation.appendChild(newP);
    }

    // Clear the input text area
    (document.getElementById('inputText') as HTMLTextAreaElement).value = '';
  }
}

const Chatinput = (props: Props) => {
  return (
    <div className='stretch flex bg-gray-700 p-8 pt-0 items-centerrelative bottom-0 w-full '>
      <form className='stretch  bg-gray-600 flex px-4 py-2 items-center rounded-lg relative bottom-0 w-full' id='chat-form' onSubmit={handleSubmit}>
        <TextareaAutosize
          className="placeholder:text-gray-400 text:xs text-gray-50 m-0 min-h-10 max-h-[44vh] w-full resize-none border-0 bg-transparent mr-2 p-0 dark:bg-transparent pl-"
          placeholder="Type your message here..."
          id='inputText'
        />
        <HoverCard openDelay={300} closeDelay={0}>
          <HoverCardTrigger className='self-end'>
            <Button size="icon" id="submit" type="submit" variant="appear" className='self-end bottom-0 text-gray-400 hover:bg-inherit hover:text-gray-100' >
              <SendHorizonal className="h-4 w-4 "/>
            </Button>
            </HoverCardTrigger>
          <HoverCardContent className='hover:cursor-default'>
            Send message
          </HoverCardContent>
        </HoverCard>

      </form>
    </div>
  )
}

export default Chatinput