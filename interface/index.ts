import { StaticImageData } from "next/image";

//? Component Interface
export interface ComponentPropsInterface {
  children: React.ReactNode;
  className?: string;
}

//? Navigation Interface
export interface NavigationItemInterface {
  name: string;
  href: string;
}

export interface NavigationDataInterface {
  navigation: NavigationItemInterface[];
}

//? Hero Interface
export interface HeroDataInterface {
  title: string;
  subtitle: string;
  buttonText: string;
}

//? Stat Interface
export interface StatInterface {
  value: string;
  text: string;
}

//? Feature Item Interface
export interface FeatureItemInterface {
  icon: React.ElementType;
  title: string;
  subtitle: string;
}

//? Feature Object Interface
export interface FeatureObjectInterface {
  image: StaticImageData;
  title: string;
  subtitle: string;
  buttonText: string;
  items: FeatureItemInterface[];
}

//? Features Interface
export interface FeaturesDataInterface {
  feature1: FeatureObjectInterface;
  feature2: FeatureObjectInterface;
}

//? New Products Interface
export interface NewProductsInterface {
  title: string;
  subtitle: string;
  link: string;
  icon: React.ElementType;
  products: {
    name: string;
    image: StaticImageData;
  }[];
}

//? Products Interfaces
export interface ProductInterface {
  image: StaticImageData;
  icon: React.ElementType;
  name: string;
  price: number;
  oldPrice: number;
}

export interface ProductPageInterface {
  productList: ProductInterface[];
}

export interface ProductsDataInterface {
  title: string;
  subtitle: string;
  pages: ProductPageInterface[];
}

//? Testimonial Interface
export interface TestimonialPersonInterface {
  avatar: StaticImageData;
  name: string;
  occupation: string;
  message: string;
}

export interface TestimonialInterface {
  title: string;
  image: StaticImageData;
  persons: TestimonialPersonInterface[];
}

//? Newsletter Interface
export interface NewsletterDataInterface {
  title: string;
  subtitle: string;
  placeholder: string;
  buttonText: string;
}

//? Footer Interface
export interface FooterDataInterface {
  social: {
    icon: React.ElementType;
    href: string;
  }[];
  copyright: string;
}
