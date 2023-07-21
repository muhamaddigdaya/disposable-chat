'use client';
import { useEffect, useState } from "react"; // Import useEffect and useState hooks

import { Textarea } from "@/app/components/ui/textarea";
import Head from "next/head";

export default function Home() {
  const [output, setOutput] = useState<string[]>([]); // State to hold the array of inputs

  function chats(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const newInput = event.target.value;
    setOutput((prevOutput) => [...prevOutput, newInput]);
  }

  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      <Head>
        <script src="/script.js"></script>
      </Head>
      <div className="w-full h-full border rounded mb-4">
        <input aria-multiline="true" className="w-full h-full"readOnly type="text" id="output" value={output.join('\n')} />
      </div>
      <form>
        <Textarea
          className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0"
          onInput={chats}
          placeholder="Type your message here..."
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
