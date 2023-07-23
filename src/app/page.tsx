'use client';
import Head from "next/head";
import React from 'react'
import Chats from "./components/ui/Chats";
import Leftbar from "./components/ui/Leftbar";
import Rightbar from "./components/ui/Rightbar";

export default function Home() {
  return (
    <main className="flex flex-row h-screen w-full items-center justify-between">
      <Leftbar />
      <Chats />
      <Rightbar />
    </main>
  );
}
