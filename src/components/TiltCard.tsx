import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "../lib/utils";

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
}

export function TiltCard({ children, className, onClick, href }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Ultra-smooth spring physics
    const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

    // Subtle tilt rotation
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        const normalizedX = (clientX - left) / width - 0.5;
        const normalizedY = (clientY - top) / height - 0.5;

        x.set(normalizedX);
        y.set(normalizedY);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const Component = href ? motion.a : motion.div;
    const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

    return (
        <Component
            // @ts-ignore
            ref={ref}
            {...props}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={cn(
                "relative group h-full rounded-3xl border border-white/10 bg-glass backdrop-blur-3xl transition-all duration-700 hover:scale-[1.01] hover:border-white/20 premium-shadow overflow-hidden",
                className
            )}
        >
            <div
                style={{ transform: "translateZ(30px)" }}
                className="relative z-10 w-full h-full"
            >
                {children}
            </div>

            {/* Premium Glare Effect */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              1000px circle at ${useTransform(mouseX, [-0.5, 0.5], ["-50%", "150%"])} ${useTransform(mouseY, [-0.5, 0.5], ["-50%", "150%"])},
              rgba(255,255,255, 0.08),
              transparent 70%
            )
          `,
                }}
            />
        </Component>
    );
}
