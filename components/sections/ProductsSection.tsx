import { productsData } from "@/data";
import Section from "../utils/Section";
import Container from "../utils/Container";
import Title from "../utils/Title";
import Subtitle from "../utils/Subtitle";
import ProductsSlider from "../layout/ProductsSlider/ProductsSlider";

export default function ProductsSection() {
  const { title, subtitle } = productsData;

  return (
    <Section className="px-0 py-5">
      <Container>
        <div className="px-6 lg:px-10">
          <Title>{title}</Title>

          <Subtitle className="max-w-2xl mx-auto mb-10 md:mb-12 lg:mb-16">
            {subtitle}
          </Subtitle>
        </div>

        <ProductsSlider />
      </Container>
    </Section>
  )
}