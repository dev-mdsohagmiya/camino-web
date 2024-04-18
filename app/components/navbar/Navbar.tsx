"use client";

export default function Navbarr({ white }: any) {
  return (
    <div
      className={`${white ? null : "absolute top-0"} w-full`}
      style={{ zIndex: 100 }}
    >
      Mavbar
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
