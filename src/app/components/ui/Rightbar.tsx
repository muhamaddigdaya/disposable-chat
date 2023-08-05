import React from 'react'
import { Button } from './button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog"


type Props = {}

function Reload() {
  location.reload();
}

const Rightbar = (props: Props) => {
  return (
    <div className='h-full w-1/6 bg-gray-800 text-slate-100 p-4 content-center'>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button className='p-2 hover:bg-gray-600 hover:text-slate-50 rounded-md cursor-pointer' id='clear'>Clear chat</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className='flex flex-col items-center p-4 sm:text-center rounded-lg'>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will <b>permanently delete</b> your conversation.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={Reload}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
        
    </div>
  )
}

export default Rightbar