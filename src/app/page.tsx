'use client';
import Head from "next/head";
import React from 'react'
import Chatinput from "./components/ui/Chatinput";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between ">
      <Chatinput />
    </main>
  );
}
