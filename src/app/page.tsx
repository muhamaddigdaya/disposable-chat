'use client';
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
 } from "./components/ui/sheet"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

      <Sheet>
        <SheetTrigger>
          <span class="material-symbols-outlined">menu</span></SheetTrigger>
        <SheetContent side='left'>
        </SheetContent>
      </Sheet>
    </main>
  )
}
