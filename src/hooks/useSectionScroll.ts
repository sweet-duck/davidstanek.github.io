import { useState, useEffect, useRef, useCallback } from 'react';

export function useSectionScroll(totalSections: number) {
    const [currentSection, setCurrentSection] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const sectionRefs = Array.from({ length: totalSections }).map(() => useRef<HTMLElement>(null));

    const scrollToSection = useCallback((index: number) => {
        if (index < 0 || index >= totalSections || isScrolling) return;
        setIsScrolling(true);
        setCurrentSection(index);
        sectionRefs[index].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => setIsScrolling(false), 570);
    }, [isScrolling, sectionRefs, totalSections]);

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 1024);
        onResize();
        window.addEventListener('resize', onResize);

        if (!isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            window.removeEventListener('resize', onResize);
            document.body.style.overflow = 'auto';
        };
    }, [isMobile]);

    useEffect(() => {
        if (isMobile) return;
        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            if (isScrolling) return;
            if (e.deltaY > 0 && currentSection < totalSections - 1)
                scrollToSection(currentSection + 1);
            else if (e.deltaY < 0 && currentSection > 0)
                scrollToSection(currentSection - 1);
        };
        window.addEventListener('wheel', onWheel, { passive: false });
        return () => window.removeEventListener('wheel', onWheel);
    }, [currentSection, isScrolling, isMobile, scrollToSection, totalSections]);

    useEffect(() => {
        if (isMobile) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (isScrolling) return;
            switch(e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    if (currentSection < totalSections - 1) scrollToSection(currentSection + 1);
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    if (currentSection > 0) scrollToSection(currentSection - 1);
                    break;
                case 'Home':
                    e.preventDefault();
                    scrollToSection(0);
                    break;
                case 'End':
                    e.preventDefault();
                    scrollToSection(totalSections - 1);
                    break;
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [currentSection, isScrolling, isMobile, scrollToSection, totalSections]);

    useEffect(() => {
        if (!isMobile) return;
        const onScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const newSection = Math.round(scrollTop / windowHeight);
            setCurrentSection(Math.min(newSection, totalSections - 1));
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [isMobile, totalSections]);

    useEffect(() => {
        if (isMobile) return;
        const preventMiddleScroll = (e: MouseEvent) => {
            if (e.button === 1) e.preventDefault();
        };
        document.addEventListener('mousedown', preventMiddleScroll);
        document.addEventListener('auxclick', preventMiddleScroll);
        return () => {
            document.removeEventListener('mousedown', preventMiddleScroll);
            document.removeEventListener('auxclick', preventMiddleScroll);
        };
    }, [isMobile]);

    return {
        currentSection,
        sectionRefs,
        scrollToSection,
        isMobile
    };
}
