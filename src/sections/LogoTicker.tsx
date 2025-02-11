"use client";
import Image from "next/image";
import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";

import { motion } from "framer-motion";

const logos = [
    { name: "Quantum", image: quantumLogo },
    { name: "Acme Corp", image: acmeLogo },
    { name: "Echo Valley", image: echoValleyLogo },
    { name: "Pulse", image: pulseLogo },
    { name: "Outside", image: outsideLogo },
    { name: "Apex", image: apexLogo },
    { name: "Celestial", image: celestialLogo },
    { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
    return (
        <section className="container pb-24">
            <h3 className="text-center text-xl font-medium text-white/50 mt-10 mb-5">
                Already chosen by these market leaders
            </h3>
            <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex gap-24">
                    <motion.div
                        animate={{
                            x: "-100%",
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 20,
                            ease: "linear",
                        }}
                        className="flex gap-24"
                    >
                        {/* First set of logos */}
                        {logos.map((logo) => (
                            <Image
                                src={logo.image}
                                alt={logo.name}
                                key={logo.name}
                                className="h-8 w-auto"
                            />
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {logos.map((logo) => (
                            <Image
                                src={logo.image}
                                alt={logo.name}
                                key={`${logo.name}-duplicate`}
                                className="h-8 w-auto"
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
