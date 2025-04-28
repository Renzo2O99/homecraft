import { NavigationDataInterface } from "@/interface";
import { capitalizeFirstLetter } from "@/lib/utils";
import Link from "next/link";

export default function DesktopNavbar( { navigation }: NavigationDataInterface) {
  return (
    <nav className="hidden md:flex">
      <ul className="md:flex md:gap-x-12">
        {navigation.map(({ name, href }, index) => (
          <li key={index}>
            <Link
              href={href}
              className="text-white hover:border-b transition-all duration-300"
            >
              {capitalizeFirstLetter(name)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
