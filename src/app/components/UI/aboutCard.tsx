"use client";

import { motion } from "framer-motion";
import { div } from "framer-motion/client";

import { Layout, Server, Layers, TrendingUp } from "lucide-react";

const items = [
  {
    label: "Frontend & UI",
    icon: Layout,
  },
  {
    label: "Backend & API REST",
    icon: Server,
  },
  {
    label: "Principios SOLID",
    icon: Layers,
  },
  {
    label: "Mejora continua",
    icon: TrendingUp,
  },
];

export default function AboutCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={i}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="group rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40"
          >
            <div className=" flex items-center gap-3">
                <Icon size={20}
                className=" text-blue-500 transition-colors duration-300 group-hover:text-blue-400"
                />
                <p className="text-sm text-neutral-300">
                    {item.label}
                </p>
                </div>
          </motion.div>
        );
      })}
    </div>
  );
}
