import { HOTMART_URL } from "@/lib/constants";

export default function Section09Video() {
    return (
        <section className="relative h-screen flex items-center justify-center px-8">
            
            {/* video */}
            <video
                src="/ux/section-09-video/video-web.mp4"
                autoPlay muted loop playsInline 
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/50 pointer-events-none z-10" />

            {/* texto */}
            <div className="relative z-20 flex flex-col items-center gap-6 text-center">
                <h2 className="font-heading text-background text-5xl">prático, completo e eficiente</h2>
                <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer"
                    className="border border-background text-background rounded-xl p-2 w-fit
                    hover:bg-background hover:text-foreground transition-colors cursor-pointer duration-500
                    "
                >
                    QUERO SER SOCIAL MEDIA PRO
                </a>
            </div>
        </section>
    )
}