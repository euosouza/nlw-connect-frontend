import { type ItemRanking, RankingCard } from "./ranking-card"

interface RankingProps {
  ranking: Array<ItemRanking>
}

export function Ranking({ ranking }: RankingProps) {
  return (
    <div className="lg:max-w-[440px] w-full flex flex-col justify-between">
      <h2 className="font-heading mb-5 text-xl">Ranking de indicações</h2>

      <div className="grid gap-4">
        {
          ranking.map((item => (
            <RankingCard item={item} />
          )))
        }
        {/* <div className="bg-gray-700 border rounded-xl border-gray-600 relative flex-1 p-8">
            <span>
              <span className="font-bold">1°</span> | André Souza
            </span>
            <p className="font-heading text-2xl text-gray-200">1.128</p>
            <Image
              src={MedalhaOuro}
              alt="Medalha de Ouro"
              className="absolute top-0 right-8"
            />
          </div>

          <div className="bg-gray-700 border rounded-xl border-gray-600 relative flex-1 p-8">
            <span>
              <span className="font-bold">1°</span> | André Souza
            </span>
            <p className="font-heading text-2xl text-gray-200">1.128</p>
            <Image
              src={MedalhaPrata}
              alt="Medalha de Ouro"
              className="absolute top-0 right-8"
            />
          </div>

          <div className="bg-gray-700 border rounded-xl border-gray-600 relative flex-1 p-8">
            <span>
              <span className="font-bold">1°</span> | André Souza
            </span>
            <p className="font-heading text-2xl text-gray-200">1.128</p>
            <Image
              src={MedalhaBronze}
              alt="Medalha de Ouro"
              className="absolute top-0 right-8"
            />
          </div> */}
      </div>
    </div>
  )
}
