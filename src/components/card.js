import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700", "400"],
});

const Card = () => {
  return (
    <div className="bg-white h-[641px] w-[928px] rounded-2xl flex flex-row">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="w-[376px] h-[446px] border border-solid-black">
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
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <p>Product discovery and building what matters</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">right</div>
    </div>
  );
};

export default Card;
