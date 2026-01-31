import { motion } from "framer-motion";
import { siteConfig } from "../config";
import { SocialIcons } from "./SocialIcons";

export function Header() {
    return (
        <div className="flex flex-col items-center space-y-6 text-center">
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="relative"
            >
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 opacity-70 blur-md dark:opacity-50" />
                <img
                    src={siteConfig.profile.avatar}
                    alt={siteConfig.profile.name}
                    className="relative h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl dark:border-[#0a0a0a]"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
            >
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
                    {siteConfig.profile.name}
                </h1>
                <p className="text-base font-medium text-blue-600 dark:text-blue-400">
                    {siteConfig.profile.title}
                </p>
                <p className="mx-auto max-w-xs text-sm text-gray-600 dark:text-gray-400">
                    {siteConfig.profile.bio}
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <SocialIcons />
            </motion.div>
        </div>
    );
}
