import { NavigationDataInterface } from "@/interface"
import { capitalizeFirstLetter } from "@/lib/utils"
import Link from "next/link"

export default function MobileNavbar({ navigation }: NavigationDataInterface) {
  return (
    <nav className="bg-white w-full h-full shadow-2xl">
      <ul className="text-center h-full flex flex-col justify-center items-center gap-y-6">
        {navigation.map(({ name, href }, index) => (
          <li key={index}>
            <Link 
              href={href}
              className="text-xl font-medium"
            >
              {capitalizeFirstLetter(name)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}