import { HOTMART_URL } from "@/lib/constants"
import Image from "next/image"

export default function Section06Audicence() {
    return (
        <section className='relative flex flex-col gap-4 items-center justify-center px-8'>
            {/* Imagem */}
            <div className="w-90 h-125 relative rounded-[4rem] overflow-hidden">
                <Image 
                src={"/ux/section-06-audience/audience.webp"}
                alt="Sobre a empresa"
                fill
                className="object-cover"
                />
            </div>

            {/* Texto */}
            <div className="flex flex-col gap-4 justify-center items-center">
                <h2 className="font-heading text-primary text-5xl">
                    Perfeito para quem:
                </h2>
                <div className="bg-primary p-4 rounded-xl">
                    <p className="font-sans text-background text-base">
                        Presta serviços de social media e precisa gerenciarmúltiplos clientes com eficiência
                    </p>
                </div>
                <div className="bg-primary p-4 rounded-xl">
                    <p className="font-sans text-background text-base">
                        É empreendedor ou influenciador e quer manter consistência de publicações nas redes sociais com organização
                    </p>
                </div>
                <div className="bg-primary p-4 rounded-xl">
                    <p className="font-sans text-background text-base">
                        Possui agência e precisa organizar os processos de gerenciamento das redes sociais dos clientes
                    </p>
                </div>
                <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer"
                className="border border-foreground rounded-xl p-2 w-fit"
                >
                    QUERO GARANTIR O MEU
                </a>
            </div>
        </section>
    )
}