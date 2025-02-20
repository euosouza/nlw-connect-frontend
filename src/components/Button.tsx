import type { ComponentProps, ReactNode } from "react"

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode
}

export function Button(props: ButtonProps) {
  return (
    <button
      className="cursor-pointer rounded-xl w-full bg-gray-500 text-blue font-semibold
        px-5 h-12 hover:bg-blue hover:text-gray-900 transition-colors duration-300
        flex justify-between items-center
      "
      {...props}
    >
      {props.children}
    </button>
  )
}
