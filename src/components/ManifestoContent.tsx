import React from 'react';
import {AlertCircle, ArrowRight, CheckCircle2} from 'lucide-react';
import {AUTHOR, COLORS, DATE, TITLE} from '../types';

const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({title, subtitle}) => (
    <div className="mb-8 mt-12 print-break-inside-avoid">
        {subtitle && (
            <span className="block text-sm font-semibold tracking-widest uppercase mb-2"
                  style={{color: COLORS.secondary}}>
        {subtitle}
      </span>
        )}
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#333333] leading-tight">
            {title}
        </h2>
        <div className="w-16 h-1 mt-4 rounded-full" style={{backgroundColor: COLORS.primary}}></div>
    </div>
);

const HighlightBox: React.FC<{ children: React.ReactNode }> = ({children}) => (
    <div
        className="p-6 md:p-8 my-8 rounded-xl border border-l-4"
        style={{
            backgroundColor: COLORS.promptBg,
            borderColor: COLORS.promptBorder,
            borderLeftColor: COLORS.primary
        }}
    >
        {children}
    </div>
);

const ResonanceCheck: React.FC = () => (
    <div className="flex items-center gap-2 mt-4 font-semibold italic" style={{color: COLORS.textPrimary}}>
        <ArrowRight size={20} style={{color: COLORS.secondary}}/>
        <span>Does this sound like you?</span>
    </div>
);

