import React from 'react';

export const COLORS = {
    primary: '#6A8EAE',    // Blue
    secondary: '#99C794',  // Green
    background: '#F8F8F8', // Off-white
    textPrimary: '#333333',
    textSecondary: '#888888',
    promptBg: '#FFFFFF',
    promptBorder: '#E0E0E0',
};

export interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const AUTHOR = "Dac Linh Giao NGUYEN";
export const DATE = "November 20th 2025";
export const TITLE = "ARE YOU THE 2025 ATHLETE?";