import { forwardRef } from 'react';
import toast from 'react-hot-toast';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { projects } from '../data/projects';

interface ProjectSectionProps {
    scrollToSection: (index: number) => void;
    isMobile: boolean;
}

export const ProjectSection = forwardRef<HTMLElement, ProjectSectionProps>(
    ({ scrollToSection, isMobile }, ref) => {
        const handleProjectAction = (projectId: number) => {
            if (projectId === 1) {
                window.open("https://www.spigotmc.org/resources/authors/eplugins.1671970/", "_blank");
            } else if (projectId === 3) {
                toast("Odkaz na projekt bude brzy k dispozici!");
            }
        };

        return (
            <section ref={ref} className={`${isMobile ? 'min-h-screen py-8' : 'h-screen'} flex items-center relative`}>
                <div className={`container mx-auto ${isMobile ? 'px-4' : 'px-6'}`}>
                    <div className={`text-center ${isMobile ? 'mb-8' : 'mb-12'}`}>
                        <h2 className={`${isMobile ? 'text-3xl' : 'text-5xl md:text-6xl'} font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent`}>
                            Projekty
                        </h2>
                        <p className={`${isMobile ? 'text-base' : 'text-xl'} text-gray-400 max-w-3xl mx-auto`}>
                            Výběr z mých nejnovějších a nejzajímavějších projektů
                        </p>
                    </div>

                    <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'lg:grid-cols-3 gap-8'}`}>
                        {projects.map((project) => (
                            <Card
                                key={project.id}
                                className="group relative hover:-translate-y-2 transition-all duration-300"
                                gradient={project.gradient}
                            >
                                <div className={`${isMobile ? 'h-24' : 'h-32'} bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                                    <div className={`${isMobile ? 'text-3xl' : 'text-4xl'} hover:scale-110 transition-transform duration-300`}>
                                        {project.icon}
                                    </div>
                                    <div className="absolute inset-0 bg-black/20" />
                                </div>
                                <div className={`${isMobile ? 'p-4' : 'p-6'}`}>
                                    <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold mb-3`}>{project.title}</h3>
                                    <p className={`text-gray-400 mb-4 leading-relaxed ${isMobile ? 'text-sm' : 'text-sm'}`}>{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="px-2 py-1 bg-white/10 rounded-full text-xs border border-white/20">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3">
                                        {(project.id === 1 || project.id === 2) && (
                                            <Button
                                                onClick={() => scrollToSection(4)}
                                                variant="gradient"
                                                size="small"
                                                className={`flex-1 bg-gradient-to-r ${project.gradient}`}
                                            >
                                                Mám zájem
                                            </Button>
                                        )}

                                        {project.id === 1 && (
                                            <Button
                                                onClick={() => handleProjectAction(project.id)}
                                                variant="secondary"
                                                size="small"
                                            >
                                                Ukázka
                                            </Button>
                                        )}

                                        {project.id === 3 && (
                                            <Button
                                                onClick={() => handleProjectAction(project.id)}
                                                variant="secondary"
                                                size="small"
                                            >
                                                Odkaz na projekt brzy
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
);
