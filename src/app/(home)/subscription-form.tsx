"use client"

import { Button } from "@/components/Button"
import { InputField, InputIcon, InputRoot } from "@/components/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight, Mail, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

const subscriptionSchema = z.object({
  name: z.string().min(2, "Digite seu nome completo"),
  email: z.string().email("Digite um e-mail válido"),
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  })

  function onSubscribe(data: SubscriptionSchema) {
    router.push("/invite");
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubscribe)}>
      <div className="flex flex-col gap-3 mb-6">
        <div className="space-y-2">
          <InputRoot error={!!errors?.name}>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              {...register("name")}
              type="text"
              placeholder="Nome completo"
            />
          </InputRoot>

          {errors?.name && (
            <p className="text-danger font-semibold text-xs">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <InputRoot error={!!errors?.email}>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              {...register("email")}
              type="email"
              placeholder="E-mail"
            />
          </InputRoot>

          {errors?.email && (
            <p className="text-danger font-semibold text-xs">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight className="size-6" />
      </Button>
    </form>
  )
}
