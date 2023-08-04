import React from "react";
import { IconSuccess } from "./svgs";

const MobileSuccessCard = ({ email, success }) => {
  if (!email) return null;
  if (success)
    return (
      <div className="w-[375px] bg-[#FFF] h-full  items-start  flex flex-col  p-[24px]  mt-[149px] desktop:hidden">
        <IconSuccess className="w-[64px] h-[64px] mb-[40px] " />
        <div className="flex flex-col gap-[24px] w-[327px]">
          <h1 className="text-[40px] font-bold text-[#242742] leading-[56px]">
            Thanks for subscribing!
          </h1>
          <p className="text-[16px] leading-6 text-[#242742]">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{email} </span> Please open it and click
            the button inside to confirm your subscription.
          </p>
        </div>
        <button
          onClick={() => {
            window.location.reload();
          }}
          className="bg-[#242742] w-[327px] mt-[263px] h-[56px] rounded-[8px] text-white font-bold"
        >
          Dismiss message
        </button>
      </div>
    );
};

export default MobileSuccessCard;
