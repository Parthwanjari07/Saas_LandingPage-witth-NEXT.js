import Tag from "@/components/Tag";
import FeatureCard from "@/components/Feature_card";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section id="features" className="container px-6 py-24">
            <div>
                <div className="text-center">
                    <Tag title="FEATURES" />
                    <div className="text-6xl  mb-16 ">
                        <span className="text-white">Where power meets </span>
                        <span className="text-lime-500 block">simplicity</span>
                    </div>
                </div>
                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:max-w-2xl lg:max-w-none mx-auto">
                    {/* First feature */}
                    <FeatureCard
                        className="group"
                        image={
                            <div className="flex -space-x-3">
                                <div className="w-20 h-20 rounded-full p-[3px] bg-blue-500">
                                    <div className="w-full h-full rounded-full border-2 border-zinc-900">
                                        <Image
                                            src={avatar1}
                                            alt="Avatar1"
                                            className="w-full h-full rounded-full object-cover ring-2 ring-zinc-900"
                                        />
                                    </div>
                                </div>
                                <div className="w-20 h-20 rounded-full p-[3px] bg-purple-500">
                                    <div className="w-full h-full rounded-full border-2 border-zinc-900">
                                        <Image
                                            src={avatar2}
                                            alt="Avatar2"
                                            className="w-full h-full rounded-full object-cover ring-2 ring-zinc-900"
                                        />
                                    </div>
                                </div>
                                <div className="w-20 h-20 rounded-full p-[3px] bg-orange-500">
                                    <div className="w-full h-full rounded-full border-2 border-zinc-900">
                                        <Image
                                            src={avatar3}
                                            alt="Avatar3"
                                            className="w-full h-full rounded-full object-cover ring-2 ring-zinc-900"
                                        />
                                    </div>
                                </div>
                                <div className="w-20 h-20 rounded-full p-[3px] bg-zinc-700 group-hover:bg-green-500 transition">
                                    <div className="w-full h-full rounded-full border-2 border-zinc-900 flex items-center justify-center relative">
                                        <Image
                                            src={avatar4}
                                            alt="Avatar4"
                                            className="absolute inset-0 w-full h-full rounded-full object-cover opacity-0 group-hover:opacity-100 group-hover:ring-2 group-hover:ring-zinc-900 transition"
                                        />
                                        <span className="text-zinc-400 group-hover:opacity-0 transition">...</span>
                                    </div>
                                </div> 
                            </div>
                        }
                        title="Real-time Collaboration"
                        description="Work together seamlessly with conflict-free team editing"
                    />
                    {/* Second feature */}
                    <FeatureCard
                        className="group"
                        image={
                            <div className="font-bold text-4xl text-center">
                                <div className="text-white/20 group-hover:text-white/10 transition duration-500 ">
                                    We&apos;ve achieved
                                </div>
                                <span className="relative block bg-gradient-to-r from-violet-500 to-pink-500 text-transparent bg-clip-text">
                                    <span>incredible</span>
                                    <video 
                                        src="/gif-incredible.mp4" 
                                        autoPlay 
                                        loop 
                                        muted 
                                        playsInline 
                                        className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl w-40 h-auto opacity-0 group-hover:opacity-100 transition duration-500"
                                    />
                                </span>
                                <span className="text-white/20 group-hover:text-white/10 transition duration-500 block ">
                                    {" "}
                                    growth this year
                                </span>
                            </div>
                        }
                        title="Interactive Prototyping"
                        description="Engage your clients with prototypes that react to user actions"
                    />
                    {/* Third feature - centered in tablet view */}
                    <div className="md:col-start-1 md:col-end-3 lg:col-auto md:w-1/2 md:mx-auto lg:w-full">
                        <FeatureCard
                            className="group"
                            image={
                                <div className="flex gap-6 ">
                                        <div className="outline outline-2 outline-offset-4 outline-transparent bg-white/90 rounded-xl px-7 py-3 text-2xl text-black font-medium group-hover:outline-lime-400 transition-all duration-300 group-hover:translate-y-1  ">
                                        shift
                                    </div>
                                    <div className="outline outline-2 outline-offset-4 outline-transparent bg-white/90 rounded-xl px-5 py-3 text-2xl text-black font-medium group-hover:outline-lime-400 transition-all duration-300 group-hover:translate-y-1  delay-150">
                                        alt
                                    </div>
                                    <div className="outline outline-2 outline-offset-4 outline-transparent bg-white/90 rounded-xl px-5 py-3 text-2xl text-black font-medium group-hover:outline-lime-400 transition-all duration-300 group-hover:translate-y-1 delay-300 ">
                                        C
                                    </div>
                                </div>
                            }
                            title="Keyboard Quick Actions"
                            description="Powerful commands to help you create designs more quickly"
                        />
                    </div>
                </div>

                {/* Features List */}
                <div className="flex flex-wrap justify-center gap-3 mt-12 py-12  ">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className=" group flex items-center gap-2 border border-white/15 bg-zinc-900/90 rounded-full px-4 py-2 text-md lg:text-lg lg:px-6 lg:py-3 lg:gap:3 hover:scale-105 transition-all duration-300"
                        >
                            <svg
                                viewBox="0 0 16 16"
                                fill="none"
                                className="w-3 h-3 group-hover:rotate-45 transition-all duration-500 group-hover:bg-lime-400"
                            >
                                <path
                                    d="M8 0L10.2047 5.79754L16 8L10.2047 10.2025L8 16L5.79533 10.2025L0 8L5.79533 5.79754L8 0Z"
                                    fill="#84cc16"
                                />
                            </svg>
                            <span className="text-white">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
