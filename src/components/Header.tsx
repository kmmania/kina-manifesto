import React, {useEffect, useState} from 'react';
import {Download} from 'lucide-react';
import {COLORS} from '../types';
import {Button} from './Button';

export const Header: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDownload = () => {
        window.print();
    };

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 no-print transition-all duration-300">
            <div className="h-1 bg-gray-100 w-full">
                <div
                    className="h-full transition-all duration-150 ease-out"
                    style={{width: `${scrollProgress * 100}%`, backgroundColor: COLORS.secondary}}
                />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="font-bold text-xl tracking-tight text-[#333333]">KINA</span>
                    <span className="hidden sm:inline-block w-px h-4 bg-gray-300 mx-2"></span>
                    <span className="hidden sm:inline-block text-sm text-gray-500 font-medium">The 2025 Athlete Manifesto</span>
                </div>

                <div className="flex items-center gap-3">
                    <Button
                        variant="outline"
                        onClick={handleDownload}
                        className="!py-2 !px-4 text-sm !border-gray-200 !text-gray-600 hover:!bg-gray-50 hover:!text-gray-900"
                        style={{color: COLORS.textPrimary, borderColor: '#e5e7eb'}}
                    >
                        <Download size={16}/>
                        <span className="hidden sm:inline">Download PDF</span>
                    </Button>

                    <Button
                        className="!py-2 !px-4 text-sm"
                        onClick={() => window.location.href = 'https://kina-landing-page.vercel.app/'}
                    >
                        Join Waitlist
                    </Button>
                </div>
            </div>
        </header>
    );
};