import { productsData } from "@/data";
import Section from "../utils/Section";
import Container from "../utils/Container";
import Title from "../utils/Title";
import Subtitle from "../utils/Subtitle";
import ProductsSlider from "../layout/ProductsSlider/ProductsSlider";

export default function ProductsSection() {
  const { title, subtitle } = productsData;

  return (
    <Section id="products" className="px-0 pt-0 mt-10 scroll-mt-1">
      <Container>
        <div className="px-6 lg:px-10 lg:mt-10">
          <Title>{title}</Title>

          <Subtitle className="max-w-2xl mx-auto mb-10 md:mb-12">
            {subtitle}
          </Subtitle>
        </div>

        <ProductsSlider />
      </Container>
    </Section>
  )
}