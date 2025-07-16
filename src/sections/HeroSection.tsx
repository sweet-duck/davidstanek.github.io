import { forwardRef } from 'react';
import { Button } from '../components/Button';

interface HeroSectionProps {
    scrollToSection: (index: number) => void;
    isMobile: boolean;
}

export const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
    ({ scrollToSection, isMobile }, ref) => {
        return (
            <section
                ref={ref}
                className={`${isMobile ? 'min-h-screen py-8' : 'h-screen'} flex items-center justify-center relative`}
            >
                <div className={`text-center z-10 max-w-6xl mx-auto ${isMobile ? 'px-4' : 'px-6'}`}>
                    <div className="animate-[fadeIn_1s_ease-out]">
                        <h1 className={`${isMobile ? 'text-4xl' : 'text-6xl md:text-8xl lg:text-9xl'} font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent`}>
                            David Staněk
                        </h1>
                    </div>

                    <div className="animate-[fadeIn_1s_ease-out_0.3s_both]">
                        <h2 className={`${isMobile ? 'text-lg' : 'text-2xl md:text-4xl'} font-light mb-8 text-gray-300 tracking-widest uppercase`}>
                            Full Stack Developer
                        </h2>
                    </div>

                    <div className="animate-[fadeIn_1s_ease-out_0.6s_both]">
                        <p className={`${isMobile ? 'text-base' : 'text-xl md:text-2xl'} mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed`}>
                            Vyvíjím moderní aplikace s důrazem na čistý kód a výborný uživatelský zážitek.
                        </p>
                    </div>

                    <div className={`animate-[fadeIn_1s_ease-out_0.9s_both] flex ${isMobile ? 'flex-col' : 'flex-col sm:flex-row'} gap-4 justify-center items-center`}>
                        <Button
                            variant="primary"
                            size={isMobile ? "small" : "large"}
                            onClick={() => scrollToSection(4)}
                            className={isMobile ? 'w-full' : ''}
                        >
                            🚀 Zaujal jsem tě? Napiš mi
                        </Button>
                        <Button
                            variant="secondary"
                            size={isMobile ? "small" : "large"}
                            onClick={() => scrollToSection(1)}
                            className={isMobile ? 'w-full' : ''}
                        >
                            📄 Více o mně
                        </Button>
                    </div>
                </div>

                {!isMobile && (
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer">
                            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
                        </div>
                    </div>
                )}
            </section>
        );
    }
);
