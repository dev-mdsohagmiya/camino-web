import Icon1 from "@/app/assets/images/value-adding/1.png";
import Icon2 from "@/app/assets/images/value-adding/2.png";
import Icon3 from "@/app/assets/images/value-adding/3.png";
import Icon4 from "@/app/assets/images/value-adding/4.png";
import Icon5 from "@/app/assets/images/value-adding/5.png";
import Icon6 from "@/app/assets/images/value-adding/6.png";
import Icon7 from "@/app/assets/images/value-adding/7.png";
import Icon8 from "@/app/assets/images/value-adding/8.png";
import MoriesRegular from "@/app/font";
import Image from "next/image";

const allValues = [
  {
    _id: 1,
    title: "Strategic Asset Allocation",
    icon: Icon1,
  },
  {
    _id: 2,
    title: "Investment Supplier Selection",
    icon: Icon2,
  },
  {
    _id: 3,
    title: "Investment related Costs",
    icon: Icon3,
  },
  {
    _id: 4,
    title: "Tax Optimisation",
    icon: Icon4,
  },
  {
    _id: 5,
    title: "Risk Management",
    icon: Icon5,
  },
  {
    _id: 6,
    title: "Investor Psychology",
    icon: Icon6,
  },
  {
    _id: 7,
    title: "Family Governance",
    icon: Icon7,
  },
  {
    _id: 8,
    title: "Reducing Investment Costs",
    icon: Icon8,
  },
];

const ValueAdding = () => {
  return (
    <div className=" py-7 md:py-20 " id="our-services">
      {/* title */}
      <div className="flex flex-col justify-center items-center">
        <h4
          className={`text-[#B38A4C] text-[20px] md:text-[24px] uppercase ${MoriesRegular.className}`}
        >
          Value-Adding Solutions
        </h4>
        <p className="h-[1px] w-[150px] md:w-[320px] rounded-full bg-gradient-to-r from-transparent via-[#B38A4C] to-transparent"></p>
        <h2 className="text-[24px] md:text-[34px] font-semibold mt-[8px] tracking-[2px] text-center text-dark">
          Enhancing Your Wealth Management Journey
        </h2>
      </div>

      {/* cards */}
      <div className="relative w-full h-auto mt-[30px]">
        <div className=" mx-auto border-y border-[#B38A4C]">
          <div className="max-w-[1482px] mx-auto  px-7 grid grid-cols-12">
            {allValues?.map((value, index) => (
              <div
                key={value._id}
                className={`col-span-12 md:col-span-6 lg:col-span-3 flex flex-col justify-center items-center gap-[10px] text-center px-[40px] py-[60px] ${
                  index == 0 &&
                  "border-x border-b border-solid border-[#B38A4C]"
                } ${
                  index == 1 &&
                  "border-l md:border-l-0 border-r border-b border-solid border-[#B38A4C]"
                } ${
                  index == 2 &&
                  "border-l lg:border-l-0 border-r border-b border-solid border-[#B38A4C]"
                } ${
                  index == 3 &&
                  " border-x md:border-l-0 border-r border-b border-solid border-[#B38A4C]"
                } ${
                  index == 4 &&
                  "border-x md:border-b lg:border-b-0 border-solid border-[#B38A4C]"
                } ${
                  index == 5 &&
                  "border-l md:border-l-0 md:border-b lg:border-b-0 border-t md:border-t-0 border-r border-solid border-[#B38A4C]"
                } ${
                  index == 6 &&
                  "border-l lg:border-l-0 border-t md:border-t-0 border-r border-solid border-[#B38A4C]"
                } ${
                  index == 7 &&
                  "border-l md:border-l-0 border-t md:border-t-0 border-r border-solid border-[#B38A4C]"
                }`}
              >
                <Image src={value.icon} width={60} height={60} alt="image" />
                <h4 className="text-[20px] md:text-[26px]">{value.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueAdding;
