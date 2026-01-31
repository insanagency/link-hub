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

    // Smooth spring physics for tilt
    const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

    // Map mouse position to tilt rotation (clamped)
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        // Normalized coordinates (-0.5 to 0.5)
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
                "relative group h-full rounded-2xl border border-white/30 bg-black/40 backdrop-blur-3xl shadow-[0_0_15px_-5px_rgba(255,255,255,0.15)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.25)] hover:border-white/50 overflow-hidden",
                className
            )}
        >
            <div
                style={{ transform: "translateZ(20px)" }}
                className="relative z-10 w-full h-full"
            >
                {children}
            </div>

            {/* Dynamic Glare Effect */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              600px circle at ${useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"])} ${useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"])},
              rgba(255,255,255, 0.15),
              transparent 80%
            )
          `,
                }}
            />
        </Component>
    );
}
