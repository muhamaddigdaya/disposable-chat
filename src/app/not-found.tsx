import Link from 'next/link'
import { ThemeProvider } from './components/ui/theme-provider'
import { Button } from './components/ui/button'

export default function NotFound() {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className='flex min-h-screen flex-col items-center gap-y-2 p-24'>
                <h2 className='text-5xl font-black'>404 | Not Found</h2>
                <p className='text-2xl font-light mb-2'>The page you are looking for not exist</p>
                <Link href="/"><Button>Return Home</Button></Link>
            </div>
        </ThemeProvider>
    )
}