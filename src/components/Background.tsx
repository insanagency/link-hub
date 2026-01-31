import { motion } from "framer-motion";

export function Background() {
    return (
        <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-black">
            {/* Premium Gradient Mesh */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0"
            >
                <div className="absolute top-[-10%] left-[-10%] h-[70vh] w-[70vw] rounded-full bg-blue-600/10 blur-[150px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] h-[70vh] w-[70vw] rounded-full bg-purple-600/10 blur-[150px] animate-pulse delay-700" />
                <div className="absolute top-[20%] right-[10%] h-[50vh] w-[40vw] rounded-full bg-indigo-600/5 blur-[120px] animate-bounce duration-[15s]" />
            </motion.div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Noise Texture */}
            <div className="noise-bg" />
        </div>
    );
}
