export interface Skill {
    category: string;
    icon: string;
    color: string;
    items: string[];
}

export const skills: Skill[] = [
    {
        category: "Backend",
        icon: "⚙️",
        color: "from-purple-500 to-pink-500",
        items: [
            "Java/Kotlin",
            "C#",
            "Spring Boot",
            "ORM frameworks"
        ]
    },
    {
        category: "Frontend",
        icon: "💻",
        color: "from-blue-500 to-cyan-500",
        items: [
            "Angular, React",
            "TypeScript",
            "PHP",
            "HTML, CSS, JavaScript"
        ]
    },
    {
        category: "DevOps",
        icon: "☁️",
        color: "from-green-500 to-teal-500",
        items: [
            "Docker",
            "AWS",
            "GitHub Actions",
            "Linux"
        ]
    }
];
