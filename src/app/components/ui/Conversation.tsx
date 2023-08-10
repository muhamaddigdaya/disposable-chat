import React, { Suspense } from 'react'
import Image from 'next/image'
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

type Props = { username?: string }

const Conversation = (props: Props) => {
  return (
    <div className='flex flex-row gap-x-2 items-start my-5' id='conversation-wrapper'>
      <TooltipProvider>
        <Tooltip>
          <Dialog>
            <DialogTrigger>
              <TooltipTrigger className='cursor-pointer'>
                <Image src="/baki.jpg" width={42} height={42} alt='pp' className='rounded-full' />
              </TooltipTrigger>
            </DialogTrigger>
            <DialogContent className=' w-fit'>
              <Suspense fallback="loading image..."><Image src="/baki.jpg" width={240} height={240} alt='pp' className='rounded-full' /></Suspense>
            </DialogContent>
          </Dialog>
          <TooltipContent className='cursor-default'>
            Show picture
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className='flex flex-col whitespace-break-spaces' id='conversation' aria-multiline='true'>
        <h2 className='font-semibold'>{props.username || 'You'}</h2>
      </div>
    </div>
  )
}

export default Conversation