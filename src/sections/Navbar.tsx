"use client";

import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion, animate } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false); // Close mobile menu if open
        
        const element = document.querySelector(href);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - 100; // Using scrollY instead

            animate(window.scrollY, offsetPosition, {
                duration: 0.8,
                ease: [0.32, 0.72, 0, 1], // Custom easing
                onUpdate: (value) => {
                    window.scrollTo(0, value);
                }
            });
        }
    };

    return (
        <>
            <section className="pt-4 fixed top-0 z-50 w-full">
                <div className="container">
                    <div className="border border-white/15 rounded-[27px] bg-neutral-950/70 backdrop-blur">
                        <div className="grid grid-cols-2 lg:grid-cols-3     pt-2 pb-2 px-4 pr-2  items-center">
                            <div>
                                <Image
                                    src={logoImage}
                                    alt="Logo"
                                    className="w-auto h-9 md:h-auto "
                                />
                            </div>
                            <div className="lg:flex justify-center items-center hidden">
                                <nav className="flex items-center gap-6">
                                    {navLinks.map((link) => (
                                        <a 
                                            key={link.href} 
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end items-center gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu md:hidden"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen
                                                ? "rotate-45 -translate-y-1 "
                                                : "",
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className={twMerge(
                                            "transition",
                                            isOpen
                                                ? "opacity-0"
                                                : "opacity-100",
                                        )}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen
                                                ? "-rotate-45 translate-y-1 "
                                                : "",
                                        )}
                                    ></line>
                                </svg>
                                <Button
                                    variant="secondary"
                                    className="hidden md:inline-flex items-center"
                                >
                                    Log In
                                </Button>
                                <Button
                                    variant="primary"
                                    className="hidden md:inline-flex items-center"
                                >
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    className="flex flex-col items-center gap-4 mb-2 overflow-hidden"
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            className="py-1 px-4"
                                            onClick={(e) => handleNavClick(e, link.href)}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                    <div className="flex flex-row items-center gap-4">
                                        <Button variant="secondary">
                                            Log In
                                        </Button>
                                        <Button variant="primary">
                                            Sign Up
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[96px] lg:pb-[130px]"></div>
        </>
    );
}
