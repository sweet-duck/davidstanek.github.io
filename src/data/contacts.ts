export interface Contact {
    icon: string;
    title: string;
    info: string;
    href: string;
    color: string;
}

export const contacts: Contact[] = [
    {
        icon: "https://static.vecteezy.com/system/resources/previews/022/613/021/non_2x/google-mail-gmail-icon-logo-symbol-free-png.png",
        title: "Email",
        info: "davidstanek.ds5@proton.me",
        href: "davidstanek.ds5@proton.me",
        color: "from-white/20 to-white/20"
    },
    {
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png",
        title: "LinkedIn",
        info: "David Staněk",
        href: "https://cz.linkedin.com/in/david-stan%C4%9Bk-4b3423299",
        color: "from-blue-500/20 to-cyan-500/10"
    },
    {
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png",
        title: "Instagram",
        info: "dajv6",
        href: "dajv6",
        color: "from-pink-500/20 to-red-500/20"
    },
    {
        icon: "https://freelogopng.com/images/all_img/1691730813discord-icon-png.png",
        title: "Discord",
        info: "sweet_duck",
        href: "sweet_duck",
        color: "from-gray-500/20 to-gray-500/20"
    }
];
