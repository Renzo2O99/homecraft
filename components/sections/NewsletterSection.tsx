import { newsletterData } from "@/data";
import Container from "../utils/Container";
import Section from "../utils/Section";
import Title from "../utils/Title";
import Subtitle from "../utils/Subtitle";

export default function NewsletterSection() {
  const { title, subtitle, placeholder, buttonText } = newsletterData;

  return (
    <Section className="bg-[url('/img/newsletter.png')] min-h-[31rem] bg-left md:bg-center">
      <Container className="flex justify-center lg:justify-end">
        <div className="w-full max-w-xl text-center text-white lg:text-left">
          <Title className="text-4xl font-semibold max-w-80 md:max-w-full mx-auto lg:mx-0 mb-5 leading-normal">
            {title}
          </Title>

          <Subtitle className="text-xl font-light mb-10">
            {subtitle}
          </Subtitle>

          <div className="flex flex-col mx-auto gap-6 max-w-80 lg:flex-row lg:mx-0 lg:max-w-full">
            <input
              className="h-16 px-6 outline-none placeholder:text-gray-400 text-gray-600 bg-white rounded-lg lg:flex-1" 
              type="text"
              placeholder={placeholder}
              suppressHydrationWarning
            />

            <button className="bg-primary-500 h-16 hover:bg-slate-900 px-7 rounded-lg font-medium text-xl transition-all duration-300 cursor-pointer">
              {buttonText}
            </button>
          </div>
        </div>
      </Container>
    </Section>
  )
}