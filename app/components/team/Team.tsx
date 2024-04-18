import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import MoriesRegular from "@/app/font";
import img1 from "@/public/reach-out/img1.png";
import img2 from "@/public/reach-out/img4.png";
import img3 from "@/public/reach-out/img2.png";
import Link from "next/link";

function Team() {
  const data = [
    {
      link: "/enrique-curran",
      src: img1,
      title: "pelam bomb",
      desc: "We forensically review all client portfolios individually andin aggregate to ensure clients receive an institutional investment offering and are efficiently positioned to earn after tax returns consistent with their objectives.",
    },
    {
      link: "/dee-carr",
      src: img2,
      title: "PRIVATE MARKET INVESTMENT",
      desc: "We forensically review all client portfolios individually andin aggregate to ensure clients receive an institutional investment offering and are efficiently positioned to earn after tax returns consistent with their objectives.",
    },
    {
      link: "/paul-donovan",
      src: img3,
      title: "OUTSOURCED CFOSERVICES",
      desc: "We forensically review all client portfolios individually andin aggregate to ensure clients receive an institutional investment offering and are efficiently positioned to earn after tax returns consistent with their objectives.",
    },
    {
      link: "/paul-donovan",
      src: img3,
      title: "OUTSOURCED CFOSERVICES",
      desc: "We forensically review all client portfolios individually andin aggregate to ensure clients receive an institutional investment offering and are efficiently positioned to earn after tax returns consistent with their objectives.",
    },
  ];
  return (
    <div className="bg-white ">
      <div className="max-w-[1482px] px-7 mx-auto pt-3 md:pt-1 pb-10 md:pb-20 ">
        <div>
          <div>
            <h4
              className={`text-center text-[20px] md:text-[24px] text-primary ${MoriesRegular.className}`}
            >
              Meet the Experts
            </h4>
            <div className="flex justify-center mt-1">
              <div className="h-[1px] w-[150px] md:w-[300px] mx-auto rounded-full bg-gradient-to-r from-transparent via-[#B38A4C] to-transparent"></div>
            </div>
          </div>
          <div>
            <h4 className="text-center text-dark text-[25px] md:text-[34px] font-[600]">
              Enhancing Your Wealth Management Journey
            </h4>
          </div>
        </div>

        <Carousel className="w-[80%] mx-auto mt-7 md:mt-14 md:w-full">
          <CarouselContent className="-ml-1">
            {data.map((item, index) => (
              <CarouselItem
                key={index}
                className={`pr-2 md:pr-0  md:pl-10 md:basis-1/2 lg:basis-1/3 `}
              >
                {/* <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-2xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div> */}
                <div className="col-span-12 select-none md:col-span-6 lg:col-span-4 relative overflow-hidden  rounded-xl  ">
                  <Link href={item.link}>
                    <Image alt="" src={item.src} />
                  </Link>
                  {/* <div className="absolute bottom-0 overflow-hidden  bg-primary pt-6 pb-[40%] rounded-tr-[12px] rounded-br-[12px] rounded-tl-[12px] w-[90%]   group/item transition-transform ease-in-out   duration-300  translate-y-[75%] md:translate-y-[68%] hover:translate-y-[0%]">
                  <div className="group w-full h-full overflow-hidden  ">
                    <h3
                      className={`text-[24px] leading-[30px] md:text-[34px] uppercase  md:leading-[43px] ${MoriesRegular.className} text-white px-3`}
                    >
                      {item.title}
                    </h3>
  
                    <p className="  text-white text-[15px]  pt-4 px-3 leading-[22px]">
                      {item.desc}
                    </p>
                  </div>
                </div> */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default Team;
