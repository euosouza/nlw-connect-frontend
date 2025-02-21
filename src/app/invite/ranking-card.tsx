import Image from "next/image"
import MedalhaBronze from "../../assets/medal-cooper.svg"
import MedalhaOuro from "../../assets/medal-gold.svg"
import MedalhaPrata from "../../assets/medal-silver.svg"

export interface ItemRanking {
  name: string
  position: number
  points: number
}

interface RankingProps {
  item: ItemRanking
}

export function RankingCard({ item }: RankingProps) {
  const medals: Record<number, { src: any; alt: string }> = {
    1: { src: MedalhaOuro, alt: "Medalha de Ouro" },
    2: { src: MedalhaPrata, alt: "Medalha de Prata" },
    3: { src: MedalhaBronze, alt: "Medalha de Bronze" },
  }

  const { src, alt } = medals[item.position] || medals[3]

  return (
    <div className="bg-gray-700 border rounded-xl border-gray-600 relative flex-1 p-8">
      <p>
        <span className="font-bold">{item.position}°</span> | {item.name}
      </p>
      <p className="font-heading text-2xl text-gray-200">{item.points}</p>
      <Image src={src} alt={alt} className="absolute top-0 right-8" />
    </div>
  )
}
