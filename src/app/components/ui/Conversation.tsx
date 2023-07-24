import React from 'react'
import Image from 'next/image'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/app/components/ui/hover-card"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/app/components/ui/dialog"

type Props = {}

const Conversation = (props: Props) => {
  return (
    <div className='flex flex-row gap-x-2 items-start my-5'>
    <HoverCard openDelay={300} closeDelay={0}>
      <Dialog>
        <DialogTrigger>
          <HoverCardTrigger className='cursor-pointer'>
            <Image src="/baki.jpg" width={42} height={42} alt='pp' className='rounded-full' />
          </HoverCardTrigger>
        </DialogTrigger>
        <DialogContent className=' w-fit'>
          <Image src="/baki.jpg" width={240} height={240} alt='pp' className='rounded-full' />
        </DialogContent>
      </Dialog>
      <HoverCardContent className='cursor-default'>
        Show picture
      </HoverCardContent>
    </HoverCard>
      <div className='flex flex-col'>
        <h2 className='font-semibold'>bakihanma</h2>
        <p className='font-light'>hello world🤫</p>
        <p className='font-light'>nextjs hits hard fr</p>
        <p className='font-light'>tough build rh</p>
      </div>
    </div>
  )
}

export default Conversation