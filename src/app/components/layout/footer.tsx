import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-neutral-800 bg-neutral-950">
      
      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-400">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          {/* Left */}
          <div className="flex items-center gap-2 text-neutral-500">
            <FaRegCopyright className="text-xs" />
            <span>{new Date().getFullYear()} Carolina Alcaraz David</span>
          </div>

          {/* Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/CaroAd23"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              LinkedIn
            </a>

            <a
              href="mailto:your@email.com"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 border-t border-neutral-800 pt-6 text-xs text-neutral-600 flex justify-between items-center">
          <span>Built with Next.js & Tailwind CSS</span>
          <span className="text-neutral-700">Designed & Developed by Carolina</span>
        </div>

      </div>
    </footer>
  );
}