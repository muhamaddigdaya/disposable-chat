'use client';
import { Textarea } from "@/app/components/ui/textarea"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Textarea
        placeholder="Type your message here..."/>
    </main>
  )
}
