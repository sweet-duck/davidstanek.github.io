import { forwardRef } from 'react';

interface AboutSectionProps {
    isMobile: boolean;
}

export const AboutSection = forwardRef<HTMLElement, AboutSectionProps>(
    ({ isMobile }, ref) => {
        return (
            <section
                ref={ref}
                className={`${isMobile ? 'min-h-screen py-8' : 'h-screen'} flex items-center relative`}
            >
                <div className={`container mx-auto ${isMobile ? 'px-4' : 'px-6'}`}>
                    <div className={`grid ${isMobile ? 'grid-cols-1 gap-8' : 'lg:grid-cols-2 gap-16'} items-center`}>
                        <div>
                            <h2 className={`${isMobile ? 'text-3xl' : 'text-5xl md:text-6xl'} font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent`}>
                                O mně
                            </h2>
                            <p className={`${isMobile ? 'text-base' : 'text-xl'} text-gray-300 mb-6 leading-relaxed`}>
                                Jsem vášnivý vývojář s více než 7 lety zkušeností, který se primárně specializuje na <strong>Java</strong>-based řešení a zároveň dokážu naprogramovat moderní webové řešení v Angulařu či Reactu.
                            </p>
                            <p className={`${isMobile ? 'text-sm' : 'text-lg'} text-gray-400 mb-8 leading-relaxed`}>
                                Každý projekt považuji za příležitost dovést ho k dokonalosti a získat nové zkušenosti.
                            </p>
                            <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-3 gap-6'}`}>
                                {[
                                    { number: "100%", label: "Spokojenost", color: "text-purple-400" },
                                    { number: "7+", label: "Let zkušeností", color: "text-blue-400" },
                                    { number: "Kompletní vývoj", label: "od návrhu až po nasazení", color: "text-pink-400" }
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        className={`text-center ${isMobile ? 'p-4' : 'p-6'} rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:scale-105 transition-transform duration-300`}
                                    >
                                        <div className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold ${stat.color} mb-2`}>{stat.number}</div>
                                        <div className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-400`}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`relative ${isMobile ? 'mt-8' : ''}`}>
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-2xl animate-[float_6s_ease-in-out_infinite]" />
                                <div className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl ${isMobile ? 'p-6' : 'p-12'} rounded-3xl border border-white/20`}>
                                    <div className="text-center">
                                        <div className={`${isMobile ? 'text-5xl' : 'text-6xl'} mb-4 animate-pulse`}>
                                            👨‍💻
                                        </div>
                                        <h2 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold mb-4`}>Programování je má 'La Passion'</h2>
                                        <p className={`${isMobile ? 'text-sm' : 'text-base'} text-gray-400`}>Neustále se učím nové technologie a zlepšuji své dovednosti</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
);
