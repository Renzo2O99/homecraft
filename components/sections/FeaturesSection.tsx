import Image from "next/image";
import FeatureComponent from "../ui/FeatureComponent";
import Section from "../utils/Section";
import Container from "../utils/Container";
import Title from "../utils/Title";
import Subtitle from "../utils/Subtitle";
import { featuresData } from "@/data";

export default function FeaturesSection() {
  const { feature1: data } = featuresData;
  const { title, subtitle, image, items } = data;
  
  return (
    <Section>
      <Container>
        <div className="flex flex-col lg:flex-row lg:gap-x-14 text-center lg:text-left">
          <div className="flex-1 order-1 lg:-order-1">
            <Image 
              src={image} alt={String(image)}
              width={undefined} height={undefined}
              className="w-full h-full cover" />
          </div>

          <div className="flex-1 flex flex-col justify-start">
            <Title>{title}</Title>

            <Subtitle>{subtitle}</Subtitle>

            <div className="flex flex-col gap-y-6">
              {items.map((feature, index) => (
                <FeatureComponent key={index} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}