import { siteConfig } from "../config";
import { TiltCard } from "./TiltCard";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProfileCard() {
    return (
        <TiltCard className="p-8 md:p-10 flex flex-col justify-between h-full relative overflow-hidden group">
            {/* Subtle Gradient Glow Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-purple-500/30 transition-all duration-500" />

            {/* Social Icons - Absolute Top Right */}
            <div className="absolute top-6 right-6 flex gap-2 z-20">
                {siteConfig.socials.map((social) => (
                    <Button
                        key={social.name}
                        variant="ghost"
                        size="icon"
                        asChild
                        className="h-9 w-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 hover:text-white text-zinc-400 transition-all backdrop-blur-sm"
                    >
                        <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                        >
                            <social.icon size={18} />
                        </a>
                    </Button>
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center md:items-start space-y-6">
                <div className="relative h-32 w-32 md:h-40 md:w-40 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl">
                    <img
                        src={siteConfig.profile.avatar}
                        alt={siteConfig.profile.name}
                        className="h-full w-full object-cover scale-110"
                    />
                </div>

                <div className="text-center md:text-left space-y-3">
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                            {siteConfig.profile.name}
                        </h1>
                        {/* Verified Badge */}
                        <div className="rounded-full bg-blue-500/20 p-1 border border-blue-500/50">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-400">
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-sm font-light">
                        {siteConfig.profile.bio}
                    </p>
                </div>
            </div>

            <div className="relative z-10 flex flex-wrap justify-center md:justify-start gap-3 mt-8">
                <Badge variant="outline" className="px-4 py-1.5 text-sm gap-2 font-medium bg-white/5 border-white/10 text-zinc-300 backdrop-blur-md">
                    <Briefcase size={14} className="text-zinc-400" />
                    Software Engineer
                </Badge>
                <Badge variant="outline" className="px-4 py-1.5 text-sm gap-2 font-medium bg-white/5 border-white/10 text-zinc-300 backdrop-blur-md">
                    <MapPin size={14} className="text-zinc-400" />
                    Tashkent
                </Badge>
            </div>
        </TiltCard>
    );
}
