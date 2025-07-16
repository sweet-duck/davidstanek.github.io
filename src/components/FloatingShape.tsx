import React from 'react';

interface FloatingShapeProps {
    className: string;
    delay?: number;
    isMobile: boolean;
}

export const FloatingShape: React.FC<FloatingShapeProps> = ({ className, delay = 0, isMobile }) => {
    return (
        <div
            className={`${className} ${isMobile ? 'animate-pulse' : 'animate-pulse'}`}
            style={{
                animationDelay: `${delay}s`,
                animationDuration: isMobile ? '12s' : '8s'
            }}
        />
    );
};
