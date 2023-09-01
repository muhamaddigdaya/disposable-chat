import React from 'react'
import { Button } from './button'
import Link from 'next/link'

type Props = {}

const Leftbar = (props: Props) => {
  return (
    <div className='h-full w-1/6 bg-secondary text-secondary-foreground pl-8 pt-8'>
      <Button><Link href='/'>Back to Home Screen</Link></Button>
    </div>
  )
}

export default Leftbar