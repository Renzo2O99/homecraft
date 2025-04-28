import { newProductsData } from "@/data";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import SplitText from "./SplitText";
import { capitalizeFirstLetter } from "@/lib/utils";

export default function NewProductSlider() {
  const { products } = newProductsData;

  return (
    <Carousel className="w-full max-w-md">
      <CarouselContent>
        {products.map((product, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="relative flex aspect-video items-center justify-center">
                <Image
                  className="lg:cursor-grab lg:active:cursor-grabbing"
                  src={product.image}
                  alt={product.name}
                  width={320}
                  height={320}
                />

                <div className="absolute mx-auto bottom-1/14 max-w-80 left-0 right-0 bg-black/50 p-2 text-center">
                  <SplitText
                    text={capitalizeFirstLetter(product.name)}
                    className="text-2xl font-semibold text-white text-center"
                    delay={150}
                    animationFrom={{
                      opacity: 0,
                      transform: "translate3d(0,50px,0)",
                    }}
                    animationTo={{
                      opacity: 1,
                      transform: "translate3d(0,0,0)",
                    }}
                    easing={(easeOutCubic) => easeOutCubic}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 md:left-4 left-1 -translate-y-1/2 z-10 cursor-pointer hover:bg-gray-200 transition-all duration-300">
        <button className="text-3xl md:text-4xl">Previous</button>
      </CarouselPrevious>
      <CarouselNext className="absolute top-1/2 md:right-4 right-1 bg-transparent -translate-y-1/2 z-10 cursor-pointer hover:bg-gray-200 transition-all duration-300">
        <button className="text-3xl md:text-4xl">Next</button>
      </CarouselNext>
    </Carousel>
  );
}
