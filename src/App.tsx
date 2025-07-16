import { Toaster } from 'react-hot-toast';
import { NavigationDots } from './components/NavigationDots';
import { SectionCounter } from './components/SectionCounter';
import { FloatingShape } from './components/FloatingShape';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectSection } from './sections/ProjectSection';
import { ContactSection } from './sections/ContactSection';
import { useSectionScroll } from './hooks/useSectionScroll';
import './App.css';

const App = () => {
    const totalSections = 5;
    const { currentSection, sectionRefs, scrollToSection, isMobile } = useSectionScroll(totalSections);

    return (
        <div className={`bg-gradient-to-br from-slate-900 to-slate-900 text-white ${isMobile ? 'overflow-y-auto' : 'overflow-hidden min-h-screen'}`}>
            <Toaster position="top-right" />

            <NavigationDots
                currentSection={currentSection}
                totalSections={totalSections}
                scrollToSection={scrollToSection}
                isMobile={isMobile}
            />

            <SectionCounter
                currentSection={currentSection}
                totalSections={totalSections}
                isMobile={isMobile}
            />

            <div className="fixed inset-0 pointer-events-none">
                <FloatingShape
                    className={`absolute ${isMobile ? 'top-10 left-10 w-48 h-48' : 'top-20 left-20 w-72 h-72'} bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl`}
                    delay={0}
                    isMobile={isMobile}
                />
                <FloatingShape
                    className={`absolute ${isMobile ? 'top-1/3 right-10 w-56 h-56' : 'top-1/2 right-20 w-96 h-96'} bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-full blur-3xl`}
                    delay={2}
                    isMobile={isMobile}
                />
                <FloatingShape
                    className={`absolute ${isMobile ? 'bottom-10 left-1/4 w-52 h-52' : 'bottom-20 left-1/4 w-80 h-80'} bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl`}
                    delay={4}
                    isMobile={isMobile}
                />
            </div>

            <HeroSection
                ref={sectionRefs[0]}
                scrollToSection={scrollToSection}
                isMobile={isMobile}
            />

            <AboutSection
                ref={sectionRefs[1]}
                isMobile={isMobile}
            />

            <SkillsSection
                ref={sectionRefs[2]}
                isMobile={isMobile}
            />

            <ProjectSection
                ref={sectionRefs[3]}
                scrollToSection={scrollToSection}
                isMobile={isMobile}
            />

            <ContactSection
                ref={sectionRefs[4]}
                isMobile={isMobile}
            />
        </div>

    );
};

export default App;
