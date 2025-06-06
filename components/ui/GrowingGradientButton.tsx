import { ComponentPropsInterface } from "@/interface";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function GrowingGradientButton({ children, className }: ComponentPropsInterface) {
  return (
    <div className="relative inline-flex group">
      <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
      <Link
        href="#"
        title="Get quote now"
        className={twMerge(
          "relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
          className
        )}
        role="button"
      >
        {children}
      </Link>
    </div>
  );
}
