/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./higher";
import { IMAGE_URL, VERCEL_URL } from "@/utils";

const handleRequest = frames(async (ctx) => {
  if (ctx.message?.transactionId) {
    return {
      image: (
        <div style={{ backgroundImage: `url(${IMAGE_URL})` }} className="text-white w-full h-full justify-center items-center flex bg-cover">
          Transaction submitted! {ctx.message.transactionId}
        </div>
      ),
      imageOptions: {
        aspectRatio: "1:1",
      },
      buttons: [
        <Button
          action="link"
          target={`https://basescan.org/tx/${ctx.message.transactionId}`}
        >
          View on basescan
        </Button>,
      ],
    };
  }

  return {
    image: IMAGE_URL,
    imageOptions: {
      aspectRatio: "1:1",
    },
    buttons: [
      <Button action="tx" target={`${VERCEL_URL}/higher/txdata?amount=1`} post_url="/higher?amount=1">
        ↑
      </Button>,
      <Button action="tx" target={`${VERCEL_URL}/higher/txdata?amount=5`} post_url="/higher?amount=3">
        ↑↑↑↑↑
      </Button>,
      <Button action="tx" target={`${VERCEL_URL}/higher/txdata?amount=10`} post_url="/higher?amount=5">
        ↑ x 10
      </Button>,
      <Button action="tx" target={`${VERCEL_URL}/higher/txdata?amount=100`} post_url="/higher?amount=10">
        ↑ x 100
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;