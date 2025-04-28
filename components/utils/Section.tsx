import { ComponentPropsInterface } from "@/interface";
import { twMerge } from "tailwind-merge";

interface SectionPropsInterface extends ComponentPropsInterface{
  id?: string;
}

export default function Section({ id, children, className, ...props }: SectionPropsInterface) {
  return (
    <section 
      id={id}
      className={twMerge("py-12 lg:py-18 px-4 lg:px-10", className)} 
      {...props}>
      {children}
    </section>
  );
}