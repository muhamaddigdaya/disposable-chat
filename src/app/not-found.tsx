import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex flex-col items-center content-center h-screen w-full bg-background'>
            <h2 className='text-5xl'>Not Found</h2>
            <p className='text-2xl'>Could not find requested resource</p>
            <Link href="/" className='bg-'>Return Home</Link>
        </div>
    )
}