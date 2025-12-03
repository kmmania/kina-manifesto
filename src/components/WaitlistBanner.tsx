import React, {useState} from 'react';
import {COLORS} from '../types';
import {Button} from './Button';

export const WaitlistBanner: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) setSubmitted(true);
    };

    if (submitted) {
        return (
            <div id="waitlist" className="bg-[#EDF4F9] py-16 px-6 text-center no-print">
                <div className="max-w-xl mx-auto">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold mb-2" style={{color: COLORS.primary}}>Welcome to the Founding
                        Circle!</h3>
                    <p className="text-gray-600">You've secured your priority access. We'll be in touch soon.</p>
                </div>
            </div>
        );
    }

    return (
        <div id="waitlist" className="bg-[#EDF4F9] py-16 px-6 no-print">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4" style={{color: COLORS.textPrimary}}>
                    Don't run alone in the digital age.
                </h2>
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                    Join the KINA waitlist today. Secure 24H Priority Access to the Kickstarter and grab one of the 100
                    "Lifetime Legend" spots.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6A8EAE] transition-shadow"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button type="submit">
                        Join the Waitlist
                    </Button>
                </form>
                <p className="mt-4 text-xs text-gray-500">
                    Limited to 1,000 Founding spots available.
                </p>
            </div>
        </div>
    );
};