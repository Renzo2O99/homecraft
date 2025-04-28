import { NavigationItemInterface } from "@/interface";
import { capitalizeFirstLetter } from "@/lib/utils";
import Link from "next/link";

export default function NavLink({ href, name }: NavigationItemInterface) {
  return (
    <li>
      <Link
        href={href}
        className="text-white no-underline leading-loose relative before:content-[''] before:w-[0] before:h-[2px] before:rounded-[2px] before:bg-yellow-500 before:absolute before:-bottom-[.25rem] before:left-2/4 before:[transition:width_.4s,_left_.4s] hover:before:w-full hover:before:left-[0] hover:text-yellow-400 transition-all duration-300"
      >
        {capitalizeFirstLetter(name)}
      </Link>
    </li>
  );
}
