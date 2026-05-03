import { HOTMART_URL } from "@/lib/constants";
import Image from "next/image";

export default function Section03Differentiators() {

    return (
        <section  className='relative flex flex-col gap-4 items-center justify-center px-8 bg-secondary'>
            {/* Texto */}
            <div className="flex flex-col gap-4">
                <p className="font-sans text-foreground text-base">Liberdade geográfica para gerenciar com eficiência</p>
                <h2 className="font-heading text-5xl text-foreground">Gerencie em qualquer lugar</h2>
                <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer"
                className="border border-foreground rounded-xl p-2 w-fit"
                >
                    QUERO LIBERDADE
                </a>
            </div>

            {/* Imagem */}
            <div>
                <Image
                src="/ux/section-03-differentiators/section-03-differentiators.webp"
                alt="Gerencie em qualquer lugar"
                width={400}
                height={300}
                />
            </div>
        </section>
    )
}