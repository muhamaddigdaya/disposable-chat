import React from 'react'
import Chatinput from './Chatinput'
import { ScrollArea } from "@/app/components/ui/scroll-area"
import Image from 'next/image'


type Props = {}

const Chats = (props: Props) => {
  return (
    <div className='h-full w-full h-max-full bg-gray-700 flex flex-col'>
      <ScrollArea className='h-full text-slate-100 pt-8 pl-8'>
        <div className='flex flex-row gap-x-2 items-start'>
          <Image src="/baki.jpg" width={42} height={42} alt='pp' layout="fixed" className='rounded-full ' />
          <div className='flex flex-col'>
            <h2 className='font-bold'>bakihanma</h2>
            <p className='mb-2'>hello world🤫</p>
            <p className='mb-2'>nextjs hits hard fr</p>
            <p className='mb-2'>tough build rh</p>
          </div>
        </div>
      </ScrollArea>
      <Chatinput />
    </div>
    
  )
}

export default Chats