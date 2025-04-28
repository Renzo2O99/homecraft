import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { productsData } from "@/data";
import { Navigation, Pagination } from "swiper/modules";
import ItemProductComponent from "./components/ItemProductComponent";

export default function ProductsSlider() {
  const { pages } = productsData;
  return (
    <Swiper 
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      navigation={true}
      className="productSlider min-h-[81rem]">
      {pages.map((page, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4 mx-4 py-4 md:px-6 lg:px-10 lg:gap-8">
            {page.productList.map(( product, index ) => (
              <ItemProductComponent key={index} product={product} />
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
