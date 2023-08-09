import React from 'react'
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

type Props = {}

const Info = (props: Props) => {
  return (
    <div className='flex flex-row gap-x-2 items-start my-5' id='information-wrapper'>
      <TooltipProvider>
        <Tooltip>
          <Dialog>
            <DialogTrigger>
              <TooltipTrigger className='cursor-pointer'>
                <Image src="/avatar.png" width={42} height={42} alt='pp' className='rounded-full border border-gray-500' layout='fixed' />
              </TooltipTrigger>
            </DialogTrigger>
            <DialogContent className=' w-fit'>
              <Image src="/avatar.png" width={240} height={240} alt='pp' className='rounded-full border' />
            </DialogContent>
          </Dialog>
          <TooltipContent className='cursor-default'>
            Show picture
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className='flex flex-col whitespace-break-spaces' id='information' aria-multiline='true'>
        <h2 className='font-semibold'>Information</h2>
        <p>
          ❗❗This conversation will reset with refresh page/clear chat button❗❗
        </p>
      </div>
    </div>
  )
}

export default Info