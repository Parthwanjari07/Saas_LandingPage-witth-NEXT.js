import { twMerge } from "tailwind-merge";

export default function Tag(props: { title: string; className?: string }) {
    return (
        <div
            className={twMerge(
                "inline-flex items-center py-1 px-3 rounded-full border-lime-500 border text-sm font-semibold text-lime-500 mb-8",
                props.className,
            )}
        >
            <span className="mr-2 text-xl ">★</span> {props.title}
        </div>
    );
}
