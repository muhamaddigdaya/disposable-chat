import React, { Suspense, useContext } from 'react';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./dialog";
import { UsernameContext } from '@/components/ui/username-provider';
import Welcome from './Welcome';

type Props = {};

const Conversation = (props: Props) => {
  const usernameValue = useContext(UsernameContext);
  const conversationDiv = document.querySelector('#conversation');
  const pElement = conversationDiv?.querySelector('p');

  if (pElement) {
    pElement.style.display = 'block'; // Show the p element
  } else {
    return <Welcome />;
  }

  return (
    <div className='flex flex-row gap-x-2 items-start my-5 px-8' id='conversation-wrapper'>
      <TooltipProvider>
        <Tooltip>
          <Dialog>
            <DialogTrigger>
              <TooltipTrigger className='cursor-pointer'>
                <Image src="/baki.jpg" width={42} height={42} alt='pp' className='rounded-full' />
              </TooltipTrigger>
            </DialogTrigger>
            <DialogContent className='w-fit'>
              <Suspense fallback="loading image..."><Image src="/baki.jpg" width={240} height={240} alt='pp' className='rounded-full' /></Suspense>
            </DialogContent>
          </Dialog>
          <TooltipContent className='cursor-default'>
            Show picture
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className='flex flex-col whitespace-break-spaces' id='conversation' aria-multiline='true'>
        <h2 className='font-semibold'>{usernameValue}</h2>
      </div>
    </div>
  );
};

export default Conversation;
