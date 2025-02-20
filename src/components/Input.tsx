import type { ComponentProps, ReactNode } from "react"

interface InputRootPros extends ComponentProps<"div"> {
  error?: boolean
  children: ReactNode
}

export function InputRoot({ children, error, ...props }: InputRootPros) {
  return (
    <div
      {...props}
      data-error={error}
      className="group bg-gray-800 rounded-xl h-12 w-full
        border border-gray-600 px-4
        flex gap-2 items-center focus-within:border-gray-100
        data-[error=true]:border-danger"
    >
      {children}
    </div>
  )
}

interface InputIconProps extends ComponentProps<"span"> {
  children: ReactNode
}

export function InputIcon({ children, ...props }: InputIconProps) {
  return (
    <span
      {...props}
      className="text-gray-400 group-focus-within:text-gray-100
        group-[&:not(:has(placeholder-show))]:text-gray-100
        group-data-[error=true]:text-danger"
    >
      {children}
    </span>
  )
}

interface InputFieldProps extends ComponentProps<"input"> {}

export function InputField(props: InputFieldProps) {
  return (
    <input
      {...props}
      className="flex-1 h-full outline-0 text-gray-100 placeholder:text-gray-400"
    />
  )
}
