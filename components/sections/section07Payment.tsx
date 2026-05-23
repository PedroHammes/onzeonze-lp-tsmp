import { HOTMART_URL } from "@/lib/constants";
import Image from "next/image";

export default function Section07Payment() {
    return (
        <section className='flex flex-col lg:flex-row gap-8 items-center justify-center px-8 lg:px-16 bg-secondary'>
            {/* Texto */}
            <div className="flex flex-col gap-4 lg:w-1/2">
                <p className="font-sans text-foreground text-base lg:text-2xl">
                    Comece agora mesmo a gerenciar com mais eficiência e organização
                </p>
                <h2 className="font-heading text-primary text-5xl lg:text-6xl">
                    Pagamento único, acesso imediato e vitalício
                </h2>
                <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer"
                className="border border-foreground rounded-xl p-2 w-fit lg:text-2xl"
                >
                    QUERO GARANTIR O MEU
                </a>
            </div>

            {/* Imagens */}
            <div className="flex flex-col gap-4 items-center lg:w-1/2">
                <div className="w-90 h-60 relative rounded-[4rem] overflow-hidden">
                    <Image 
                    src={"/ux/section-07-payment/payment-1.webp"}
                    alt="Formas de pagamento"
                    fill
                    className="object-cover"
                    />
                </div>
                <div className="w-90 h-60 relative rounded-[4rem] overflow-hidden">
                    <Image 
                    src={"/ux/section-07-payment/payment-2.webp"}
                    alt="Acesso ao produto"
                    fill
                    className="object-cover"
                    />
                </div>
            </div>
        </section>
    )
}