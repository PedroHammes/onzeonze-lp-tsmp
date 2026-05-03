import Image from "next/image";

export default function Section05Details() {
    return (
        <section className='relative flex flex-col gap-4 items-center justify-center px-8 bg-secondary'>
            <div className="flex flex-col gap-4">
                <h2 className="font-heading text-foreground text-5xl">Planeje, gerencie e crie cada conteúdo</h2>
                <p  className="font-sans text-foreground text-base">
                    O sistem conta com um calendário editorial para planejamento, criação e acompanhamento dos conteúdos de cada rede social. Incluindo relatório de perfomance com cálculo automático de taxa de engajamento e conversão de seguidores.
                </p>
                <p className="font-sans text-foreground text-base">_Calendário de publicação</p>
                <p className="font-sans text-foreground text-base">_Briefing de conteúdo</p>
                <p className="font-sans text-foreground text-base">_Relatório de performance</p>
                <p className="font-sans text-foreground text-base">_Matriz de conteúdo</p>
                <p className="font-sans text-foreground text-base">_Funil de vendas</p>
            </div>

            <div className="w-90 h-125 relative rounded-[4rem] overflow-hidden">
                <Image 
                src={"/ux/section-05-details/details.webp"}
                alt="Sobre a empresa"
                fill
                className="object-cover"
                />
            </div>
            
        </section>
    )
}