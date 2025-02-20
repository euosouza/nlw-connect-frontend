import { Button } from "@/components/Button"
import { InputField, InputIcon, InputRoot } from "@/components/Input"
import { ArrowRight, Mail, User } from "lucide-react"

import { Text } from "@/components/Text"

export default function Home() {
  return (
    <>
      <h1 className="font-heading text-blue text-4xl md:text-7xl text-center md:text-left mb-10 md:mb-20">
        CodeCraft
        <br />
        <span className="text-gray-100">Summit 2025</span>
      </h1>

      <div className="flex justify-between items-stretch gap-4 flex-col md:flex-row">
        <div className="flex-1 md:flex-2/3 bg-gray-600 rounded-xl p-6 md:p-8">
          <h2 className="font-heading font-bold mb-6 md:mb-8">
            Sobre o evento
          </h2>
          <Text
            className="mb-4"
            msg="Um evento feito por e para pessoas desenvolvedoras apaixonadas por
            criar soluções inovadoras e compartilhar conhecimento. Vamos
            mergulhar nas tendências mais recentes em desenvolvimento de
            software, arquitetura de sistemas e tecnologias emergentes, com
            palestras, workshops e hackathons."
          />
          <Text
            msg="Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito"
            className="m-0"
          />
        </div>
        <div className="flex-1 md:flex-1/3 bg-gray-600 rounded-xl p-6 md:p-8 flex flex-col justify-center items-start">
          <h2 className="font-heading font-bold mb-6">Inscrição</h2>
          <form className="w-full">
            <div className="flex flex-col gap-3 mb-6">
              <InputRoot>
                <InputIcon>
                  <User />
                </InputIcon>
                <InputField type="text" placeholder="Nome completo" />
              </InputRoot>

              <InputRoot>
                <InputIcon>
                  <Mail />
                </InputIcon>
                <InputField type="email" placeholder="E-mail" />
              </InputRoot>
            </div>

            <Button>
              Confirmar
              <ArrowRight className="size-6" />
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
