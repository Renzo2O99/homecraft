import ChairImg from '@/public/img/chair.png';
import BedImg from '@/public/img/bed.png';
import CupboardImg from '@/public/img/cupboard.png';
import LightingImg from '@/public/img/lighting.png';
import { IoIosArrowRoundForward } from "react-icons/io";
import { NewProductsInterface } from '@/interface';

export const newProductsData: NewProductsInterface = {
  title: 'New In Store Now',
  subtitle: 'Get the latest items immediately with promo prices',
  link: 'Check all',
  icon: IoIosArrowRoundForward,
  products: [
    {
      name: 'chair',
      image: ChairImg,
    },
    {
      name: 'bed',
      image: BedImg,
    },
    {
      name: 'cupboard',
      image: CupboardImg,
    },
    {
      name: 'lighting',
      image: LightingImg,
    },
  ],
};