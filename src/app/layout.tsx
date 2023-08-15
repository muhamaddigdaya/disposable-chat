"use client"

import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import { useContext } from 'react'
import { UsernameContext } from '@/components/ui/username-provider'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const usernameValue = useContext(UsernameContext);
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <UsernameContext.Provider value={usernameValue}>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
              {children}
            </ThemeProvider>
          </UsernameContext.Provider>
        </body>
      </html>
    </>
  )
}
