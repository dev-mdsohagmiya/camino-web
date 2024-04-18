import MoriesRegular from "@/app/font";
import React, { useEffect, useRef } from "react";

function Hero() {
  return (
    <div className="">
      <div className="absolute z-0 h-full w-full max-w-none md:h-[100vh]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className=" h-full w-full max-w-none object-cover drop-shadow-2xl  bg-white/85"
        >
          <source src="/hero/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className="absolute z-0 h-full w-full max-w-none md:h-[100vh] drop-shadow-2xl  bg-black/65"
        style={{ zIndex: 50 }}
      ></div>
      <div className="absolute  h-screen w-full" style={{ zIndex: 60 }}>
        <div
          className=" items-center grid h-full px-7  max-w-[1100px] mx-auto justify-center"
          style={{ zIndex: 100 }}
        >
          <div className="grid gap-3 pb-20">
            <div>
              <h4
                className={` text-[20px] md:text-[24px] text-primary text-center ${MoriesRegular.className}`}
              >
                Elevate Your Financial Future
              </h4>
              <div className="flex justify-center mt-1">
                <div className=" h-[1px] w-[300px] rounded-full bg-gradient-to-r from-transparent via-[#B38A4C] to-transparent"></div>
              </div>
            </div>
            <div>
              <h2 className=" text-white text-[28px] md:text-[50px] lg:text-[64px] font-[600] leading-[35px] md:leading-[55px] lg:leading-[70px] text-center">
                Personalized Investment Strategies Tailored Just for You
              </h2>
            </div>
            <div className="flex justify-center text-center">
              <p className="text-[17px] md:text-[20px] text-gray font-normal text-center">
                Discover how our expert advice can transform your investments
                and secure your financial growth. Let us guide you with
                solutions designed for your unique goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
