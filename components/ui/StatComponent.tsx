import { StatInterface } from "@/interface"

export default function StatComponent({value, text}: StatInterface) {
  return (
    <div
      className="flex flex-col justify-center p-4 w-full border-b last:border-b-none md:border-b-0 md:odd:border-r md:w-2/4 lg:w-1/4 lg:p-6 lg:border-r lg:last:border-r-none">

      <h3 className="text-2xl font-bold md:text-3xl">
        {value}
      </h3>

      <p className="mx-auto font-light text-semibold text-md lg:text-lg">
        {text}
      </p>
    </div>
  )
}