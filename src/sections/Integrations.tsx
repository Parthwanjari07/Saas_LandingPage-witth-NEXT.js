import Tag from "@/components/Tag";
import FigmaLogo from "@/assets/images/figma-logo.svg";
import NotionLogo from "@/assets/images/notion-logo.svg";
import SlackLogo from "@/assets/images/slack-logo.svg";
import RelumeLogo from "@/assets/images/relume-logo.svg";
import FramerLogo from "@/assets/images/framer-logo.svg";
import GitHubLogo from "@/assets/images/github-logo.svg";
import IntegrationCard from "@/components/IntegrationCard";

const integrations = [
    {
        name: "Figma",
        icon: FigmaLogo,
        description: "Figma is a collaborative interface design tool.",
    },
    {
        name: "Notion",
        icon: NotionLogo,
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        name: "Slack",
        icon: SlackLogo,
        description: "Slack is a powerful team communication platform.",
    },
    {
        name: "Relume",
        icon: RelumeLogo,
        description: "Relume is a no-code website builder and design system.",
    },
    {
        name: "Framer",
        icon: FramerLogo,
        description: "Framer is a professional website prototyping tool.",
    },
    {
        name: "GitHub",
        icon: GitHubLogo,
        description: "GitHub is the leading platform for code collaboration.",
    },
];

export default function Integrations() {
    return (
        <section>
            <div className="container grid grid-cols-1 lg:grid-cols-2 ">
                <div className="flex flex-col justify-center items-center lg:pr-24 lg:pb-24">
                    <div className="flex items-center justify-center">
                        <Tag title="INTEGRATIONS" className="text-md" />
                    </div>
                    <h2 className="text-6xl font-medium text-white">
                        Goes well with <span className="text-lime-400">others</span>
                    </h2>
                    <p className="text-zinc-500 text-xl font-medium leading-relaxed mt-4">
                        Layers is a no-code website builder and design system.
                        It&apos;s a powerful tool that allows you to create
                        beautiful websites without having to code.
                    </p>
                </div>
                <div className="mt-12 mb-32 overflow-hidden h-[400px] lg:h-[800px] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div className="space-y-4">
                            {integrations.map((integration) => (
                                <IntegrationCard
                                    key={integration.name}
                                    name={integration.name}
                                    icon={integration.icon}
                                    description={integration.description}
                                />
                            ))}
                        </div>
                        
                        <div className="space-y-4">
                            {integrations.slice().reverse().map((integration) => (
                                <IntegrationCard
                                    key={integration.name}
                                    name={integration.name}
                                    icon={integration.icon}
                                    description={integration.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
