import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import localFont from 'next/font/local'

const inter = localFont({
  src: [
    {
      path: './fonts/inter/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/inter/Inter-Medium.woff2',
      weight: '500',
      style: 'normal',
    }
  ],
  variable: '--font-inter'
})

const coolvetica = localFont({
  src: [
    {
      path: './fonts/coolvetica/Coolvetica-Hv-Comp.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/coolvetica/Coolvetica-Rg-Cond.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/coolvetica/Coolvetica-Rg-Cram.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/coolvetica/Coolvetica-Rg-It.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/coolvetica/Coolvetica-Rg.woff2',
      weight: '500',
      style: 'normal',
    }
  ],
  variable: '--font-coolvetica'
})


export const metadata: Metadata = {
  title: "Template Social Media Pro",
  description: "um sistema completo para profissionalizar suas gestão de redes sociais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn("h-full", "antialiased", inter.variable, coolvetica.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
