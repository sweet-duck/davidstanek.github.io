import React from 'react';

interface SectionCounterProps {
    currentSection: number;
    totalSections: number;
    isMobile: boolean;
}

export const SectionCounter: React.FC<SectionCounterProps> = ({
                                                                  currentSection,
                                                                  totalSections,
                                                                  isMobile
                                                              }) => {
    if (isMobile) return null;

    return (
        <div className={`fixed ${isMobile ? 'bottom-4 left-4' : 'bottom-8 left-8'} z-50 bg-black/30 backdrop-blur-md rounded-full px-3 py-2 text-xs`}>
            <span className="text-purple-400 font-bold">{String(currentSection + 1).padStart(2, '0')}</span>
            <span className="text-white/60 mx-1">/</span>
            <span className="text-white/60">{String(totalSections).padStart(2, '0')}</span>
        </div>
    );
};
