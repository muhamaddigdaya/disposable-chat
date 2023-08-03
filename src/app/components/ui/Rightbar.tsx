import React from 'react'
import { Button } from './button'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/app/components/ui/dialog"

type Props = {}

function Reload() {
  location.reload();
}

const Rightbar = (props: Props) => {
  return (
    <div className='h-full w-1/6 bg-gray-800 text-slate-100 p-4 content-center'>
      <Dialog>
        <DialogTrigger>
          <Button className='p-2 hover:bg-gray-600 hover:text-slate-50 rounded-md cursor-pointer' id='clear'>Clear chat</Button>
        </DialogTrigger>
        <DialogContent className='flex flex-col bg-gray-200 p-4 text-center rounded-lg'>
          <p className='mb-4'>Are you sure?</p>
          <div className='space-x-2'>
            <Button onClick={Reload}>Clear</Button>
            <Button className='bg-invisible border-black border-2 hover:bg-gray-500/20 text-black'>Cancel</Button>
          </div>
          
        </DialogContent>
      </Dialog>
        
    </div>
  )
}

export default Rightbar