interface FeatureProps {
    image?: React.ReactNode;
    title: string;
    description: string;
}

export default function FeatureCard({
    image,
    title,
    description,
}: FeatureProps) {
    return (
        <div className="bg-white/5  border border-white/15 rounded-3xl p-6 aspect-video flex flex-col">
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
