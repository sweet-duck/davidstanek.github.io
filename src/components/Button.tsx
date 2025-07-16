import React, {type ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'gradient';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  onClick,
                                                  variant = 'primary',
                                                  size = 'medium',
                                                  className = '',
                                                  type = 'button',
                                                  disabled = false
                                              }) => {
    const getVariantClasses = () => {
        switch (variant) {
            case 'primary':
                return 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-purple-500/25';
            case 'secondary':
                return 'border-2 border-white/20 text-white hover:bg-white/10';
            case 'gradient':
                return 'text-white'; // Custom gradient will be applied via className
            default:
                return 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-purple-500/25';
        }
    };

    const getSizeClasses = () => {
        switch (size) {
            case 'small':
                return 'px-4 py-2 text-sm';
            case 'medium':
                return 'px-6 py-3 text-base';
            case 'large':
                return 'px-8 py-4 text-lg';
            default:
                return 'px-6 py-3 text-base';
        }
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                ${getVariantClasses()}
                ${getSizeClasses()}
                rounded-xl font-semibold
                hover:scale-105 transition-all duration-300
                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                ${className}
            `}
        >
            {children}
        </button>
    );
};
