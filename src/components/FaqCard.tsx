import { AnimatePresence } from "framer-motion";

import { motion } from "framer-motion";

export default function FaqCard({
    question,
    answer,
    selected,
    onClick,
}: {
    question: string;
    answer: string;
    selected: boolean;
    onClick: () => void;
}) {
    return (
        <div className="flex flex-col gap-6 w-full max-w-3xl">
            <div
                className="border border-white/10 rounded-2xl p-8 bg-neutral-900 cursor-pointer w-full"
                onClick={onClick}
            >
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-small text-white">
                        {question}
                    </h3>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className={`feather feather-plus text-lime-400 flex-shrink-0 transition duration-300 ${
                            selected ? "rotate-45" : ""
                        }`}
                    >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </div>
                <div>
                    <AnimatePresence>
                        {selected && (
                            <motion.p
                                initial={{ height: 0, marginTop: 0 }}
                                animate={{
                                    height: "auto",
                                    marginTop: "1rem",
                                }}
                                exit={{ height: 0, marginTop: 0 }}
                                className={`text-white/50 text-lg font-medium leading-relaxed mt-4 overflow-hidden`}
                            >
                                {answer}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
