"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { formatPackageOption, photographyPackages } from "@/components/pricing-data";

const WHATSAPP_NUMBER = "2349038829347";
const WHATSAPP_DISPLAY = "+234 903 882 9347";
const EMAIL = "info.gopstudios@gmail.com";

const shootTypes = [
    "Weddings",
    "Portraits",
    "Maternity",
    "Newborn",
    "Kids",
    "Other",
];

const steps = [
    { title: "We reply", text: "You hear back from us within a day." },
    { title: "We plan together", text: "We agree on the date, place and style." },
    { title: "Shoot day", text: "You relax. We take care of the rest." },
];

const inputClass =
    "theme-field w-full border px-4 py-3 text-base outline-none transition-colors focus:border-clay";
const labelClass =
    "theme-muted mb-2 block text-xs font-bold uppercase tracking-[0.15em]";

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
            `Email: ${data.get("email")}`,
            `Shoot type: ${finalShootType}`,
            data.get("package") ? `Starting package: ${data.get("package")}` : "",
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
            className="mx-auto max-w-5xl px-[6vw] pb-20 pt-16 md:px-8 md:pb-28 md:pt-24"
        >
            <h1
                id="contact-title"
                className="theme-fg mb-4 text-[clamp(40px,7vw,64px)] font-light leading-tight tracking-tight"
            >
                Book a shoot
            </h1>
            <p className="theme-muted mb-8 max-w-md text-base leading-7">
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
                    <h2 className="theme-fg text-2xl font-light tracking-tight">
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
                        <label htmlFor="email" className={labelClass}>
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="you@example.com"
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
                                        : "theme-border theme-fg border hover:border-ink"
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                        <input type="hidden" name="shootType" value={shootType} required />
                    </div>

                    <div>
                        <label htmlFor="package" className={labelClass}>
                            Starting price package
                        </label>
                        <select
                            id="package"
                            name="package"
                            defaultValue=""
                            className={`${inputClass} cursor-pointer`}
                        >
                            <option value="">Choose a package</option>
                            {photographyPackages.map((item, index) => {
                                const option = formatPackageOption(item);
                                return (
                                    <option key={`${option}-${index}`} value={option}>
                                        {option}
                                    </option>
                                );
                            })}
                        </select>
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
                                placeholder="e.g. Newborn, Portrait"
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
                        <p className="theme-muted text-xs">
                            Pick a type of shoot to continue.
                        </p>
                    )}
                </form>

                <aside className="space-y-8 md:pt-12">
                    <div>
                        <h2 className="theme-muted mb-4 text-xs uppercase tracking-[0.15em]">
                            Reach us directly
                        </h2>
                        <ul className="theme-fg space-y-4 text-[15px]">
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
                    <p className="theme-muted border-l-2 border-clay pl-4 text-sm leading-6">
                        We reply to every message within a day.
                    </p>
                </aside>
            </div>

            <div className="theme-border mt-16 border-t pt-10 md:mt-24">
                <h2 className="theme-muted mb-8  uppercase tracking-[0.15em]">
                    What happens next
                </h2>
                <ol className="grid gap-8 md:grid-cols-3">
                    {steps.map((step, i) => (
                        <li key={step.title}>
                            <span className="mb-2 block text-sm text-clay">
                                0{i + 1}
                            </span>
                            <h3 className="theme-fg mb-1 text-lg font-medium">
                                {step.title}
                            </h3>
                            <p className="theme-muted text-[15px] leading-6">
                                {step.text}
                            </p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}