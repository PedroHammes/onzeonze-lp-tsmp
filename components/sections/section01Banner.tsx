import Image from 'next/image'
import { HOTMART_URL } from '@/lib/constants'

export default function Section01Banner() {
    return (
        <section className='relative h-screen flex items-center justify-center px-8'>
            <Image 
            src={"/ux/section-01-banner/section-01-banner.webp"}
            alt="banner" 
            fill
            className='object-cover z-0'
            />
            <div className="absolute inset-0 bg-linear-300 from-black/90 pointer-events-none" />
            <div className='relative z-10 flex flex-col gap-8 justify-center items-center'>
                <h1 className='font-heading text-8xl text-background text-center'>Social Media Pro</h1>
                <p className='font-sans text-background text-center text-2xl'>um sistema completo para facilitar e profissionalizar sua gestão de redes sociais</p>
                <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer"
                className='
                font-sans bg-background text-foreground
                p-2 rounded-xl
                text-xs
                '>
                    QUERO GARANTIR
                </a>
            </div>
        </section>
    )
}