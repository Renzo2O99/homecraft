import Container from "@/components/utils/Container";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/img/logo.webp";
import Section from "@/components/utils/Section";
import { footerData } from "@/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { social } = footerData;

  return (
    <footer className="bg-primary-500 text-white">
      <Section className="py-10 lg:py-8">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-center border-b border-gray-700/75 pb-8 mb-8 lg:pb-8 lg:mb-8
          ">
            <Link 
              href="#home"
              className="mb-6 lg:mb-0"
            >
              <Image
                src={Logo}
                width={250}
                height={150}
                alt="Logo"
              />
            </Link>

            <div className="flex gap-x-4 my-4 md:my-0">
              {social.map(({href, icon: Icon}, index) => (
                <div 
                  key={index}
                  className="w-12 h-12 text-2xl bg-gray-700 hover:bg-accent-500 rounded-full flex justify-center items-center transition-all duration-300"
                >
                  <Link href={href}>
                    {Icon && <Icon className="text-2xl" />}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center">
            &copy; Homecraft {currentYear}. All rights reserved.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
