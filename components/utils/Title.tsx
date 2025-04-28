import { twMerge } from 'tailwind-merge'

export default function Title({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <h2 className={twMerge('text-2xl lg:text-4xl leading-tight font-bold mb-4', className)}>{children}</h2>
  )
}