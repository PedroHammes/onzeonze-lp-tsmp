import Image from "next/image"

export default function Section04Features() {
    return(
        <section className='flex flex-col lg:flex-row gap-8 items-center justify-center px-8'>
            {/* Texto */}
            <div className="flex flex-col lg:w-1/2">
                <h2 className="font-heading text-5xl lg:text-6xl text-primary">Otimize tempo nos relatórios de redes sociais</h2>
                <p className="font-sans text-foreground text-base lg:text-2xl mt-4">Um espaço dedicado a armazenar os relatórios das redes sociais.</p>
                <p className="font-sans text-foreground text-base lg:text-2xl mt-4">_Relatórios mensais</p>
                <p className="font-sans text-foreground text-base lg:text-2xl">_Relatórios trimestrais</p>
                <p className="font-sans text-foreground text-base lg:text-2xl">_Relatórios anuais</p>
            </div>

            {/* Imagem */}
            <div className="lg:w-1/2 flex justify-center">
                <div className="w-90 h-125 relative rounded-[4rem] overflow-hidden">
                    <Image 
                    src={"/ux/section-04-features/relatorios.webp"}
                    alt="Relatórios de redes sociais"
                    fill
                    className="object-cover"
                    />
                </div>
            </div>
        </section>
    )
}