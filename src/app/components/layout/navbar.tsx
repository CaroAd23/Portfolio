"use client";

import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X} from "lucide-react"

const navBarItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills"  },
  { name: "Projects", href: "#projects"  },
  { name: "Contact", href: "#contact" },
];
export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
              <span className="mt-1 block h-0.5 w-full origin-left scale-x-0 bg-sky-400/80 transition-transform duration-300 group-hover:scale-x-100" />
            </li>
          ))}
        </ul>
        <button onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          >
            {isOpen ? <X size={24}/> : <Menu size={24}/>}

        </button>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-neutral-900/95 backdrop-blur border-t border-blue-400/20"
        >
          <ul className="flex flex-col items-center gap-6 py-6">
            {navBarItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-300 hover:text-sky-400 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
