import Image from "next/image";

interface IntegrationCardProps {
    name: string;
    icon: string;
    description: string;
}

export default function IntegrationCard({
    name,
    icon,
    description,
}: IntegrationCardProps) {
    return (
        <div className="border border-white/15 rounded-3xl bg-zinc-900 p-6  flex flex-col justify-center items-center">
            <Image src={icon} alt={name} className="mb-4 w-24 h-24" />
            <h3 className="text-3xl font-small text-white mb-2 py-2">{name}</h3>
            <p className="text-zinc-500 text-center">{description}</p>
        </div>
    );
}
