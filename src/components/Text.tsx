import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface TextProps extends ComponentProps<"p"> {
  msg: string
}
export function Text({ msg, className, ...props }: TextProps) {
  return (
    <p
      {...props}
      className={twMerge(['text-gray-300 leading-relaxed text-sm lg:text-base', className])}
    >
      {msg}
    </p>
  )
}
