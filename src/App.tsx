import { motion } from "framer-motion";
import { BentoGrid, BentoItem } from "./components/BentoGrid";
import { ProfileCard } from "./components/ProfileCard";
import { BentoLinkCard } from "./components/BentoLinkCard";
import { Background } from "./components/Background";
import { siteConfig } from "./config";
import { Palette, Globe, FolderGit2, Copyright } from "lucide-react";

function App() {
    return (
        <div className="min-h-screen w-full bg-black px-4 py-8 md:py-24 font-sans text-white selection:bg-blue-500/30">
            <Background />

            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-[1200px] mx-auto space-y-12"
            >
                <BentoGrid>
                    {/* Main Profile - Spans 2 cols */}
                    <BentoItem colSpan={2} rowSpan={2}>
                        <ProfileCard />
                    </BentoItem>

                    {/* Vibe Coding - Featured Link */}
                    <BentoItem colSpan={1} rowSpan={2}>
                        <BentoLinkCard
                            {...siteConfig.links[0]}
                            className="h-full"
                            isLarge
                        />
                    </BentoItem>

                    {/* Secondary Links */}
                    <BentoItem colSpan={1}>
                        <BentoLinkCard
                            title={siteConfig.links[1].title}
                            description={siteConfig.links[1].description}
                            url={siteConfig.links[1].url}
                            icon={Palette}
                        />
                    </BentoItem>

                    <BentoItem colSpan={1}>
                        <BentoLinkCard
                            title={siteConfig.links[2].title}
                            description={siteConfig.links[2].description}
                            url={siteConfig.links[2].url}
                            icon={Globe}
                        />
                    </BentoItem>

                    <BentoItem colSpan={1}>
                        <BentoLinkCard
                            title="Portfolio"
                            description="Eng sara ishlarim jamlanmasi."
                            url="#"
                            icon={FolderGit2}
                        />
                    </BentoItem>
                </BentoGrid>

                {/* Premium Footer */}
                <footer className="pt-8 pb-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <Copyright size={14} />
                        <span>{new Date().getFullYear()} {siteConfig.profile.name}. All rights reserved.</span>
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </footer>
            </motion.main>
        </div>
    );
}

export default App;
