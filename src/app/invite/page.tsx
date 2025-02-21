import { Text } from "@/components/Text"
import { BadgeCheck, Medal, MousePointerClick } from "lucide-react"

import { InviteLinkInput } from "./Invite-link-input"
import { Ranking } from "./ranking"

export default function Invite() {
  const info = {
    link: "http://localhost:3000/invite/3291381203801293812313",
    acessos: 942,
    inscricoes: 875,
    position: 3,
    ranking: [
      {
        name: "André Souza",
        position: 1,
        points: 1128
      },
      {
        name: "Melissa Loures",
        position: 2,
        points: 928
      },
      {
        name: "Rodrigo Gonçalves",
        position: 3,
        points: 875
      },
    ]
  }

  return (
    <div className="flex justify-between items-stretch gap-6 md:gap-16 flex-col lg:flex-row">
      <div className="lg:max-w-[640px] w-full flex flex-col justify-between">
        <div className="mb-7">
          <h2 className="font-heading text-bold text-2xl md:text-4xl mb-2">Inscrição confirmada!</h2>
          <Text msg="Para entrar no evento, acesse o link enviado para seu e-mail." />
        </div>

        <div className="grid gap-6">
          <div>
            <h3 className="font-heading font-bold mb-3 text-xl">
              Indique e Ganhe
            </h3>
            <Text msg="Convide mais pessoas para o evento e concorra a prêmios exclusivos! É só compartilhar o link abaixo e acompanhar as inscrições:" />
          </div>

          <InviteLinkInput inviteLink={info.link} />

          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-gray-700 border rounded-xl border-gray-600 text-center relative w-full flex-1 py-8">
              <MousePointerClick
                size={20}
                className="absolute top-4 left-4 text-purple"
              />
              <p className="mb-1 text-gray-200 text-2xl font-heading">942</p>
              <p className="text-gray-300 text-sm">Acessos ao link</p>
            </div>

            <div className="bg-gray-700 border rounded-xl border-gray-600 text-center relative w-full flex-1 py-8">
              <BadgeCheck
                size={20}
                className="absolute top-4 left-4 text-purple"
              />
              <p className="mb-1 text-gray-200 text-2xl font-heading">875</p>
              <p className="text-gray-300 text-sm">Inscrições feitas</p>
            </div>

            <div className="bg-gray-700 border rounded-xl border-gray-600 text-center relative w-full flex-1 py-8">
              <Medal size={20} className="absolute top-4 left-4 text-purple" />
              <p className="mb-1 text-gray-200 text-2xl font-heading">3°</p>
              <p className="text-gray-300 text-sm">Posição no ranking</p>
            </div>
          </div>
        </div>
      </div>

      <Ranking ranking={info.ranking}/>
    </div>
  )
}
