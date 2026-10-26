import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
    return (
        <section
            aria-labelledby="about-title"
            className="mx-auto grid max-w-5xl items-center gap-10 px-[6vw] py-12 md:grid-cols-[minmax(0,440px)_1fr] md:gap-12 md:px-8 md:py-24"
        >
            <div className="relative aspect-[0.8] w-full overflow-hidden bg-[#8a5a48]">
                <Image
                    src="/faces.jpg"
                    alt="Emmanuel and Onella, the photographers behind Godfrey Osaki Studios"
                    fill
                    quality={90}
                    sizes="(max-width: 768px) 88vw, 440px"
                    className="object-cover"
                />
            </div>

            <div className="max-w-md">
                <h1
                    id="about-title"
                    className="mb-8 text-[clamp(36px,5vw,52px)] font-light leading-[1.2] tracking-tight text-[#1d1a19]"
                >
                    The faces behind the pictures
                </h1>

                <p className="mb-5 text-[15px] leading-7 text-[#2b2623]">
                    We are Emmanuel and Onella, the couple photographers side by side for just as long. 
                    Working as a team means you get two sets of eyes on every moment.
                </p>
                <p className="mb-8 text-[15px] leading-7 text-[#2b2623]">
                    For us, a photograph is more than a good image. It is a moment that lasts. 
                    We take time to know you, so the people in the frame look like
                    themselves, relaxed and smiling.
                </p>

                <Link
                    href="/contact"
                    className="inline-block bg-[#6b1423] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#561020]"
                >
                    Book a shoot
                </Link>
            </div>
        </section>
    );
}