import { testimonialData } from "@/data";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import ItemTestimonial from "./components/ItemTestimonial";

export default function TestimonialSlider() {
  const { persons } = testimonialData;

  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(persons.length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-xs">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {persons.map((person, index) => (
            <ItemTestimonial 
              key={index} 
              person={person}
              index={index} 
            />
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 cursor-pointer disabled:bg-gray-300 !disabled:text-gray-800 !disabled:cursor-not-allowed [&:not(:disabled)]:text-white transition-all duration-300 md:hidden" />

        <CarouselNext className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 cursor-pointer disabled:bg-gray-300 !disabled:text-gray-800 !disabled:cursor-not-allowed [&:not(:disabled)]:text-white transition-all duration-300 md:hidden" />

        <CarouselPrevious className="hidden md:grid bg-gray-800 hover:bg-gray-700 cursor-pointer disabled:bg-gray-300 !disabled:text-gray-800 !disabled:cursor-not-allowed [&:not(:disabled)]:text-white transition-all duration-300" />

        <CarouselNext className="hidden md:grid bg-gray-800 hover:bg-gray-700 cursor-pointer disabled:bg-gray-300 !disabled:text-gray-800 !disabled:cursor-not-allowed [&:not(:disabled)]:text-white transition-all duration-300" />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Testimonial {current} of {count}
      </div>
    </div>
  );
}
