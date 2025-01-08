"use client"

import Tag from "@/components/Tag";
import FaqCard from "@/components/FaqCard";
import { useState } from "react";

const faqs = [
    {
        question: "How is Layers different from other design tools?",
        answer: "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
    },
    {
        question: "Is there a learning curve?",
        answer: "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
    },
    {
        question: "How do you handle version control?",
        answer: "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
    },
    {
        question: "Can I work offline?",
        answer: "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
    },
    {
        question: "How does Layers handle collaboration?",
        answer: "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    
    const toggleFaq = (index: number) => {
        setSelectedIndex(selectedIndex === index ? null : index);
    };

    return (
        <section className="py-24">
            <div className="container">
                <div className="flex flex-col justify-center items-center">
                    <Tag title="FAQS" className="text-md" />
                    <h2 className="text-6xl font-medium text-white text-center mb-16">
                        Frequently asked <span className="text-lime-400">questions</span>
                    </h2>
                    <div className="flex flex-col gap-4 w-full max-w-3xl">
                        {faqs.map((faq, faqIndex) => (
                            <FaqCard 
                                key={faq.question} 
                                question={faq.question} 
                                answer={faq.answer} 
                                selected={faqIndex === selectedIndex}
                                onClick={() => toggleFaq(faqIndex)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
