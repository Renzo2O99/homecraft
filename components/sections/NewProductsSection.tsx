import { newProductsData } from "@/data";
import Section from "../utils/Section";
import Container from "../utils/Container";
import NewProductSlider from "../ui/NewProductSlider";
import Title from "../utils/Title";
import Link from "next/link";
import SlideHoverButton from "../ui/SliderHoverButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Subtitle from "../utils/Subtitle";

export default function NewProductsSection() {
  const { title, subtitle, link, icon: Icon } = newProductsData;
  return (
    <Section>
      <Container>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <Card className="p-0 lg:p-6 h-full ">
              <div className="my-auto">
                <CardHeader className="p-0">
                  <CardTitle>
                    <Title>{title}</Title>
                  </CardTitle>

                  <CardDescription>
                    <Subtitle>{subtitle}</Subtitle>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                  <SlideHoverButton className="hidden lg:grid rounded-md before:duration-500 cursor-pointer">
                    <span className="flex items-center justify-center">
                      <Link href="#">{link}</Link>
                      
                      {Icon && <Icon className="text-3xl" />}
                    </span>
                  </SlideHoverButton>
                </CardContent>
              </div>
            </Card>
          </div>

          <div className="w-full lg:w-3/5 grid justify-center">
            <NewProductSlider />
          </div>
        </div>
      </Container>
    </Section>
  );
}
