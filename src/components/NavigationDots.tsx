import React from 'react';

interface NavigationDotsProps {
    currentSection: number;
    totalSections: number;
    scrollToSection: (index: number) => void;
    isMobile: boolean;
}

export const NavigationDots: React.FC<NavigationDotsProps> = ({
                                                                  currentSection,
                                                                  totalSections,
                                                                  scrollToSection,
                                                                  isMobile
                                                              }) => {
    if (isMobile) return null;

    return (
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
            <div className="space-y-2">
                {Array.from({ length: totalSections }, (_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                            currentSection === index
                                ? 'bg-purple-500 scale-125 shadow-lg shadow-purple-500/50'
                                : 'bg-white/30 hover:bg-white/50'
                        }`}
                        onClick={() => scrollToSection(index)}
                    />
                ))}
            </div>
        </div>
    );
};
