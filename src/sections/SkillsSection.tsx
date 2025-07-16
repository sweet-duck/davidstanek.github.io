import { forwardRef } from 'react';
import { skills } from '../data/skills';

interface SkillsSectionProps {
    isMobile: boolean;
}

export const SkillsSection = forwardRef<HTMLElement, SkillsSectionProps>(
    ({ isMobile }, ref) => {
        return (
            <section
                ref={ref}
                className={`${isMobile ? 'min-h-screen py-8' : 'h-screen'} flex items-center relative`}
            >
                <div className={`container mx-auto ${isMobile ? 'px-4' : 'px-6'}`}>
                    <div className={`text-center ${isMobile ? 'mb-8' : 'mb-20'}`}>
                        <h2 className={`${isMobile ? 'text-3xl' : 'text-5xl md:text-6xl'} font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent`}>
                            Dovednosti
                        </h2>
                        <p className={`${isMobile ? 'text-base' : 'text-xl'} text-gray-400 max-w-3xl mx-auto`}>
                            Technologie a nástroje, které používám k vytváření výjimečných webových zážitků
                        </p>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'md:grid-cols-3 gap-8'}`}>
                        {skills.map((skill) => (
                            <div
                                key={skill.category}
                                className="relative group hover:scale-105 transition-all duration-300"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300`} />
                                <div className={`relative bg-white/5 backdrop-blur-xl ${isMobile ? 'p-6' : 'p-8'} rounded-3xl border border-white/10 h-full`}>
                                    <div className="text-center mb-6">
                                        <div className={`${isMobile ? 'text-4xl' : 'text-6xl'} mb-4`}>{skill.icon}</div>
                                        <h3 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold`}>{skill.category}</h3>
                                    </div>
                                    <div className="space-y-3">
                                        {skill.items.map((item) => (
                                            <div
                                                key={item}
                                                className={`bg-white/5 backdrop-blur-sm ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} rounded-full text-center border border-white/10 hover:bg-white/10 transition-all duration-300`}
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
);
