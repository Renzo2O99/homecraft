import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { TestimonialPersonInterface } from "@/interface";
import Image from "next/image";

interface Props {
  person: TestimonialPersonInterface;
  index: number;
}

export default function ItemTestimonial({ person, index }: Props) {
  const { name, avatar, occupation, message } = person;

  return (
    <CarouselItem>
      <Card className="border-gray-300 border-2 lg:border-gray-400">
        <CardContent className="flex flex-col min-h-60 aspect-square items-center justify-center p-6">
          <div className="flex justify-center items-center gap-x-5 my-5">
            <Image
              src={avatar}
              alt={String(avatar)}
              width={undefined}
              height={undefined}
            />
          </div>

          <div className="grid gap-y-2 my-2">
            <div className="text-xl font-semibold">{name}</div>

            <div className="text-gray-500">{occupation}</div>

            <div className="texl-xl max-w-xl">{message}</div>
          </div>
        </CardContent>
      </Card>
    </CarouselItem>
  );
}
