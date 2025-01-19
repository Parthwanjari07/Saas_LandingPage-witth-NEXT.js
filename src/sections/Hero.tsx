"use client";

import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursoryou from "@/assets/images/cursor-you.svg";

export default function Hero() {
    const [leftDesignScope, LeftDesignAnimate] = useAnimate();
    const [leftpointerDesignScope, LeftpointerDesignAnimate] = useAnimate();
    const [rightDesignScope, RightDesignAnimate] = useAnimate();
    const [rightpointerDesignScope, RightpointerDesignAnimate] = useAnimate();

    useEffect(() => {
        LeftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        LeftpointerDesignAnimate([
            [leftpointerDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [
                leftpointerDesignScope.current,
                { y: 0, x: -100 },
                { duration: 0.5 },
            ],
            [
                leftpointerDesignScope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
        RightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        RightpointerDesignAnimate([
            [
                rightpointerDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [
                rightpointerDesignScope.current,
                { y: 0, x: 200 },
                { duration: 0.5 },
            ],
            [
                rightpointerDesignScope.current,
                { x: 0, y: [0, -16, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
    }, []);

    return (
        <section id="hero"
            className="py-24 overflow-x-clip"
            style={{ cursor: `url(${cursoryou.src}), auto` }}
        >
            <div className="container relative">
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    drag
                    className="absolute -left-32 top-16 hidden lg:block"
                >
                    <Image
                        src={designExample1Image}
                        alt="Design Example 1"
                        draggable="false"
                    />
                </motion.div>

                <motion.div
                    ref={leftpointerDesignScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute left-56 -bottom-1 hidden lg:block"
                >
                    <Pointer name="Andrea" color="blue" />
                </motion.div>

                <motion.div
                    ref={rightDesignScope}
                    initial={{ opacity: 0, y: 100, x: 200 }}
                    drag
                    className="absolute -right-64 -top-16 hidden lg:block"
                >
                    <Image
                        src={designExample2Image}
                        alt="Design Example 2"
                        draggable="false"
                    />
                </motion.div>
                <motion.div
                    ref={rightpointerDesignScope}
                    initial={{ opacity: 0, y: 100, x: 400 }}
                    className="absolute right-80 top-1 hidden lg:block"
                >
                    <Pointer name="Parth" color="red" />
                </motion.div>
                <div className="flex justify-center">
                    <div className="inline-flex items-center py-1 px-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-sm font-semibold text-neutral-950">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center text-white/50 text-xl mt-8 mx-auto max-w-xl">
                    We are a team of designers and developers who are passionate
                    about creating beautiful and functional websites. Layers
                    combined with the latest technology to create a seamless
                    user experience.
                </p>
                <form className="grid grid-cols-2 border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent text-white/50 placeholder:text-white/50 pl-6  w-full"
                    />
                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            variant="primary"
                            size="sm"
                            className="whitespace-nowrap"
                        >
                            Sign Up
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}
