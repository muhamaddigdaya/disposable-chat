'use client';
import TextareaAutosize from 'react-textarea-autosize';
import React from 'react'

type Props = {}

const Chatinput = (props: Props) => {
  return (
    <form className='flex w-full border-2 p-2 items-end rounded-lg'>
    <TextareaAutosize
      className="m-0 max-h-[44vh] w-full resize-none border-0 bg-transparent mr-2 p-0 pr-10 dark:bg-transparent md:pr-12 pl-3 md:pl-0"
      placeholder="Type your message here..."
    />
    <button type="submit">Submit</button>
  </form>
  )
}

export default Chatinput