import { Card, CardHeader } from "@/components/ui/card";
import { ProductInterface } from "@/interface";
import Image from "next/image";
import { HiPlusSm } from "react-icons/hi";

export default function ItemProductComponent({ product }: { product: ProductInterface}) {
  const { name, image, price, oldPrice } = product;
  return (
    <Card className="w-full max-w-72 p-4 h-96 text-left border-2 hover:border-accent-500 transition-all duration-300 shadow-[-10px_9px_14px_2px_rgba(0,_0,_0,_0.15)] hover:shadow-[0px_0px_73px_-9px_#cbecea] cursor-pointer">
      <CardHeader className="w-full border rounded-2xl border-gray-400 max-w-72 h-full max-h-72 flex items-center justify-center mb-4 relative cursor-zoom-in">
        <Image src={image} alt={name} />

        <div className="absolute bottom-4 right-5 backdrop-blur-sm">
          <HiPlusSm className="text-2xl w-8 h-8 text-primary-500 bg-gray-300/80 hover:bg-gray-400/80 rounded-full cursor-grab active:cursor-grabbing transition-all duration-300" />
        </div>
      </CardHeader>

      <div className="font-semibold lg:text-xl ">
        {name}
      </div> 

      <div className="flex items-center gap-x-3 mb-4 md:mb-2">
        <p className="text-green-600 underline">
          $ {price}
        </p>

        <p className="text-base text-grey-500 line-through">
          $ {oldPrice}
        </p>
      </div>
    </Card>
  )
}