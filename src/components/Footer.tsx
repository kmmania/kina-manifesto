import React, {useState} from 'react';
import {COLORS} from '../types';
import {Modal} from './Modal';
import {Mail} from 'lucide-react';
import kinaLogo from '../assets/kina-logo.png';

type ModalType = 'privacy' | 'terms' | 'contact' | null;

export const Footer: React.FC = () => {
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    const [contactFormStatus, setContactFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const openModal = (type: ModalType) => (e: React.MouseEvent) => {
        e.preventDefault();
        setActiveModal(type);
    };

    const closeModal = () => {
        setActiveModal(null);
        if (contactFormStatus === 'success') {
            setTimeout(() => setContactFormStatus('idle'), 500); // Reset after close
        }
    };

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setContactFormStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setContactFormStatus('success');
        }, 1500);
    };

    return (
        <>
            <div className="bg-white border-t border-gray-200 py-12 px-4 no-print">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <img src={kinaLogo} alt="KINA Logo" className="h-10 w-auto object-contain"/>
                        <h3 className="font-bold text-xl mb-2" style={{color: COLORS.textPrimary}}>KINA</h3>
                        <p className="text-gray-500 text-sm">The AI Running Companion That Feels Your Every Stride</p>
                    </div>

                    <div className="flex gap-6 text-sm text-gray-500">
                        <button onClick={openModal('privacy')}
                                className="hover:text-gray-900 transition-colors text-left">Privacy Policy
                        </button>
                        <button onClick={openModal('terms')}
                                className="hover:text-gray-900 transition-colors text-left">Terms of Use
                        </button>
                        <button onClick={openModal('contact')}
                                className="hover:text-gray-900 transition-colors text-left">Contact
                        </button>
                    </div>
                </div>
            </div>

            {/* --- MODALS --- */}

            {/* Privacy Policy Modal */}
            <Modal
                isOpen={activeModal === 'privacy'}
                onClose={closeModal}
                title="Privacy Policy"
            >
                <div className="space-y-6 text-sm text-gray-600 leading-relaxed font-sans">
                    <p className="text-xs text-gray-400">Last Updated: December 2025</p>

                    <section>
                        <h4 className="font-bold text-gray-900 mb-2">1. Introduction</h4>
                        <p>Welcome to KINA ("we," "our," or "us"). We are committed to protecting your personal
                            information and your right to privacy. This policy explains how we collect, use, and share
                            your information when you visit our landing page and join our waitlist.</p>
                    </section>

                    <section>
                        <h4 className="font-bold text-gray-900 mb-2">2. Information We Collect</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Personal Information:</strong> We collect your email address and first name when
                                you voluntarily sign up for our waitlist or download our Manifesto.
                            </li>
                            <li><strong>Usage Data:</strong> We may use standard cookies or analytics tools (like Vercel
                                Analytics) to understand how visitors interact with our website (e.g., pages visited,
                                time spent).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h4 className="font-bold text-gray-900 mb-2">3. How We Use Your Information</h4>
                        <p className="mb-2">We use your data for the following purposes:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>To deliver the "Athlete of 2025" Manifesto: Sending you the document you requested.</li>
                            <li>Communication: To occasionally send you relevant insights regarding our research or the
                                KINA project development, only if you have consented to receive updates.
                            </li>
                        </ul>
                        <p className="mt-2 text-xs italic">Note: You can unsubscribe from these communications at any
                            time.</p>
                    </section>

                    <section>
                        <h4 className="font-bold text-gray-900 mb-2">4. Data Sharing</h4>
                        <p>We never sell your personal data. We may share data with trusted third-party service
                            providers solely for the purpose of operating our site (e.g., email service providers,
                            hosting services), who are bound by confidentiality obligations.</p>
                    </section>

                    <section>
                        <h4 className="font-bold text-gray-900 mb-2">5. Your Rights</h4>
                        <p>You can unsubscribe from our emails at any time by clicking the "unsubscribe" link in the
                            footer of our emails. If you wish to have your data completely deleted, please contact us at
                            support@kina.run.</p>
                    </section>

                    <section>
                        <h4 className="font-bold text-gray-900 mb-2">6. Contact</h4>
                        <p>For any questions about this policy, please <button onClick={() => setActiveModal('contact')}
                                                                               className="text-blue-600 underline font-medium hover:text-blue-800">contact
                            us here</button>.
                        </p>
                    </section>
                </div>
            </Modal>

            {/* Terms of Service Modal */}
            <Modal
                isOpen={activeModal === 'terms'}
                onClose={closeModal}
                title="Terms of Service"
            >
                <div className="space-y-6 text-sm text-gray-600 leading-relaxed font-sans">
                    <p className="text-xs text-gray-400">Last Updated: December 2025</p>

                    <section>
                        <h4 className="font-bold text-gray-900 mb-2">1. Acceptance of Terms</h4>
                        <p>By accessing and using this website, you agree to be bound by these Terms of Service. If you
                            do not agree with any part of these terms, you must not use this website.</p>
                    </section>

                    <section>
                        <h4 className="font-bold text-gray-900 mb-2">2. Nature of Service</h4>
                        <p>This website is dedicated to the distribution of the white paper titled "The Athlete of 2025
                            - The Manifesto". It is an informational resource provided by KM Mania.</p>
                    </section>

                    <section>
                        <h4 className="font-bold mb-2 text-red-500">3. Medical Disclaimer (IMPORTANT)</h4>
                        <p>KINA is an AI companion for running and well-being, not a medical device. The content
                            provided in our Manifesto, emails, and on this website is for informational and educational
                            purposes only. It is not intended to be a substitute for professional medical advice,
                            diagnosis, or treatment. Always seek the advice of your physician or other qualified health
                            provider before starting any new exercise program. You assume full responsibility for any
                            risks, injuries, or damages, known or unknown, which might occur as a result of using our
                            information.</p>
                    </section>

                    <section>
                        <h4 className="font-bold text-gray-900 mb-2">4. Intellectual Property</h4>
                        <p className="mb-2">The "Athlete of 2025" Manifesto and all content on this site are the
                            exclusive property of Dac Linh Giao NGUYEN / KM Mania and are protected by
                            international copyright laws.</p>
                        <p><strong>Usage Rights:</strong> You are authorized and encouraged to share and distribute the
                            Manifesto freely, provided it is shared in its entirety, without modification, and that the
                            author and source are clearly cited. You may not sell this document or use it for commercial
                            purposes without explicit permission.</p>
                    </section>

                    <section>
                        <h4 className="font-bold text-gray-900 mb-2">5. Limitation of Liability</h4>
                        <p>In no event shall KINA, nor its directors, employees, or partners, be liable for any
                            indirect, incidental, special, consequential, or punitive damages arising out of your use of
                            our website or content.</p>
                    </section>

                    <section>
                        <h4 className="font-bold text-gray-900 mb-2">6. Governing Law</h4>
                        <p>These Terms shall be governed by and defined following the laws of France, without regard to
                            its conflict of law provisions.</p>
                    </section>
                </div>
            </Modal>

            {/* Contact Modal */}
            <Modal
                isOpen={activeModal === 'contact'}
                onClose={closeModal}
                title=""
            >
                <div className="text-center sm:text-left mb-6">
                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-2">
                        <div
                            className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={24}/>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">Contact Support</h3>
                            <p className="text-gray-500">We're here to help.</p>
                        </div>
                    </div>
                </div>

                {contactFormStatus === 'success' ? (
                    <div className="text-center py-12">
                        <div
                            className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                        <p className="text-gray-500 mb-6">Thank you for reaching out. We'll get back to you as soon as
                            possible.</p>
                        <button
                            onClick={closeModal}
                            className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white"
                                placeholder="your@email.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message"
                                   className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                                placeholder="How can we help?"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={contactFormStatus === 'submitting'}
                            className="w-full py-4 rounded-lg font-bold text-white text-lg shadow-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 mt-4"
                            style={{backgroundColor: COLORS.secondary}}
                        >
                            {contactFormStatus === 'submitting' ? (
                                <>
                                    <div
                                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>
                )}
            </Modal>
        </>
    );
};
