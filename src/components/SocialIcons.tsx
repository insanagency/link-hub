import { siteConfig } from "../config";
import { Button } from "@/components/ui/button";

export function SocialIcons() {
    return (
        <div className="flex items-center justify-center gap-2">
            {siteConfig.socials.map((social) => (
                <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="rounded-full hover:bg-accent hover:text-accent-foreground"
                >
                    <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                    >
                        <social.icon size={20} />
                    </a>
                </Button>
            ))}
        </div>
    );
}
