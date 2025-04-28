import { ComponentPropsInterface } from '@/interface'
import { twMerge } from 'tailwind-merge'

export default function Container({ children, className }: ComponentPropsInterface) {
  return (
    <div className={twMerge("container mx-auto text-center", className)}>{children}</div>
  )
}