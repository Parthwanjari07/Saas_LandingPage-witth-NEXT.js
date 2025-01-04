import Tag from "@/components/Tag";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
    return <section className="container py-24 ">
        <div className="text-center ">
            <Tag title="INTRODUCING LAYERS" />
            <div className="text-3xl md:text-5xl lg:text-7xl">
                <span className="text-white">Your creative process deserves better. </span>
                <span className="text-white/25 ">{text}</span> 
                <span className="text-lime-500">That&apos;s why we are building Layers</span>
            </div>
        </div>
    </section>;
}