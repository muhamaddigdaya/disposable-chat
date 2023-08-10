'use client';
import TextareaAutosize from 'react-textarea-autosize';
import React from 'react'
import { Button } from "@/app/components/ui/button"
import { SendHorizonal, Image } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/app/components/ui/dialog"
import { CopyBlock } from "react-code-blocks";
import { Input } from './input';

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
    <div className='stretch flex bg-popover p-8 pt-0 items-centerrelative bottom-0 w-full '>
      <form className='stretch bg-input text-muted-foreground flex px-4 py-2 items-center rounded-lg relative bottom-0 w-full' id='chat-form' onSubmit={handleSubmit}>
        <TextareaAutosize
          className="placeholder:text-muted-foreground text:xs text-foreground m-0 min-h-10 max-h-[44vh] w-full resize-none border-0 bg-transparent mr-2 p-0 dark:bg-transparent outline-0"
          placeholder="Type your message here..."
          id='inputText'
        />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className='self-end'>
              <Button size="icon" id="submit" type="submit" variant="appear" className='self-end bottom-0 hover:bg-inherit hover:text-primary' >
                <Image className="h-4 w-4 " />
              </Button>
            </TooltipTrigger>
            <TooltipContent className='hover:cursor-default'>
              Upload image
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className='self-end'>
              <Button size="icon" id="submit" type="submit" variant="appear" className='self-end bottom-0 hover:bg-inherit hover:text-primary' >
                <SendHorizonal className="h-4 w-4 " />
              </Button>
            </TooltipTrigger>
            <TooltipContent className='hover:cursor-default'>
              Send message
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </form>
    </div>
  )
}

export default Chatinput