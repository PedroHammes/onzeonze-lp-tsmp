import Image from "next/image";
import { CalendarCheck, ClipboardList, Activity, Grid3X3, Filter } from "lucide-react"

export default function Section05Details() {
    return (
        <section className='flex flex-col lg:flex-row gap-8 items-center justify-center px-8 lg:px-48 bg-secondary'>
            {/* Texto */}
            <div className="flex flex-col gap-4 lg:w-1/2">
                <h2 className="font-heading text-foreground text-5xl lg:text-6xl">Planeje, gerencie e crie cada conteúdo</h2>
                <p className="font-sans text-foreground text-base lg:text-2xl">
                    O sistema conta com um calendário editorial para planejamento, criação e acompanhamento dos conteúdos de cada rede social. Incluindo relatório de performance com cálculo automático de taxa de engajamento e conversão de seguidores.
                </p>
                <p className="flex flex-row gap-2 items-center font-sans text-foreground text-base lg:text-2xl">
                    <CalendarCheck color="#a15035" size={20}/>
                    Calendário de publicação
                </p>
                <p className="flex flex-row gap-2 items-center font-sans text-foreground text-base lg:text-2xl">
                    <ClipboardList color="#a15035" size={20}/>    
                    Briefing de conteúdo
                </p>
                <p className="flex flex-row gap-2 items-center font-sans text-foreground text-base lg:text-2xl">
                    <Activity color="#a15035" size={20}/>
                    Relatório de performance
                </p>
                <p className="flex flex-row gap-2 items-center font-sans text-foreground text-base lg:text-2xl">
                    <Grid3X3 color="#a15035" size={20}/>
                    Matriz de conteúdo
                </p>
                <p className="flex flex-row gap-2 items-center font-sans text-foreground text-base lg:text-2xl">
                    <Filter color="#a15035" size={20}/>   
                    Funil de vendas
                </p>
            </div>

            {/* Imagem */}
            <div className="lg:w-1/2 flex justify-center">
                <div className="w-90 h-125 lg:w-full relative rounded-[4rem] overflow-hidden">
                    <Image 
                    src={"/ux/section-05-details/details.webp"}
                    alt="Planeje e gerencie conteúdos"
                    fill
                    className="object-cover"
                    />
                </div>
            </div>
        </section>
    )
}