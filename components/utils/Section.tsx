import { ComponentPropsInterface } from "@/interface";
import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Section({ children, className, ...props }: ComponentPropsInterface) {
  return (
    <section className={twMerge("py-12 lg:py-18 px-4 lg:px-10", className)} {...props}>{children}</section>
  );
}