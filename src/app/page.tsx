'use client';
import Head from "next/head";
import React from 'react'
import Chats from "./components/ui/Chats";
import Leftbar from "./components/ui/Leftbar";
import Rightbar from "./components/ui/Rightbar";

export default function Home() {
  return (
    <main className="grid grid-cols-3 h-screen flex-col items-center justify-between gap-x-2">
      <Leftbar />
      <Chats />
      <Rightbar />
    </main>
  );
}
