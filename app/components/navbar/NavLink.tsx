import MoriesRegular from "@/app/font";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ text, href, line, white }: any) {
  const path = usePathname();
  const isActive = href === path;

  return (
    <Link
      className={`text-[20px]   relative font-[100] uppercase  ${
        MoriesRegular.className
      } opacity-[] ${
        isActive ? "text-primary" : white ? "text-[#94989B]" : "text-white"
      } `}
      href={href}
    >
      {text}

      {isActive && !line && (
        <div className="w-full h-[1px] bg-primary absolute right-[1px] top-[25px] "></div>
      )}
    </Link>
  );
}
