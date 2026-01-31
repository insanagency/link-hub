export function Background() {
    return (
        <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-white dark:bg-[#0a0a0a]">
            {/* Gradient Blobs */}
            <div className="absolute -left-[10%] -top-[10%] h-[50vw] w-[50vw] rounded-full bg-purple-500/20 blur-[120px] filter animate-blob mix-blend-multiply dark:bg-purple-900/20 dark:mix-blend-screen duration-[10s]" />
            <div className="absolute -right-[10%] -top-[10%] animation-delay-2000 h-[50vw] w-[50vw] rounded-full bg-blue-500/20 blur-[120px] filter animate-blob mix-blend-multiply dark:bg-indigo-900/20 dark:mix-blend-screen duration-[12s]" />
            <div className="absolute -bottom-[20%] left-[20%] animation-delay-4000 h-[60vw] w-[60vw] rounded-full bg-pink-500/20 blur-[120px] filter animate-blob mix-blend-multiply dark:bg-pink-900/20 dark:mix-blend-screen duration-[15s]" />

            {/* Noise Texture Overlay for grain effect */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
            />
        </div>
    );
}
