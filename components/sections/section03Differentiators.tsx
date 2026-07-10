import { HOTMART_URL } from "@/lib/constants";
import Image from "next/image";

export default function Section03Differentiators() {

    return (
        <section  className='relative flex flex-col lg:flex-row gap-4 items-center justify-center px-8 lg:px-48 bg-secondary'>
            {/* Texto */}
            <div className="flex flex-col gap-4 lg:w-1/5">
                <p className="font-sans text-foreground text-lg lg:text-2xl">Liberdade geográfica para gerenciar com eficiência</p>
                <h2 className="font-heading text-5xl text-foreground">Gerencie em qualquer lugar</h2>
                <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer"
                className="border border-foreground rounded-xl p-2 w-fit"
                >
                    QUERO LIBERDADE
                </a>
            </div>

            {/* Imagem */}
            <div className="lg:w-4/5">
                <Image
                    src="/ux/section-03-differentiators/section-03-differentiators.png"
                    alt="Gerencie em qualquer lugar"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                />
            </div>
        </section>
    )
}