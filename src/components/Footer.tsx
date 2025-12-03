import React from 'react';
import {COLORS} from '../types';

export const Footer: React.FC = () => {
    return (
        <div className="bg-white border-t border-gray-200 py-12 px-4 no-print">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="font-bold text-xl mb-2" style={{color: COLORS.textPrimary}}>KINA</h3>
                    <p className="text-gray-500 text-sm">The AI Running Companion That Feels Your Every Stride</p>
                </div>

                <div className="flex gap-6 text-sm text-gray-500">
                    <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-900 transition-colors">Terms of Use</a>
                    <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
                </div>
            </div>
        </div>
    );
};