import React from 'react';
import {COLORS} from '../types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  variant = 'primary',
                                                  fullWidth = false,
                                                  className = '',
                                                  style,
                                                  ...props
                                              }) => {
    let baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2";
    let variantStyles = "";

    if (variant === 'primary') {
        variantStyles = `bg-[${COLORS.primary}] text-white hover:opacity-90 shadow-md`;
    } else if (variant === 'secondary') {
        variantStyles = `bg-[${COLORS.secondary}] text-white hover:opacity-90 shadow-md`;
    } else if (variant === 'outline') {
        variantStyles = `bg-transparent border-2 border-[${COLORS.primary}] text-[${COLORS.primary}] hover:bg-[${COLORS.primary}] hover:text-white`;
    }

    return (
        <button
            className={`${baseStyles} ${variantStyles} ${fullWidth ? 'w-full' : ''} ${className}`}
            style={{
                backgroundColor: variant === 'primary' ? COLORS.primary : variant === 'secondary' ? COLORS.secondary : undefined,
                borderColor: variant === 'outline' ? COLORS.primary : undefined,
                color: variant === 'outline' ? COLORS.primary : undefined,
                ...style
            }}
            {...props}
        >
            {children}
        </button>
    );
};