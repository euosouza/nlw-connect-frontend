import type { ComponentProps, ReactNode } from "react"

interface IconButtonProps extends ComponentProps<"button"> {
  children: ReactNode
}

export function IconButton({ children, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className="cursor-pointer rounded-xl bg-gray-500 text-blue font-semibold
        p-1.5 hover:bg-blue hover:text-gray-900 transition-colors duration-300"
    >
      {children}
    </button>
  )
}
