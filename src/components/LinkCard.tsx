import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";

interface LinkCardProps {
    title: string;
    description: string;
    url: string;
    icon: LucideIcon;
    highlight?: boolean;
}

export function LinkCard({ title, description, url, icon: Icon, highlight }: LinkCardProps) {
    const ref = useRef<HTMLAnchorElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        x.set(clientX - left);
        y.set(clientY - top);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.a
            ref={ref}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border border-gray-200/50 bg-white/40 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-gray-300/80 hover:shadow-lg dark:border-white/5 dark:bg-white/5 dark:hover:border-white/10 dark:hover:bg-white/10",
                highlight && "border-blue-500/30 bg-blue-50/40 dark:border-blue-500/30 dark:bg-blue-900/10"
            )}
        >
            {/* Hover Glow Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(56, 189, 248, 0.1),
              transparent 80%
            )
          `,
                }}
            />

            <div className={cn(
                "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 shadow-inner dark:from-white/10 dark:to-white/5 dark:text-white dark:shadow-none",
                highlight && "from-blue-50 to-blue-100 text-blue-600 dark:from-blue-900/30 dark:to-blue-900/10 dark:text-blue-400"
            )}>
                <Icon size={24} className="transition-transform duration-300 group-hover:scale-110" />
            </div>

            <div className="relative z-10 flex-1 min-w-0">
                <h3 className="font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                    {title}
                </h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    {description}
                </p>
            </div>

            <div className="flex shrink-0 items-center justify-center text-gray-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 dark:text-gray-500">
                <ArrowUpRight size={20} />
            </div>
        </motion.a>
    );
}
