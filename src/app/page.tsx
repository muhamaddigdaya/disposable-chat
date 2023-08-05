'use client';
import React from 'react'
import Chatbox from "./components/ui/Chatbox";
import Leftbar from "./components/ui/Leftbar";
import Rightbar from "./components/ui/Rightbar";

export default function Home() {
  return (
    <main className="flex flex-row h-screen w-full items-center justify-between">
      <Leftbar />
      <Chatbox />
      <Rightbar />
    </main>
  );
}
