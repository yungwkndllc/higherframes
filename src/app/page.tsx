import Image from "next/image";

import type { Metadata } from "next";
import { fetchMetadata } from "frames.js/next";
import { IMAGE_URL, VERCEL_URL } from "@/utils";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '../../node_modules/@rainbow-me/rainbowkit/dist/index.css';

import dynamic from 'next/dynamic'
const DynamicBuyImage = dynamic(() => import('./components/BuyImage'), {
  loading: () => <></>,
})
 

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "higher ↑",
    description: "↑↑↑",
    other: {
      ...(await fetchMetadata(
        new URL(
          "/higher",
          VERCEL_URL || "http://localhost:3000"
        )
      )),
    },
  };
}
 
export default function Home() {
  return (
    <>
    <head>
      <link rel="icon" href="/higher.svg" sizes="any" />
    </head>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.higher.party/"
            target="_blank"
            rel="noopener noreferrer"
          >
            higher ↑
          </a>
        </div>
      </div>
      <ConnectButton />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
        <DynamicBuyImage />
        <div className="text-center">
          <p>
            When you buy this NFT, the contract will check the price of $higher ↑
          </p>
          <p className="mt-4">
            {`if $higher ↑ is higher than the highest it's ever been when minting one of these, you'll get a refund`}
          </p>
          <p className="mt-4">
            Otherwise, the contract will market buy $higher ↑ with the proceeds, and lock it up for 69 days.
          </p>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      </div>
      <footer>
        <a href="https://warpcast.com/yungwknd" rel="noopener noreferrer" target="_blank">
          Made with 🪄 by @yungwknd
        </a>
      </footer>
    </main>
    </>
  );
}
