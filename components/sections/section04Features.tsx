import Image from "next/image"

export default function Section04Features() {
    return(
        <section className='relative flex flex-col gap-4 items-center justify-center px-8 bg-secondary'>
            {/* Texto */}
            <div className="flex flex-col gap-4">
                <h2 className="font-heading text-5xl text-primary">Otimize tempo nos relatórios de redes sociais</h2>
                <p>Um espaço dedicado a armazenar os relatórios das redes sociais.</p>
                <p>_Relatórios mensais</p>
                <p>_Relatórios trimestrais</p>
                <p>_Relatórios anuais</p>
            </div>

            {/* Imagem */}
            <div>
                <div className="w-90 h-125 relative rounded-[4rem] overflow-hidden">
                    <Image 
                    src={"/ux/section-04-features/relatorios.webp"}
                    alt="Sobre a empresa"
                    fill
                    className="object-cover"
                    />
                </div>
            </div>
        </section>
    )
}