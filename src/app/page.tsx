'use client';
import { Textarea } from "@/app/components/ui/textarea";
import Head from "next/head";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      <Head>
        <script src="/script.js"></script>
      </Head>
      <div className="w-full h-full border rounded mb-4">
        <input aria-multiline="true" className="w-full h-full"readOnly type="text" id="output"/>
      </div>
      <form>
        <Textarea
          className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0"
          placeholder="Type your message here..."
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
