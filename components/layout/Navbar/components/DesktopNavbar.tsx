import { NavigationDataInterface } from "@/interface";
import { capitalizeFirstLetter } from "@/lib/utils";
import Link from "next/link";
import NavLink from "./NavLink";

export default function DesktopNavbar( { navigation }: NavigationDataInterface) {
  return (
    <nav className="hidden md:flex">
      <ul className="md:flex md:gap-x-12">
        {navigation.map(({ name, href }, index) => (
          <NavLink key={index} href={href} name={name} />
        ))}
      </ul>
    </nav>
  );
}