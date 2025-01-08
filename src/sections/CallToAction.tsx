export default function CallToAction() {
    return (
        <section className="py-24">
            <div className="overflow-x-clip flex p-12">
                <div className="flex flex-none gap-16 text-7xl md:8xl fond-medium">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div key={index} className="flex items-center gap-16">
                            <span className="text-lime-400 ">&#10038;</span>
                            <span>Try it for free</span>
                        </div>
                    ))}
                </div>
            </div>    
        </section>
    );
}