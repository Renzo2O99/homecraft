import { testimonialData } from "@/data";
import Section from "../utils/Section";
import Container from "../utils/Container";
import Title from "../utils/Title";
import Image from "next/image";
import TestimonialSlider from "../layout/TestimonialSlider/TestimonialSlider";

export default function TestimonialSection() {
  const { title, image } = testimonialData;

  return (
    <Section>
      <Container>
        <div className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-2">
          <div className="lg:max-w-1/2">
            <Title className="mb-9">
              {title}
            </Title>

            <TestimonialSlider />
          </div>

          <div className="grid justify-center items-center order-1 mt-12">
            <Image 
              src={image} 
              alt="Testimonio de cliente satisfecho" 
              width={400} 
              height={400} 
              className="rounded-xl border border-gray-200 shadow-lg hover:shadow-2xl object-cover w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] bg-white" 
              priority
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}