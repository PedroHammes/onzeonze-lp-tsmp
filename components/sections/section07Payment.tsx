import { HOTMART_URL } from "@/lib/constants";
import Image from "next/image";

export default function Section07Payment() {
    return (
        <section className='relative flex flex-col gap-4 items-center justify-center px-8 bg-secondary'>
            {/* Texto */}
            <div className="flex flex-col gap-4 items-start">
                <p className="font-sans text-foreground text-base">
                    Comece agora mesmo a gerenciar com mais eficiência e organização
                </p>
                <h2 className="font-heading text-primary text-5xl">
                    Pagamento único, acesso imediato e vitalício
                </h2>
                <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer"
                className="border border-foreground rounded-xl p-2 w-fit"
                >
                    QUERO GARANTIR O MEU
                </a>
            </div>

            {/* Imagem */}
            <div className="flex flex-col gap-4 items-center">
                <div className="w-90 h-60 relative rounded-[4rem] overflow-hidden">
                    <Image 
                    src={"/ux/section-07-payment/payment-1.webp"}
                    alt="Sobre a empresa"
                    fill
                    className="object-cover"
                    />
                </div>
                <div className="w-90 h-60 relative rounded-[4rem] overflow-hidden">
                    <Image 
                    src={"/ux/section-07-payment/payment-2.webp"}
                    alt="Sobre a empresa"
                    fill
                    className="object-cover"
                    />
                </div>
            </div>
        </section>
    )
}