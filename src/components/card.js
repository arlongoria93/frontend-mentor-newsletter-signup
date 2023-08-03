"use client";
import { useState } from "react";
import { Roboto } from "next/font/google";
import SuccessCard from "./successCard";

import { IconList, IllustrationSignUpDesktop } from "./svgs";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700", "400"],
});

const Card = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError(true);
    }
    if (!email.includes("@")) {
      setError(true);
    }

    if (email.includes("@")) {
      setError(false);
      setSuccess(true);
    }
  };
  if (success) return <SuccessCard email={email} />;
  return (
    <div className="bg-white h-[641px] w-[928px] rounded-2xl flex flex-row">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="w-[376px] h-[446px]  flex flex-col gap-[24px]">
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
            <div className="w-full flex flex-row items-center justify-between">
              <p
                className={`text-[12px] leading-6 font-bold mb-[8px] ${roboto.className}`}
              >
                Email address
              </p>
              {error && (
                <p
                  className={`text-[12px] leading-6 font-bold mb-[8px] text-[#FF6155] ${roboto.className}`}
                >
                  Valid email required
                </p>
              )}
            </div>

            {error ? (
              <input
                type="text"
                className={`w-[376px] h-[56px] border focus:outline-none bg-errorInput border-[#FF6155] rounded-[8px] p-[16px] text-[16px] ${roboto.className} hover:cursor-pointer mb-[24px]`}
                placeholder="email@company.com"
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleFormSubmit(e);
                  }
                }}
                value={email}
              />
            ) : (
              <input
                type="text"
                className={`w-[376px] h-[56px] border border-solid-black rounded-[8px] p-[16px] text-[16px] ${roboto.className} hover:cursor-pointer mb-[24px]`}
                placeholder="email@company.com"
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleFormSubmit(e);
                  }
                }}
                value={email}
              />
            )}

            <button
              onClick={handleFormSubmit}
              className="w-[376px] h-[56px] border transition-colors duration-300 ease-in-out border-solid-black rounded-[8px] p-[16px] text-[16px] font-bold leading-6 text-[#fff] bg-gradient-to-r from-[#242742] to-[#242742]  hover:from-[#FF6A3A] hover:to-[#FF527B] hover:shadow-boxShadow hover:shadow-lg hover:border-none"
            >
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-[24px]">
        <IllustrationSignUpDesktop className="w-full h-full" />
      </div>
    </div>
  );
};

export default Card;
