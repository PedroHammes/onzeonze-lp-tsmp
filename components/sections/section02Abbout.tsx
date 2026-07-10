import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Section02Banner() {

    return (
        <section className='relative flex flex-col lg:flex-row lg:items-stretch gap-4 items-center justify-center px-8 lg:px-48'>
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
                    <div className="
                    flex flex-row py-4 gap-2 justify-center items-center">
                        <div className="shrink-0 w-8 h-8 flex items-center justify-center">
                            <ArrowRight color="#a15035" size={40}/>
                        </div>
                        <div>
                            <h3 className="font-bold text-base mb-2">GERENCIAMENTO COMPLETO DE REDES SOCIAIS</h3>
                            <p className="text-foreground">Calendário de conteúdos; briefing de conteúdos, relatório de métricas mensais e trimestrais com cálculo automático de taxas de engajamento e de conversão; funil de vendas; pilares de conteúdos.</p>
                        </div>
                    </div>
                    <div className="
                    flex flex-row py-4 gap-2 justify-center items-center">
                        <div className="shrink-0 w-8 h-8 flex items-center justify-center">
                            <ArrowRight color="#a15035" size={40}/>
                        </div>
                        <div>
                            <h3 className="font-bold text-base mb-2">UNIVERSO DA MARCA</h3>
                            <p className="text-foreground">Identidade visual; análise de mercado; brand persona; público alvo; jornada do consumidor e funil de vendas da empresa; comunicação; estratégia digital.</p>
                        </div>
                    </div>
                    <div className="
                    flex flex-row py-4 gap-2 justify-center items-center">
                        <div className="shrink-0 w-8 h-8 flex items-center justify-center">
                            <ArrowRight color="#a15035" size={40}/>
                        </div>
                        <div>
                            <h3 className="font-bold text-base mb-2">ESPAÇO CLIENTE</h3>
                            <p className="text-foreground">O template ainda conta com um espaço do cliente, com comprovantes de pagamento, contrato de prestação de serviços e dados de logins de contas</p>
                        </div>
                    </div>
            </div>
        </section>
    )
}