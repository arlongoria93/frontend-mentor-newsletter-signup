import React from "react";
import { IconSuccess } from "./svgs";

const MobileSuccessCard = ({ email }) => {
  if (!email) return null;
  return (
    <div className="w-[504px] h-[520px] bg-[#FFF] shadow-sm rounded-[36px] items-start justify-center flex flex-col gap-[40px] p-[48px]">
      <IconSuccess className="w-[64px] h-[64px] " />
      <div className="flex flex-col gap-[24px] w-[376px]">
        <h1 className="text-[56px] font-bold text-[#242742] leading-[56px]">
          Thanks for subscribing!
        </h1>
        <p className="text-[16px] leading-6 text-[#242742]">
          A confirmation email has been sent to
          <span className="font-bold">{email}</span> Please open it and click
          the button inside to confirm your subscription.
        </p>
      </div>
      <button className="bg-[#242742] w-[376px] h-[56px] rounded-[8px] text-white font-bold">
        Dismiss message
      </button>
    </div>
  );
};

export default MobileSuccessCard;
