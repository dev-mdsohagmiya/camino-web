import Image from "next/image";
import left from "@/public/about-us/left.png";
import right from "@/public/about-us/right.png";
import MoriesRegular from "@/app/font";
import img1 from "@/public/our-expertice/1img.png";
import img2 from "@/public/our-expertice/1img.png";
import img3 from "@/public/our-expertice/1img.png";
function OurExpertise() {
  const data = [
    {
      src: img1,
      title: " INVESTMENT REVIEW AND OVERSIGHT",
      desc: "We forensically review all client portfolios individually andin aggregate to ensure clients receive an institutional investment offering and are efficiently positioned to earn after tax returns consistent with their objectives.",
    },
    {
      src: img2,
      title: "PRIVATE MARKET INVESTMENT",
      desc: "We forensically review all client portfolios individually andin aggregate to ensure clients receive an institutional investment offering and are efficiently positioned to earn after tax returns consistent with their objectives.",
    },
    {
      src: img3,
      title: "OUTSOURCED CFOSERVICES",
      desc: "We forensically review all client portfolios individually andin aggregate to ensure clients receive an institutional investment offering and are efficiently positioned to earn after tax returns consistent with their objectives.",
    },
  ];
  return (
    <div className="bg-[#fbf9f6]  ">
      <div
        className="max-w-[1482px] px-7 mx-auto py-10 md:py-20 "
        id="our-expertise"
      >
        <div>
          <div>
            <h4
              className={`text-center text-[20px] md:text-[24px] text-primary ${MoriesRegular.className}`}
            >
              Our Expertise, Your Growth
            </h4>
            <div className="flex justify-center mt-1">
              <div className="h-[1px] w-[150px] md:w-[300px] mx-auto rounded-full bg-gradient-to-r from-transparent via-[#B38A4C] to-transparent"></div>
            </div>
          </div>
          <div>
            <h4 className="text-center text-dark text-[25px] md:text-[34px] font-[600]">
              Comprehensive Financial Services Tailored for You
            </h4>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-7 md:gap-14  mt-8 md:mt-14">
          {data.map((item, index) => (
            <div
              key={index}
              className="h-[320px] sm:h-auto  col-span-12  sm:col-span-6 lg:col-span-4 relative overflow-hidden  rounded-xl  "
            >
              <Image className="w-full" alt="" src={item.src} />
              <div className="absolute bottom-0 overflow-hidden  bg-primary pt-6 pb-[10%] md:pb-[40%] rounded-tr-[12px] rounded-br-[12px] rounded-tl-[12px] w-[90%]    transition-transform ease-in-out   duration-300  translate-y-[65%]   sm:translate-y-[68%] md:translate-y-[71%] hover:translate-y-[0%]">
                <div className="group w-full h-full overflow-hidden  ">
                  <h3
                    className={`text-[24px] select-none h-[70px] sm:h-[100px] leading-[30px] md:text-[34px] uppercase  md:leading-[43px] ${MoriesRegular.className} text-white px-3`}
                  >
                    {item.title}
                  </h3>

                  <p className="  text-white text-[15px] mt-2 select-none  px-3 leading-[22px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default OurExpertise;
