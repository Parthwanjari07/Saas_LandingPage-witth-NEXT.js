import { twMerge } from "tailwind-merge";

interface FeatureProps {
    image?: React.ReactNode;
    title: string;
    description: string;
    className?: string;
}

export default function FeatureCard({
    image,
    title,
    description,
    className,
}: FeatureProps) {
    return (
        <div className={twMerge("rounded-3xl border border-white/15 bg-zinc-900/90 p-8", className)}>
            {/* Image container with fixed height */}
            <div className="h-[200px] mb-auto flex items-center justify-center">
                {image}
            </div>

            {/* Content container */}
            <div className="mt-auto">
                {/* Title */}
                <h3 className="text-white text-3xl font-medium mb-2 text-center">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-zinc-500 text-md leading-relaxed text-center py-1">
                    {description}
                </p>
            </div>
        </div>
    );
}
