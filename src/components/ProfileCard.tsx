import { siteConfig } from "../config";
import { TiltCard } from "./TiltCard";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProfileCard() {
    return (
        <TiltCard className="p-8 md:p-12 flex flex-col justify-between h-full relative overflow-hidden group bg-glass premium-shadow">
            {/* Dynamic Background Glows */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-blue-600/20 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none group-hover:bg-purple-600/15 transition-all duration-700" />

            {/* Social Icons - Absolute Top Right */}
            <div className="absolute top-8 right-8 flex gap-3 z-20">
                {siteConfig.socials.map((social) => (
                    <Button
                        key={social.name}
                        variant="ghost"
                        size="icon"
                        asChild
                        className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 hover:scale-110 active:scale-95 text-zinc-400 hover:text-white transition-all duration-300 backdrop-blur-md"
                    >
                        <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                        >
                            <social.icon size={20} />
                        </a>
                    </Button>
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center md:items-start space-y-8">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative h-32 w-32 md:h-44 md:w-44 overflow-hidden rounded-[2.5rem] border-2 border-white/10 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                        <img
                            src={siteConfig.profile.avatar}
                            alt={siteConfig.profile.name}
                            className="h-full w-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                        />
                    </div>
                </div>

                <div className="text-center md:text-left space-y-4">
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none animated-gradient-text">
                            {siteConfig.profile.name}
                        </h1>
                        <div className="hidden md:flex rounded-full bg-blue-500/10 p-1.5 border border-blue-500/30 backdrop-blur-sm">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-400">
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-lg font-medium tracking-tight">
                        {siteConfig.profile.bio}
                    </p>
                </div>
            </div>

            <div className="relative z-10 flex flex-wrap justify-center md:justify-start gap-3 mt-12 mb-2">
                <Badge variant="outline" className="px-6 py-2.5 rounded-full text-base gap-2 font-bold bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors cursor-default">
                    <Briefcase size={16} className="text-blue-400" />
                    Software Engineer
                </Badge>
                <Badge variant="outline" className="px-6 py-2.5 rounded-full text-base gap-2 font-bold bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors cursor-default">
                    <MapPin size={16} className="text-purple-400" />
                    Tashkent
                </Badge>
                <button className="flex items-center gap-2 px-6 py-2.5 rounded-full text-base font-bold bg-white text-black hover:bg-zinc-200 transition-all ml-auto mt-4 md:mt-0 group/btn">
                    Let's Talk
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </TiltCard>
    );
}
