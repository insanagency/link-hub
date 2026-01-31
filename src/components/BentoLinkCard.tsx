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
                "flex flex-col justify-between p-6 md:p-8 h-full bg-black/40 border-white/5 hover:bg-white/5 transition-colors group",
                className
            )}
        >
            <div className="flex justify-between items-start mb-6">
                {/* Icon with subtle glow container */}
                <div className={cn(
                    "flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10",
                    isLarge ? "h-14 w-14" : "h-12 w-12"
                )}>
                    <Icon size={isLarge ? 28 : 24} strokeWidth={1.5} color="white" />
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight size={20} className="text-zinc-500" />
                </div>
            </div>

            <div className="space-y-2">
                <h3 className={cn(
                    "font-semibold tracking-tight text-white group-hover:text-white transition-colors",
                    isLarge ? "text-2xl" : "text-xl"
                )}>
                    {title}
                </h3>
                <p className="text-sm md:text-base text-zinc-500 font-light leading-relaxed line-clamp-2 group-hover:text-zinc-400 transition-colors">
                    {description}
                </p>
            </div>
        </TiltCard>
    );
}
