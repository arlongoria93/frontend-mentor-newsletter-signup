import React from "react";
import { IconSuccess } from "./svgs";

const SuccessCard = ({ email, success, handleSuccess }) => {
  if (!email) return null;
  if (success)
    return (
      <div className="w-[504px] h-[520px] bg-[#FFF] shadow-sm rounded-[36px] hidden items-center justify-center desktop:flex flex-col gap-[40px] p-[48px]">
        <IconSuccess className="w-[64px] h-[64px] self-start " />
        <div className="flex flex-col gap-[24px] w-[376px] items-center justify-center">
          <h1 className="text-[56px] font-bold text-[#242742] leading-[56px]">
            Thanks for subscribing!
          </h1>
          <p className="text-[16px] leading-6 text-[#242742]">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{email}</span> Please open it and click
            the button inside to confirm your subscription.
          </p>
        </div>
        <button
          onClick={() => {
            window.location.reload();
            handleSuccess(false);
          }}
          className=" bg-[#242742] w-[327px] h-[56px] rounded-[8px] text-white font-bold bg-gradient-to-r from-[#242742] to-[#242742]  hover:from-[#FF6A3A] hover:to-[#FF527B] hover:shadow-boxShadow hover:shadow-lg hover:border-none"
        >
          Dismiss message
        </button>
      </div>
    );
};

export default SuccessCard;
