"use client";

import Tag from "@/components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");


export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });
    const [currentWord, setCurrentWord] = useState(0);
    
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(latest);
        });
    }, [wordIndex]);

    return (
        <section className="container py-24 ">
            <div className="sticky top-20 md:top-28 lg:top-40">
                <div className="text-center ">
                    <Tag title="INTRODUCING LAYERS" />
                    <div className="text-3xl md:text-5xl lg:text-7xl">
                        <span className="text-white">
                            Your creative process deserves better.{" "}
                        </span>
                        <span className="">
                            {words.map((word,  index) => (
                                <span
                                    key={index}
                                    className={twMerge(
                                        "transition duration-500 text-white/25",
                                        
                                        index < currentWord && "text-white",
                                    )}
                                >
                                    {`${word} `}
                                </span>
                            ))}
                        </span>
                        <span className="text-lime-500">
                            That&apos;s why we are building Layers
                        </span>
                    </div>
                </div>
            </div>
            <div className="h-[150vh]" ref={scrollTarget}></div>
        </section>
    );
}
