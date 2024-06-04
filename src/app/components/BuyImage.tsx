"use client";
import Image from "next/image";
import { HIGHER_ADDRESS, IMAGE_URL } from "@/utils";
import { useWriteContract } from "wagmi";
import { higherABI } from "../higher/txdata/contracts/higher";
 
export default function BuyImage() {

  const { writeContract, error } = useWriteContract();

  const onClickFunction = async (numberToMint: number) => {

    const basePrice = BigInt('690000000000000');
    const totalPrice = basePrice * BigInt(numberToMint);

    writeContract({ 
      abi: higherABI,
      address: HIGHER_ADDRESS,
      functionName: 'higherMint',
      args: [BigInt(numberToMint)],
      value: totalPrice
    });
  }

  return (
    <div className="flex flex-col items-center">
    <Image
        src={IMAGE_URL}
        className="cursor-pointer"
        alt="higher"
        width={400}
        height={400}
        priority
        onClick={() => {
            onClickFunction(1);
        }}
    />
    <div className="flex mt-4">
        <button className="mr-2 bg-coolGreen hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={() => {
            onClickFunction(1);
        }}>↑</button>
        <button className="mr-2 bg-coolGreen hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={() => {
            onClickFunction(5);
        }}>↑↑↑↑↑</button>
        <button className="mr-2 bg-coolGreen hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={() => {
            onClickFunction(10);
        }}>↑ x 10</button>
        <button className="bg-coolGreen hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={() => {
            onClickFunction(100);
        }}>↑ x 100</button>
    </div>
</div>

  );
}
