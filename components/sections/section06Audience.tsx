import { HOTMART_URL } from "@/lib/constants"
import Image from "next/image"

export default function Section06Audience() {
    return (
        <section className='flex flex-col lg:flex-row gap-8 items-center justify-center px-8 lg:px-16'>
            {/* Texto */}
            <div className="flex flex-col gap-4 lg:w-1/2">
                <h2 className="font-heading text-primary text-5xl lg:text-6xl">
                    Perfeito para quem:
                </h2>
                <div className="bg-primary p-4 rounded-xl">
                    <p className="font-sans text-background text-base lg:text-2xl">
                        Presta serviços de social media e precisa gerenciar múltiplos clientes com eficiência
                    </p>
                </div>
                <div className="bg-primary p-4 rounded-xl">
                    <p className="font-sans text-background text-base lg:text-2xl">
                        É empreendedor ou influenciador e quer manter consistência de publicações nas redes sociais com organização
                    </p>
                </div>
                <div className="bg-primary p-4 rounded-xl">
                    <p className="font-sans text-background text-base lg:text-2xl">
                        Possui agência e precisa organizar os processos de gerenciamento das redes sociais dos clientes
                    </p>
                </div>
                <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer"
                className="border border-foreground rounded-xl p-2 w-fit lg:text-2xl"
                >
                    QUERO GARANTIR O MEU
                </a>
            </div>

            {/* Imagem */}
            <div className="lg:w-1/2 flex justify-center">
                <div className="w-90 h-125 relative rounded-[4rem] overflow-hidden">
                    <Image 
                    src={"/ux/section-06-audience/audience.webp"}
                    alt="Para quem é o produto"
                    fill
                    className="object-cover"
                    />
                </div>
            </div>
        </section>
    )
}