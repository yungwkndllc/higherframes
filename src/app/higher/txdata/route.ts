import { TransactionTargetResponse } from "frames.js";
import { NextRequest, NextResponse } from "next/server";
import {
  Abi,
  encodeFunctionData,
} from "viem";
import { higherABI } from "./contracts/higher";
import { HIGHER_ADDRESS } from "@/utils";
import { ethers } from "ethers";

export async function POST(
  req: NextRequest
): Promise<NextResponse<TransactionTargetResponse>> {
  // Get amount from req.url.searchParams
  const reqURL = new URL(req.url)
  const amount = reqURL.searchParams.get('amount') || 1

  const baseCost = ethers.parseEther('0.00069');
  const totalCost = baseCost * BigInt(amount);

  const calldata = encodeFunctionData({
    abi: higherABI,
    functionName: "higherMint",
    args: [BigInt(amount)],
  });

  return NextResponse.json({
    chainId: "eip155:8453",
    method: "eth_sendTransaction",
    params: {
      abi: higherABI as Abi,
      to: HIGHER_ADDRESS,
      data: calldata,
      value: totalCost.toString()
    },
  });
}