export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    gradient: string;
    icon: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "eStudio - Vývoj Minecraft Pluginů",
        description: "Má vášeň v programování začala vývojem herních pluginů pro Minecraft servery.",
        tech: ["Java", "Kotlin", "SQL/NoSQL", "Security"],
        gradient: "from-purple-500 to-blue-500",
        icon: "🎮"
    },
    {
        id: 2,
        title: "Zakázky na míru",
        description: "Vývoj backendových systémů a aplikací na míru, primárně v Javě a Kotlinu. Přizpůsobeno konkrétním potřebám klientů, včetně webových a mobilních řešení.",
        tech: ["Java", "Kotlin", "SQL/NoSQL", "C#", "Angular", "React"],
        gradient: "from-pink-500 to-purple-500",
        icon: "💼"
    },
    {
        id: 3,
        title: "SafeMart",
        description: "Moderní webová aplikace kombinující prvky e-commerce s důrazem na bezpečnost a škálovatelnost. Momentálně ve vývoji.",
        tech: ["Kotlin", "Java Spring Boot", "Angular", "PostgreSQL", "Linux"],
        gradient: "from-cyan-500 to-teal-500",
        icon: "🤝"
    }
];
