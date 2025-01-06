import Image from "next/image";
import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";

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
        <section className="container">
            <h3 className="text-center text-xl font-medium text-white/50 mt-10 mb-5">
                Already chosen by these market leaders
            </h3>
            <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex gap-24 mb-20">
                    {logos.map((logo) => (
                        <div key={logo.name} className="flex-shrink-0">
                            <Image
                                src={logo.image}
                                alt={logo.name}
                                className="h-8 w-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
