"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "2349038829347";
const WHATSAPP_DISPLAY = "+234 903 882 9347";
const EMAIL = "info.gopstudios@gmail.com";

const shootTypes = [
    "Family",
    "Male",
    "Female",
    "Marriage",
    "Birthday",
    "Maternity",
    "Event",
    "Other",
];

const steps = [
    { title: "We reply", text: "You hear back from us within a day." },
    { title: "We plan together", text: "We agree on the date, place and style." },
    { title: "Shoot day", text: "You relax. We take care of the rest." },
];

const inputClass =
    "w-full border border-[#d6cec6] bg-white/60 px-4 py-3 text-base text-[#1d1a19] placeholder:text-[#8f8983] outline-none transition-colors focus:border-[#1d1a19]";
const labelClass =
    "mb-2 block text-xs uppercase tracking-[0.15em] text-[#6f6963]";

export default function ContactSection() {
    const [shootType, setShootType] = useState("");
    const [customShootType, setCustomShootType] = useState("");

    const baseMessage = "Hello, my name is [Your Name]. I'd like to book a shoot.";

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        const finalShootType =
            shootType === "Other"
                ? data.get("customShootType") || "Other"
                : data.get("shootType");

        const lines = [
            "Hello, I'd like to book a shoot.",
            "",
            `Name: ${data.get("name")}`,
            `Shoot type: ${finalShootType}`,
            data.get("date") ? `Date: ${data.get("date")}` : "",
            data.get("location") ? `Location: ${data.get("location")}` : "",
            data.get("message") ? `Note: ${data.get("message")}` : "",
        ].filter((line, i) => line !== "" || i === 1);

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            lines.join("\n")
        )}`;
        window.open(url, "_blank", "noopener,noreferrer");

        // Clear the form and reset button selections after submission
        form.reset();
        setShootType("");
        setCustomShootType("");
    }

    return (
        <section
            aria-labelledby="contact-title"
            className="mx-auto max-w-5xl px-[6vw] pb-20 pt-8 md:px-8 md:pb-28 md:pt-14"
        >
            <h1
                id="contact-title"
                className="mb-4 text-[clamp(40px,7vw,64px)] font-light leading-tight tracking-tight text-[#1d1a19]"
            >
                Book a shoot
            </h1>
            <p className="mb-8 max-w-md text-base leading-7 text-[#2b2623]">
                Tell us the date, the place and the kind of shoot. We reply within a
                day.
            </p>
            <div className="mb-14 flex flex-wrap gap-3 md:mb-20">
                <Link
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(baseMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#6b1423] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#561020]"
                >
                    Message on WhatsApp
                </Link>
            </div>

            {/* Form + details */}
            <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
                <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-2xl font-light tracking-tight text-[#1d1a19]">
                        Or fill in the details
                    </h2>

                    <div>
                        <label htmlFor="name" className={labelClass}>
                            Your name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            autoComplete="name"
                            placeholder="Full name"
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <span className={labelClass}>Type of shoot</span>
                        <div className="flex flex-wrap gap-2">
                            {shootTypes.map((type) => (
                                <button
                                    key={type}
                                    type="button"
                                    onClick={() => setShootType(type)}
                                    aria-pressed={shootType === type}
                                    className={`border px-4 py-2 text-sm transition-colors cursor-pointer ${shootType === type
                                        ? "border-[#6b1423] bg-[#6b1423] text-white"
                                        : "border-[#d6cec6] text-[#1d1a19] hover:border-[#1d1a19]"
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                        <input type="hidden" name="shootType" value={shootType} required />
                    </div>

                    {/* Conditional Input for "Other" shoot type */}
                    {shootType === "Other" && (
                        <div className="pt-1">
                            <label htmlFor="customShootType" className={labelClass}>
                                Specify shoot type
                            </label>
                            <input
                                id="customShootType"
                                name="customShootType"
                                type="text"
                                required
                                value={customShootType}
                                onChange={(e) => setCustomShootType(e.target.value)}
                                placeholder="e.g. Graduation, Commercial, Portrait"
                                className={inputClass}
                            />
                        </div>
                    )}

                    <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                            <label htmlFor="date" className={labelClass}>
                                Preferred date
                            </label>
                            <input id="date" name="date" type="date" className={inputClass} />
                        </div>
                        <div>
                            <label htmlFor="location" className={labelClass}>
                                Location
                            </label>
                            <input
                                id="location"
                                name="location"
                                type="text"
                                placeholder="e.g. Lekki, Lagos"
                                className={inputClass}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className={labelClass}>
                            Anything else?
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Tell us about the day you have in mind"
                            className={inputClass}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={!shootType || (shootType === "Other" && !customShootType.trim())}
                        className="inline-flex items-center gap-2 bg-[#6b1423] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#561020] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                    >
                        <FaWhatsapp aria-hidden="true" size={18} />
                        Send on WhatsApp
                    </button>
                    {!shootType && (
                        <p className="text-xs text-[#8f8983]">
                            Pick a type of shoot to continue.
                        </p>
                    )}
                </form>

                <aside className="space-y-8 md:pt-12">
                    <div>
                        <h2 className="mb-4 text-xs uppercase tracking-[0.15em] text-[#6f6963]">
                            Reach us directly
                        </h2>
                        <ul className="space-y-4 text-[15px] text-[#1d1a19]">
                            <li className="flex items-start gap-3">
                                <FaWhatsapp className="mt-1 shrink-0" aria-hidden="true" />
                                <span>{WHATSAPP_DISPLAY}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaEnvelope className="mt-1 shrink-0" aria-hidden="true" />
                                <span>{EMAIL}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-1 shrink-0" aria-hidden="true" />
                                <span>Lagos, Nigeria · Available globally</span>
                            </li>
                        </ul>
                    </div>
                    <p className="border-l-2 border-[#6b1423] pl-4 text-sm leading-6 text-[#514b46]">
                        We reply to every message within a day.
                    </p>
                </aside>
            </div>

            <div className="mt-16 border-t border-[#d6cec6] pt-10 md:mt-24">
                <h2 className="mb-8 text-xs uppercase tracking-[0.15em] text-[#6f6963]">
                    What happens next
                </h2>
                <ol className="grid gap-8 md:grid-cols-3">
                    {steps.map((step, i) => (
                        <li key={step.title}>
                            <span className="mb-2 block text-sm text-[#6b1423]">
                                0{i + 1}
                            </span>
                            <h3 className="mb-1 text-lg font-medium text-[#1d1a19]">
                                {step.title}
                            </h3>
                            <p className="text-[15px] leading-6 text-[#514b46]">
                                {step.text}
                            </p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}