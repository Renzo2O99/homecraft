import Image from "next/image";
import Container from "../utils/Container";
import Section from "../utils/Section";
import Title from "../utils/Title";
import Subtitle from "../utils/Subtitle";
import { featuresData } from "@/data";

export default function UltimateFeaturesSection() {
  const { feature2: data } = featuresData;
  const { title, subtitle, items, image } = data;

  return (
    <Section>
      <Container>
        <div className="flex flex-col lg:flex-row lg:gap-x-14 text-center lg:text-left">
          <div className="flex-1 order-1 lg:-order-1">
            <Image className="w-full h-full cover" src={image} alt={String(image)} />
          </div>

          <div className="flex-1 flex flex-col justify-start">
            <Title>{title}</Title>

            <Subtitle>{subtitle}</Subtitle>
          </div>
        </div>
      </Container>
    </Section>
  )
}