import React, {type ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    gradient?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', gradient = '' }) => {
    return (
        <div className={`relative ${className}`}>
            {gradient && (
                <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300`} />
            )}
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 h-full">
                {children}
            </div>
        </div>
    );
};
