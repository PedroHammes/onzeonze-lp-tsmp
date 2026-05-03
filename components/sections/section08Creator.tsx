import Image from "next/image"

export default function Section08Creator() {
    return (
        <section className='relative flex flex-col gap-4 items-center justify-center px-8 bg-secondary'>
            {/* Imagem */}
            <div className="w-90 h-125 relative rounded-[4rem] overflow-hidden">
                <Image 
                src={"/ux/section-08-creator/creator.webp"}
                alt="Sobre a empresa"
                fill
                className="object-cover"
                />
            </div>

            {/* Texto */}
            <div className="flex flex-col gap-4 items-start">
                <h2 className="font-heading text-primary text-5xl">
                    Feito por quem conhece o mercado
                </h2>
                <p className="font-sans text-foreground text-base">
                    Maria é publicitária, fundadora da agência OnzeOnze e
                    possui mais de 6 anos de experiência como estrategista
                    digital e gestora de redes sociais.
                    <br /> <br />
                    Após anos de mercado, sentiu a necessidade de
                    desenvolver, por conta própria, um sistema completo,
                    pensado para facilitar o dia a dia da gestão estratégica
                    e criação de conteúdos para redes sociais.
                    <br /> <br />
                    <i>“Depois de muitos anos de estudo e experiência na
                    área, desenvolvi a ferramenta de gestão de redes
                    sociais mais completa do mercado, e o melhor de tudo:
                    totalmente personalizável, com acesso vitalício e sem
                    mensalidades.”</i> – Maria Gomes
                </p>
            </div>
        </section>
    )
}