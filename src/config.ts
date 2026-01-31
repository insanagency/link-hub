import { Github, Instagram, Send, Code2, Palette, Globe, FolderGit2 } from "lucide-react";

export const siteConfig = {
    profile: {
        name: "Ismoil Safarov",
        title: "Software Engineer & UX/UI Designer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
        bio: "Raqamli olamda biznesingizni parvoz qildiruvchi premium yechimlar. Shunchaki kod emas, kelajakni yozaman.",
    },
    socials: [
        {
            name: "GitHub",
            url: "https://github.com/ismoilsafarov",
            icon: Github,
        },
        {
            name: "Instagram",
            url: "https://instagram.com",
            icon: Instagram,
        },
        {
            name: "Telegram",
            url: "https://t.me",
            icon: Send,
        },
    ],
    links: [
        {
            id: "vibe-coding",
            title: "Vibe Coding",
            description: "Dasturlashni 0 dan Pro darajagacha o'rganing. Shunchaki kurs emas, bu – imkoniyat.",
            url: "#",
            icon: Code2,
            highlight: true,
        },
        {
            id: "framer-marketplace",
            title: "Framer Marketplace",
            description: "Saytingizni san'at asariga aylantiruvchi eksklyuziv elementlar.",
            url: "#",
            icon: Palette,
        },
        {
            id: "insan-agency",
            title: "Insan Agency",
            description: "G'oyalaringizni reallikka aylantiramiz. Kreativ va Innovatsion yechimlar.",
            url: "#",
            icon: Globe,
        },
        {
            id: "portfolio",
            title: "Portfolio",
            description: "Mening eng saralangan ishlarim. Sifat va tajriba uyg'unligi.",
            url: "#",
            icon: FolderGit2,
        },
    ],
};