export const ManifestoContent: React.FC = () => {
    return (
        <article className="max-w-3xl mx-auto px-6 py-12 md:py-20 font-serif leading-relaxed text-lg text-[#333333]">

            {/* Title Page / Header */}
            <div className="mb-16 md:mb-24 text-center border-b pb-12" style={{borderColor: COLORS.promptBorder}}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight text-[#333333]">
                    {TITLE}
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light italic">
                    The Manifesto. Discover the challenges of a new era and the keys to enlightened performance.
                </p>

                <div className="flex flex-col items-center gap-3">
            <span className="font-sans font-bold uppercase tracking-[0.2em] text-sm md:text-base"
                  style={{color: COLORS.primary}}>
                The KINA Publication
            </span>
                    <div className="text-gray-400 text-sm font-sans flex items-center gap-2">
                        <span>By {AUTHOR}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span>{DATE}</span>
                    </div>
                </div>
            </div>

            {/* Introspection */}
            <section className="mb-16">
                <span
                    className="font-sans text-sm font-bold uppercase tracking-wider text-gray-400 mb-2 block">Introspection</span>
                <h3 className="text-2xl font-bold mb-6">Have you ever wondered...</h3>

                <ul className="space-y-4 mb-8">
                    {[
                        'Why that "slow" run ruined your entire day, when you were just running for the joy of it?',
                        'Why you feel guilty taking a rest day, even when your body is screaming for it?',
                        'Why you check your watch every two minutes, instead of simply feeling the effort?',
                        'Why you hesitate to post your workout on Strava if it\'s not "good enough"?'
                    ].map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start">
                            <div className="mt-2 min-w-[8px] h-2 rounded-full"
                                 style={{backgroundColor: COLORS.secondary}}></div>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <p className="mb-6">
                    If any of these questions hit home, welcome. You're not alone. You are the 2025 athlete, and you're
                    experiencing an unprecedented transformation in the history of endurance sports.
                </p>
                <p className="font-medium text-xl italic" style={{color: COLORS.primary}}>
                    This isn't a flaw. It's not a weakness. It's your era. And it's time to understand it so you can
                    thrive in it.
                </p>
            </section>

            {/* The Great Transformation */}
            <section className="mb-16">
                <SectionHeader title="The Great Transformation : Portrait of the Modern Athlete"/>

                <p className="mb-6">
                    Fifteen years ago, a runner had a stopwatch and their intuition. Today, you navigate an ocean of
                    data: heart rate, training zones, cadence, heart rate variability, recovery scores, social metrics,
                    segment leaderboards.
                </p>

                <HighlightBox>
                    <p className="font-bold text-xl mb-4">
                        You're no longer alone in your head when you run.
                    </p>
                    <p>
                        You're accompanied by algorithms that judge you, communities that watch you, and metrics that
                        compare you.
                    </p>
                </HighlightBox>

                <p>This revolution has created <strong style={{color: COLORS.textPrimary}}>three core
                    tensions</strong> you likely experience every day:</p>
            </section>

            {/* The 3 Tensions */}
            <section className="mb-16 space-y-12">
                <div className="print-break-inside-avoid">
                    <h4 className="text-xl font-bold mb-3 flex items-center gap-3">
                        <span
                            className="flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-sans font-bold"
                            style={{backgroundColor: COLORS.primary}}>1</span>
                        Technology vs Intuition
                    </h4>
                    <p className="pl-11 text-gray-600">
                        Your watch says you're in the right zone. But your legs say it's too hard. Who do you trust? You
                        constantly oscillate between your natural body signals and algorithmic recommendations. Result:
                        you no longer trust your own body.
                    </p>
                </div>

                <div className="print-break-inside-avoid">
                    <h4 className="text-xl font-bold mb-3 flex items-center gap-3">
                        <span
                            className="flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-sans font-bold"
                            style={{backgroundColor: COLORS.primary}}>2</span>
                        Rest vs Guilt
                    </h4>
                    <p className="pl-11 text-gray-600">
                        Your coach tells you to recover. Your body begs for rest. But your app displays "Detraining
                        detected" or "Fitness declining." So you feel guilty. You go out anyway. And you gradually burn
                        out, thinking you're doing the right thing.
                    </p>
                </div>

                <div className="print-break-inside-avoid">
                    <h4 className="text-xl font-bold mb-3 flex items-center gap-3">
                        <span
                            className="flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-sans font-bold"
                            style={{backgroundColor: COLORS.primary}}>3</span>
                        Joy vs Social Performance
                    </h4>
                    <p className="pl-11 text-gray-600">
                        You went out to run for pleasure, to clear your head, to feel alive. But during the run, you're
                        already thinking about what your Strava friends will say. You push hard on a segment to climb
                        the leaderboard. You come back with a good time, but did you actually enjoy it?
                    </p>
                </div>

                <div className="mt-8 p-6 rounded-lg text-center font-bold text-lg md:text-xl"
                     style={{backgroundColor: '#EDF4F9', color: COLORS.primary}}>
                    The question is simple: is technology actually helping you run better, or is it preventing you from
                    running free?
                </div>
            </section>

            {/* Emerging Patterns */}
            <section className="mb-16">
                <SectionHeader title="These New Challenges That Concern You"/>
                <p className="mb-8 text-gray-600">
                    We've identified emerging psychological patterns among modern runners. Here are some of them. How
                    many resonate with you?
                </p>

                <div className="space-y-10">
                    {[
                        {
                            title: "The overachiever syndrome",
                            quote: '"I must follow my training plan to the letter, or I\'ve failed the week."',
                            desc: "You had the perfect plan. But life happens: a tough day at work, a sick kid, unusual fatigue. You can't do your interval workout. You feel guilty, like you've failed. When adaptation is actually the key to progress."
                        },
                        {
                            title: "The optimization obsession",
                            quote: '"I\'ve been plateauing for three weeks. I need to change something."',
                            desc: "Your times aren't improving. Panic. You tweak your plan, try a new method, buy a new gadget. But in reality, plateaus are normal. Improvement is never linear. Yet you can't stand the idea of stagnating, even temporarily."
                        },
                        {
                            title: "Analysis paralysis",
                            quote: '"Between VO2 max, lactate threshold, heart rate zones... I don\'t even know where to start."',
                            desc: "You want to do it right. So you read everything, listen to every podcast, follow every expert. Result: you have so much contradictory information that you don't know what to do anymore. You spend more time searching for the perfect plan than actually running."
                        },
                        {
                            title: "The imposter syndrome",
                            quote: '"I\'m not going to post this run, it\'s too slow."',
                            desc: "You just finished a beautiful run in nature. You felt good. But looking at your pace, you hesitate to post it on Strava. \"Others will think I'm falling off.\" So you keep it private. Or worse, you don't run at all for fear of judgment."
                        },
                        {
                            title: "The confidence crisis",
                            quote: '"I used to love running without overthinking. Now I second-guess everything."',
                            desc: "A few months ago, you ran instinctively. You felt when to speed up, when to slow down, when to rest. Today, you no longer trust your sensations. You constantly check your watch. You've lost your internal compass."
                        },
                        {
                            title: "The comparison trap",
                            quote: '"All my Strava friends ran faster this week. I feel like a failure."',
                            desc: "You had an excellent workout. But scrolling through your feed, you see that others did better. Faster, longer, more elevation. Your satisfaction evaporates instantly. You no longer compare yourself to yourself, but to a universe infinitely expanded by digital technology."
                        }
                    ].map((pattern, idx) => (
                        <div key={idx} className="print-break-inside-avoid">
                            <h4 className="text-xl font-bold mb-2 text-gray-800">{pattern.title}</h4>
                            <div className="mb-4 pl-4 border-l-2 italic text-gray-500"
                                 style={{borderColor: COLORS.secondary}}>
                                {pattern.quote}
                            </div>
                            <p className="text-gray-600 mb-2">{pattern.desc}</p>
                            <ResonanceCheck/>
                        </div>
                    ))}
                </div>
            </section>

            {/* Principles of Hope */}
            <section className="mb-16">
                <SectionHeader title="Toward Enlightened Performance: There is hope" subtitle="PRINCIPLES"/>

                <p className="mb-4 font-bold text-xl">The good news? None of this is inevitable.</p>
                <p className="mb-4 text-gray-600">
                    Technology isn't your enemy. Social networks aren't inherently toxic. Data isn't bad in itself.
                </p>
                <p className="mb-8 text-gray-600">
                    The problem is <strong className="text-gray-900">mindless use</strong> of these tools. It's the lack
                    of perspective on their influence. It's the loss of your cognitive and emotional sovereignty.
                </p>

                <h3 className="text-xl font-bold mb-6">Principles of a balanced practice</h3>

                <div className="grid gap-6">
                    {[
                        {
                            title: "Technology as copilot, not autopilot",
                            desc: "Data informs your decisions, it doesn't make them for you. You remain in control."
                        },
                        {
                            title: "Long-term progression over constant optimization",
                            desc: "Plateaus are normal. Performance cycles are natural. Accepting the body's natural rhythms means respecting its humanity."
                        },
                        {
                            title: "Intrinsic joy as your north star",
                            desc: "Why did you start running? That original reason must remain your guiding light, even when surrounded by metrics and leaderboards."
                        },
                        {
                            title: "Trust your sensations, enhanced by data",
                            desc: "Your body speaks to you. So do algorithms. Learning to navigate between both is developing a new form of intelligence."
                        }
                    ].map((item, idx) => (
                        <div key={idx}
                             className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 print-break-inside-avoid">
                            <div className="flex items-start gap-4">
                 <span
                     className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-white font-bold"
                     style={{backgroundColor: COLORS.secondary}}>
                   {idx + 1}
                 </span>
                                <div>
                                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                                    <p className="text-gray-600 text-base">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Conclusion */}
            <section className="mb-16">
                <h3 className="text-2xl font-bold mb-6 text-gray-400">You're not alone on this journey</h3>
                <p className="mb-4">
                    Thousands of runners experience exactly the same challenges you do. Some have found their balance.
                    Others are still searching. But all share this experience: running in the digital age, between
                    performance and humanity.
                </p>
                <p className="font-bold text-xl mb-6">The key? First understanding what kind of athlete you are.</p>
                <p className="mb-6 text-gray-600">
                    Are you the one drowning in data? The one running for others more than for yourself? The one who's
                    lost confidence in their intuition? The one exhausting themselves trying to optimize everything?
                </p>
                <p className="italic text-lg" style={{color: COLORS.primary}}>
                    Everyone has their own path to balance. But that path begins with awareness.
                </p>
            </section>

            {/* Bonus / Quiz Section */}
            <section className="my-16 p-8 rounded-2xl text-white print-break-inside-avoid"
                     style={{backgroundColor: COLORS.primary}}>
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">🎁</span>
                    <h3 className="text-2xl font-bold">YOUR BONUS: Discover what kind of athlete you are</h3>
                </div>

                <p className="mb-6 text-blue-50">
                    We've created a personalized quiz based on years of sports psychology research and hundreds of
                    interviews with athletes at every level.
                </p>

                <p className="font-bold mb-4">In 3 minutes, you'll discover:</p>
                <ul className="space-y-2 mb-8 text-blue-50">
                    <li className="flex items-center gap-2"><CheckCircle2 size={18}/> Your runner psychological profile
                    </li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={18}/> The specific traps you're exposed
                        to
                    </li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={18}/> Concrete strategies tailored to
                        your situation
                    </li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={18}/> The first actions to regain
                        balance
                    </li>
                </ul>

                <p className="text-sm text-blue-100 italic mb-8">
                    This quiz isn't a judgment. It's a mirror. A starting point. <br/>
                    <strong className="text-white not-italic">Because understanding who you are as an athlete is the
                        first step to becoming who you want to be.</strong>
                </p>

                <a href="https://tally.so/r/Zj8eW5" target='_blank' className="inline-block no-underline">
                    <button
                        className="bg-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                        style={{color: COLORS.primary}}>
                        <span>👉</span> TAKE THE QUIZ NOW
                    </button>
                </a>
                <p className="mt-4 text-sm text-blue-200">Endurance sports are a journey. Make sure you remain the
                    captain.</p>
            </section>

            {/* Footer */}
            <footer className="pt-12 border-t border-gray-200 text-sm text-gray-500 print-break-inside-avoid">
                <h4 className="font-bold text-gray-700 mb-2">Copyright And Sharing</h4>
                <p className="mb-4">© 2025 - {AUTHOR} / KM Mania.</p>
                <p className="mb-4 leading-relaxed">
                    This document is protected by copyright. However, I believe in sharing knowledge. You are authorized
                    and encouraged to distribute this manifesto, provided it is transmitted in its entirety, without
                    modification, and always citing the author and the source.
                </p>
                <div className="bg-gray-100 p-4 rounded text-xs leading-relaxed flex gap-2">
                    <AlertCircle size={16} className="flex-shrink-0 mt-0.5"/>
                    <p>
                        Disclaimer: The analyses presented here are the result of qualitative research. They aim to
                        enlighten sports practice but in no way replace medical advice or professional coaching.
                    </p>
                </div>
            </footer>
        </article>
    );
};