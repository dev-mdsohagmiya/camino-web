import Image from "next/image";
import React from "react";
export const AcmeLogo = ({ className, white }: any) => (
  <>
    <Image
      src={white ? "/logogray.svg" : "/logo.svg"}
      className={`select-none inline-block ${className}`}
      alt=""
      height={32}
      width={118}
    />
  </>
);
