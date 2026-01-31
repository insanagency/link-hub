import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-[minmax(180px,auto)]",
                className
            )}
        >
            {children}
        </div>
    );
}

interface BentoItemProps {
    children: ReactNode;
    className?: string;
    colSpan?: 1 | 2 | 3;
    rowSpan?: 1 | 2;
}

export function BentoItem({ children, className, colSpan = 1, rowSpan = 1 }: BentoItemProps) {
    const colSpans = {
        1: "md:col-span-1",
        2: "md:col-span-2",
        3: "md:col-span-3",
    };

    const rowSpans = {
        1: "md:row-span-1",
        2: "md:row-span-2",
    };

    return (
        <div className={cn(colSpans[colSpan], rowSpans[rowSpan], className)}>
            {children}
        </div>
    );
}
