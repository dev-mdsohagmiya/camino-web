import Image from "next/image";
import left from "@/public/about-us/left.png";
import right from "@/public/about-us/right.png";
import MoriesRegular from "@/app/font";

function AboutUs() {
  return (
    <div className="bg-white">
      <div className="max-w-[1482px] px-7 mx-auto py-10 md:py-20" id="about-us">
        <div className="grid grid-cols-12 lg:gap-14">
          <div className="w-full lg:h-[470px] col-span-12 lg:col-span-3 pb-7 lg:pb-0">
            <Image className="h-full w-full select-none" alt="" src={left} />
          </div>
          <div className="col-span-12 lg:col-span-6 lg:mt-[100px] pb-7 lg:pb-0">
            <div className="grid gap-2 lg:gap-5">
              <div>
                <h4
                  className={`text-center text-[20px] md:text-[24px] text-primary ${MoriesRegular.className}`}
                >
                  ABOUT US
                </h4>
                <div className="flex justify-center mt-1">
                  <div className="h-[1px] w-[150px] md:w-[200px] mx-auto rounded-full bg-gradient-to-r from-transparent via-[#B38A4C] to-transparent"></div>
                </div>
              </div>
              <div>
                <h4 className="text-center text-dark text-[26px] md:text-[34px] font-[600]">
                  Trusted Wealth Management Advisors
                </h4>
              </div>
              <div>
                <p className="text-center text-[16px] text-[#212122]">
                  At Camino Capital, we pride ourselves on delivering
                  unparalleled outsourced family office services exclusively
                  designed for Ultra High Net Worth individuals and families.
                  Serving as trusted advisors, we offer comprehensive support,
                  leveraging our expertise to coordinate with premier financial
                  institutions and top-tier professional advisors. With a focus
                  on precision and dedication, we ensure that our clients&apos;
                  wealth management needs are met with the utmost care and
                  efficiency.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:h-[470px] col-span-12 lg:col-span-3 lg:mt-[130px]">
            <Image className="h-full w-full select-none" alt="" src={right} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
