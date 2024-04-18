"use client";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Navbarr({ white }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const handleOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div
      className={`${white ? null : "absolute top-0"} w-full`}
      style={{ zIndex: 100 }}
    >
      <div className="w-full h-full">
        <div className="px-7 max-w-[1482px] mx-auto flex justify-between py-7">
          <div>
            {" "}
            <Image
              src={white ? "/logogray.svg" : "/logo.svg"}
              className={`select-none inline-block `}
              alt=""
              height={32}
              width={118}
            />
          </div>
          <div className="hidden md:flex  justify-end gap-9">
            <div>
              <NavLink white={white} href={"/"} text={"Home"} />
            </div>

            <div>
              <NavLink
                white={white}
                href={white ? "/#about-us" : "#about-us"}
                text={"About Us"}
              />
            </div>
            <div>
              <NavLink
                white={white}
                href={white ? "/#our-services" : "#our-services"}
                text={"Services"}
              />
            </div>
            <div>
              <NavLink
                white={white}
                href={white ? "/#our-expertise" : "#our-expertise"}
                text={"Our Team"}
              />
            </div>
            <div>
              <NavLink
                white={white}
                line={true}
                href={white ? "/#contact-from" : "#contact-from"}
                text={"Contact"}
              />
            </div>
          </div>
          <div className="block md:hidden">
            <div className="shadow-xl  ">
              <HiMiniBars3CenterLeft
                className="text-[30px] text-gray"
                onClick={handleOpen}
              />
            </div>
          </div>
        </div>
        <div
          className={`absolute  bg-dark w-[95%] transition ease-in-out delay-200 z-10 overflow-hidden h-[100vh] top-0 md:hidden ${
            isOpen ? "-translate-x-[0]" : "-translate-x-[200%]"
          }`}
        >
          <div className="flex justify-end">
            <IoClose
              className="text-[80px] cursor-pointer p-3 text-[#e4e6eb]"
              onClick={handleOpen}
            />
          </div>
          <div className="grid gap-5 px-10 py-20">
            <div onClick={handleOpen} className="inline-block">
              <NavLink white={white} href={white ? "/" : "/"} text={"Home"} />
            </div>
            <div onClick={handleOpen} className="inline-block">
              <NavLink
                white={white}
                href={white ? "/#about-us" : "#about-us"}
                text={"About Us"}
              />
            </div>
            <div onClick={handleOpen} className="inline-block">
              <NavLink
                white={white}
                href={white ? "/#our-services" : "#our-services"}
                text={"Services"}
              />
            </div>
            <div onClick={handleOpen} className="inline-block">
              <NavLink
                white={white}
                href={white ? "/#our-expertise" : "#our-expertise"}
                text={"Our Team"}
              />
            </div>
            <div onClick={handleOpen} className="inline-block">
              <NavLink
                white={white}
                line={true}
                href={white ? "/#contact-from" : "#contact-from"}
                text={"Contact"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div className="w-full">
          <div className="w-full">
            <div className=" h-[1px] overflow-hidden w-full rounded-full bg-gradient-to-r from-transparent via-[#B38A4C] to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
