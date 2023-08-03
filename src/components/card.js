import React from "react";
import { Roboto } from "next/font/google";
import { IconList } from "./svgs";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700", "400"],
});

const Card = () => {
  return (
    <div className="bg-white h-[641px] w-[928px] rounded-2xl flex flex-row">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="w-[376px] h-[446px] border border-solid-black flex flex-col gap-[24px]">
          <h1
            className={`text-[56px] font-bold ${roboto.className} text-[#242742]`}
          >
            Stay Updated!
          </h1>
          <p
            className={`text-[16px] leading-6 text-[#242742] ${roboto.className}`}
          >
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-row items-center gap-[16px]">
              <IconList />
              <p className={`${roboto.className} text-[16px] leading-6`}>
                Product discovery and building what matters
              </p>
            </div>
            <div className="flex flex-row items-center gap-[16px]">
              <IconList />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className="flex flex-row items-center gap-[16px]">
              <IconList />
              <p>And much more!</p>
            </div>
          </div>
          <div className="w-[376px] h-[162px] flex flex-col">
            <p
              className={`text-[12px] leading-6 font-bold ${roboto.className}`}
            >
              Email address
            </p>
            <input
              type="text"
              className={`w-[376px] h-[56px] border border-solid-black rounded-[8px] p-[16px] text-[16px] ${roboto.className} hover:cursor-pointer`}
              placeholder="email@company.com"
            />
            <button className="w-[376px] h-[56px] border transition-colors duration-300 ease-in-out border-solid-black rounded-[8px] p-[16px] text-[16px] font-bold leading-6 text-[#fff] bg-gradient-to-r from-[#242742] to-[#242742]  hover:from-[#FF6A3A] hover:to-[#FF527B]">
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2">right</div>
    </div>
  );
};

export default Card;
