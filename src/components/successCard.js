import React from "react";
import { IconSuccess } from "./svgs";

const SuccessCard = ({ email }) => {
  if (!email) return null;
  return (
    <div className="w-[504px] h-[520px] bg-[#FFF] shadow-sm rounded-2xl flex flex-col gap-[40px] p-[64px]">
      <IconSuccess className="w-[64px] h-[64px] self-start" />
      <div className="flex flex-col gap-[24px]">
        <h1 className="text-[56px] font-bold text-[#242742]">
          Thanks for subscribing!
        </h1>
        <p className="text-[16px] leading-6 text-[#242742]">
          A confirmation email has been sent to{" "}
          <span className="font-bold">{email}</span> Please open it and click
          the button inside to confirm your subscription.
        </p>
      </div>
      <button>Dismiss message</button>
    </div>
  );
};

export default SuccessCard;
