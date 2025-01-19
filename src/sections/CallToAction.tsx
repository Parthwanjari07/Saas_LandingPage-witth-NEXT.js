"use client"

import { motion,useAnimate,AnimationPlaybackControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
    const animatation = useRef<AnimationPlaybackControls>();
    const [scope, animate] = useAnimate();
    const [isHovered, setIsHovered] = useState(false);
   
    useEffect(() => {
        animatation.current = animate(scope.current, { x: "-50%" }, {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
        });
    }, []);
    
    useEffect(() => {
        if (animatation.current) {
            if (isHovered) {
                animatation.current.speed = 0.5;
            } else {
                animatation.current.speed = 1;
            }
        }
    }, [isHovered]);
    return (
        <section className="py-24">
            <div className="overflow-x-clip flex p-12">
                <motion.div
                    
                    
                    ref={scope}
                    className="flex flex-none gap-16 text-7xl md:8xl fond-medium"
                    onMouseEnter={()=>setIsHovered(true)}
                    onMouseLeave={()=>setIsHovered(false)}
                >
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div key={index} className="flex items-center gap-16">
                            <span className="text-lime-400 ">&#10038;</span>
                            <span>Try it for free</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
