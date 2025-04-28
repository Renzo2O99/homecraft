import { heroData } from "@/data";
import Stats from "./StatsSection";
import Container from "../utils/Container";
import GrowingGradientButton from "../ui/GrowingGradientButton";
import Section from "../utils/Section";

export default function HeroSection() {
  const { title, subtitle, buttonText } = heroData;

  return (
    <Section className="mb-50 md:mb-24 lg:mb-18 text-white bg-[url('/img/hero-bg.png')] bg-cover bg-no-repeat bg-right md:bg-center h-[55rem]">
      <Container className="pt-[10rem] pb-[16rem] mb-[20rem] md:mb-[10rem]">
        <h1 className="mx-auto font-semibold mb-8 md:mb-16 leading-normal text-[clamp(1.5rem,2.75vw,3rem)]">
          {title}
        </h1>

        <h2 className="mx-auto mb-8 md:mb-16 text-[clamp(1.2rem,2.2vw,2.5rem)] leading-[1.2] md:leading-[1.5]">
          {subtitle}
        </h2>

        <div className="mb-40 md:mb-48">
          <GrowingGradientButton>{buttonText}</GrowingGradientButton>
        </div>

        <Stats />
      </Container>
    </Section>
  );
}
