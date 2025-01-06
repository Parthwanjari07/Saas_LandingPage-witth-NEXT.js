import { twMerge } from "tailwind-merge";

export default function Pointer(props: {
    name: string;
    color?: "red" | "blue";
}) {
    const { name, color } = props;
    return (
        <div className="relative inline-block">
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
                className="feature feature-mouse-pointer text-white size-5"
            >
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                <path d="M13 13l6 6" />
            </svg>
            <div className="absolute top-full left-full">
                <div
                    className={twMerge(
                        `inline-flex font-bold rounded-full rounded-tl-none bg-blue-500 text-white px-3 py-1`,
                        color === "red" && "bg-red-500",
                    )}
                >
                    {name}
                </div>
            </div>
        </div>
    );
}
