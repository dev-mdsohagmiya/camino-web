import Logo from "@/app/assets/images/CAMINO.png";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="bg-[#323232] text-white pt-[60px]">
      {/* info */}
      <div className="max-w-[1482px] mx-auto px-7 grid grid-cols-12 gap-[5px] sm:gap-[30px]">
        <div className="col-span-12 lg:col-span-6 flex gap-[15px] sm:gap-[30px] items-center justify-center lg:justify-start">
          <h2 className="text-[27px] md:text-[64px] font-semibold">
            Let&apos;s discuss
          </h2>
          <GoArrowUpRight className="text-[32px] md:text-[60px] border rounded-full p-[4px] md:p-[8px]" />
        </div>
        <div className="col-span-12 lg:col-span-6 text-center lg:text-start text-[30px] md:text-[60px]">
          <span className="border-b border-solid border-white">
            info@caminocapital.ie
          </span>
        </div>
      </div>

      {/* border */}
      <div className="border-b border-[#B38A4C] my-[40px]"></div>

      {/* schedule */}
      <div className="max-w-[1482px] mx-auto px-7 grid grid-cols-12 gap-[15px] sm:gap-[30px]">
        <div className="col-span-12 md:col-span-6 flex gap-[60px] justify-center md:justify-start">
          <div>
            <p className="text-white opacity-50 uppercase  text-[14px] md:text-auto">
              LOCAL TIME
            </p>
            <h4 className="text-[20px] md:text-[22px] font-medium">2:14 PM</h4>
          </div>
          <div>
            <p className="text-white opacity-50 uppercase text-[14px] md:text-auto">
              WEATHER
            </p>
            <h4 className="text-[20px] md:text-[22px]  font-medium">
              1300 London
            </h4>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 text-center md:text-start">
          <p className="text-white opacity-50 uppercase text-[14px] md:text-auto">
            Social
          </p>
          <div className="flex gap-[15px] md:gap-[30px] justify-center md:justify-start">
            <p className="text-[20px] md:text-[22px]  font-medium">Instagram</p>
            <p className="text-[20px] md:text-[22px]  font-medium">Facebook</p>
            <p className="text-[20px] md:text-[22px]  font-medium">Instagram</p>
          </div>
        </div>
      </div>

      {/* logo */}
      <div className="max-w-[1482px] mx-auto px-7 mt-[60px]">
        <Image src={Logo} alt="CAMINO" />
      </div>
    </footer>
  );
};

export default Footer;
