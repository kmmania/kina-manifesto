import React from 'react';
import {Analytics} from '@vercel/analytics/react';
import {Header} from './components/Header';
import {ManifestoContent} from './components/ManifestoContent';
import {WaitlistBanner} from './components/WaitlistBanner';
import {Footer} from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Header/>

            <main className="flex-grow pt-16">
                <ManifestoContent/>
                <WaitlistBanner/>
            </main>

            <Footer/>

            {/* Vercel Monitoring */}
            <Analytics/>
        </div>
    );
};

export default App;