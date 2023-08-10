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
    <div className='h-full w-1/6 bg-secondary text-secondary-foreground p-4 content-center'>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button variant={'destructive'} id='clear'>Clear chat</Button>
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
            <AlertDialogAction onClick={Reload} className='bg-destructive text-destructive-foreground hover:bg-destructive/90'>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </div>
  )
}

export default Rightbar