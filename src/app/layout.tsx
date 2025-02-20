import type { Metadata } from "next"
import { Montserrat, Oxanium } from "next/font/google"
import Image from "next/image"
import logo from "../assets/logo.svg"
import "./globals.css"

export const metadata: Metadata = {
  title: "CodeCraft Summit 2025",
  description:
    "Um evento feito por e para pessoas desenvolvedoras apaixonadas por criar soluções inovadoras e compartilhar conhecimento. Vamos mergulhar nas tendências mais recentes em desenvolvimento de software, arquitetura de sistemas e tecnologias emergentes, com palestras, workshops e hackathons.",
}

const oxanium = Oxanium({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-oxanium",
})

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-gray-900 text-gray-200 h-dvh px-4 md:px-8 py-12 md:py-0 flex justify-start items-center md:items-center md:justify-center flex-col">
        <main className="max-w-7xl">
          <div className="w-full mb-5 md:mb-10 flex justify-center md:justify-start">
            <Image src={logo} alt="devstage" width={108.5} height={30} />
          </div>
          {children}
        </main>
      </body>
    </html>
  )
}
