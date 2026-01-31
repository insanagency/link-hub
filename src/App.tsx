import { BentoGrid, BentoItem } from "./components/BentoGrid";
import { ProfileCard } from "./components/ProfileCard";
import { BentoLinkCard } from "./components/BentoLinkCard";
import { Background } from "./components/Background";
import { siteConfig } from "./config";
import { Palette, Globe, FolderGit2 } from "lucide-react";

function App() {
    return (
        <div className="min-h-screen w-full bg-black px-4 py-6 md:py-16 font-sans text-white selection:bg-white/20">
            <Background />

            <main className="relative z-10 w-full max-w-[1200px] mx-auto">
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
            </main>
        </div>
    );
}

export default App;
