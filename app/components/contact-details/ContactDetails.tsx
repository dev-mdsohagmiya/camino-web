import PersonImage from "@/app/assets/images/contact/person.png";
import Image from "next/image";
import Link from "next/link";
import { GoArrowLeft, GoMail } from "react-icons/go";
const ContactDetails = () => {
  return (
    <div className="max-w-[1482px] mx-auto px-7 py-7 md:py-20">
      {/* back button top */}
      <div>
        <div className="inline-flex items-center sm:gap-[8px] text-[#B38A4C] text-[20px] ">
          <Link className="flex gap-2 items-center" href={"/"}>
            <GoArrowLeft /> <span className="uppercase">back</span>
          </Link>
        </div>
        <p className="h-[1px] w-[100px] rounded-full bg-gradient-to-r from-transparent via-[#B38A4C] to-transparent"></p>
      </div>

      {/* main banner */}
      <div className="relative w-full h-auto grid grid-cols-12 sm:gap-[30px] md:min-h-[620px] mt-[30px]">
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center gap-[12px] sm:gap-[20px] md:gap-[30px]">
          <h2 className="text-[30px] md:text-[65px] text-[#B38A4C]">
            Enrique Curran
          </h2>
          <p className="md:text-[22px] text-[#323232] text-justify font-light">
            At Camino Capital, we pride ourselves on delivering unparalleled
            outsourced family office services exclusively designed for Ultra
            High Net Worth individuals and families. Serving as trusted
            advisors, we offer comprehensive support, leveraging our expertise
            to coordinate with premier financial institutions and top-tier
            professional advisors. With a focus on precision and dedication, we
            ensure that our clients&apos; wealth management needs are met with
            the utmost care and efficiency.
          </p>
          <div className="flex items-center gap-[10px] sm:gap-[20px] md:gap-[30px] pb-3 sm:pb-auto">
            <GoMail className="text-[#B38A4C] w-[36px] md:w-[44px] h-[28px] md:h-[36px]" />
            <p className="text-[16px] md:text-[24px] font-medium text-dark ">
              enrique.curran@caminocapital.ie
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center items-center mt-[30px] lg:mt-0">
          <Image
            src={PersonImage}
            width={500}
            height={600}
            alt="banner image"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
