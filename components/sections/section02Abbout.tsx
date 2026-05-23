import Image from "next/image"
import { Diamond } from "lucide-react"

export default function Section02Banner() {
    const items = [
        { title: "GERENCIAMENTO COMPLETO DE REDES SOCIAIS", description: "Calendário de conteúdos; briefing de conteúdos, relatório de métricas mensais e trimestrais com cálculo automático de taxas de engajamento e de conversão; funil de vendas; pilares de conteúdos." },
        { title: "UNIVERSO DA MARCA", description: "Identidade visual; análise de mercado; brand persona; público alvo; jornada do consumidor e funil de vendas da empresa; comunicação; estratégia digital." },
        { title: "ESPAÇO CLIENTE", description: "O template ainda conta com um espaço do cliente, com comprovantes de pagamento, contrato de prestação de serviços e dados de logins de contas" },
    ]
    return (
        <section className='relative flex flex-col lg:flex-row lg:items-stretch gap-4 items-center justify-center px-8 lg:px-16'>
            <div className="w-90 h-125 lg:h-auto lg:w-2/5 relative rounded-[4rem] overflow-hidden">
                <Image 
                src={"/ux/section-02-about/section-02-about.webp"}
                alt="Sobre"
                fill
                className="object-cover"
                />
            </div>
            
            <div className="flex flex-col gap-8 lg:w-3/5">
                <h2 className="font-heading text-5xl text-primary">O sistema mais completo do mercado</h2>
                {items.map((item, index) => (
                    <div key={index} className="
                    flex flex-row py-4 gap-2 justify-center items-center
                    border-b border-foreground">
                        <Diamond color="#a15035" size={48}/>
                        <div>
                            <h3 className="font-bold text-base mb-2">{item.title}</h3>
                            <p className="text-foreground">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}