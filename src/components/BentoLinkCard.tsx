import { LucideIcon, ArrowUpRight } from "lucide-react";
import { TiltCard } from "./TiltCard";
import { cn } from "@/lib/utils";

interface BentoLinkProps {
    title: string;
    description: string;
    url: string;
    icon: LucideIcon;
    className?: string;
    isLarge?: boolean;
}

export function BentoLinkCard({ title, description, url, icon: Icon, className, isLarge = false }: BentoLinkProps) {
    return (
        <TiltCard
            href={url}
            className={cn(
                "flex flex-col justify-between p-6 md:p-8 h-full bg-glass hover:bg-glass-hover transition-all duration-500 group premium-shadow border-white/5 hover:border-white/20",
                className
            )}
        >
            <div className="flex justify-between items-start mb-auto">
                {/* Icon with vibrant container */}
                <div className={cn(
                    "relative flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 overflow-hidden",
                    isLarge ? "h-16 w-16" : "h-14 w-14"
                )}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Icon size={isLarge ? 32 : 28} strokeWidth={2} className="relative z-10 text-white" />
                </div>

                <div className="p-2 rounded-full border border-white/5 bg-white/5 opacity-40 group-hover:opacity-100 group-hover:bg-white group-hover:text-black transition-all duration-500 transform -translate-y-2 translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0">
                    <ArrowUpRight size={20} strokeWidth={3} />
                </div>
            </div>

            <div className="mt-8 space-y-3">
                <h3 className={cn(
                    "font-bold tracking-tight text-white group-hover:text-glow transition-all duration-500",
                    isLarge ? "text-3xl" : "text-2xl"
                )}>
                    {title}
                </h3>
                <p className="text-sm md:text-base text-zinc-400 font-medium leading-relaxed line-clamp-2 group-hover:text-white/80 transition-colors">
                    {description}
                </p>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-700" />
        </TiltCard>
    );
}
