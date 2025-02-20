import type { ComponentProps } from "react"

interface TextProps extends ComponentProps<"p"> {
  msg: string
}
export function Text({ msg, ...props }: TextProps) {
  return (
    <p
      {...props}
      className="text-gray-300 leading-relaxed text-sm lg:text-base"
    >
      {msg}
    </p>
  )
}
