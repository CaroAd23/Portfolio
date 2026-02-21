"use client";

import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

const navBarItems = [
  { name: "home", href: "/" },
  { name: "about", href: "#about", id: "about" },
  { name: "hero", href: "/src/app/components/sections/hero.tsx" },
  { name: "skills", href: "/src/app/components/sections/skills.tsx" },
  { name: "projects", href: "/src/app/components/sections/projects.tsx" },
];
export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 20);
    });
  }, [scrollY]);
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-neutral-900/80 backdrop-blur border-b border-blue-400"
            : "bg-transparent"
        }
      `}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <motion.div
          whileHover={{ y: -1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Link
            href={"/"}
            className="text-lg font-semibold tracking-tight
      text-white
      transition-colors duration-300
      hover:text-blue-400
      hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]"
          >
            <span className="text-blue-400">Caro</span>AlDev
          </Link>
        </motion.div>
        <ul className="hidden gap-8 md:flex items-center">
          {navBarItems.map((item) => (
            <li key={item.name} className="group">
              <Link
                href={item.href}
                className="flex flex-col items-start text-sm text-neutral-300 transition-colors duration-300 hover:text-sky-400"
              >
                {item.name}
              </Link>
              <span className="mt-1 block h-[2px] w-full origin-left scale-x-0 bg-sky-400/80 transition-transform duration-300 group-hover:scale-x-100" />
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
