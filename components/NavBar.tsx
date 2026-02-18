"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/", bg: "bg-nav-home-bg", text: "text-nav-home-text" },
    { name: "Philosophy", href: "#philosophy", bg: "bg-nav-phil-bg", text: "text-nav-phil-text" },
    { name: "Vision", href: "#vision", bg: "bg-nav-vis-bg", text: "text-nav-vis-text" },
    { name: "Work", href: "#work", bg: "bg-nav-work-bg", text: "text-nav-work-text" },
];

export function NavBar() {
    return (
        <div className="fixed bottom-12 left-0 right-0 z-50 flex justify-center items-center gap-[22px] px-4 pointer-events-none">
            <div className="flex gap-[22px] pointer-events-auto">
                {navItems.map((item) => (
                    <Link key={item.name} href={item.href}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={cn(
                                "px-[16px] py-[10px] rounded-[23px] font-semibold text-[16px] tracking-[-1.28px] uppercase transition-colors shadow-sm",
                                item.bg,
                                item.text
                            )}
                        >
                            {item.name}
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
