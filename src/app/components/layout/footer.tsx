
export default function Footer(){

    return(
        <footer className="border-t border-neutral-800">
            <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-neutral-400">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify.between">
                    <span>Copyrith {new Date().getFullYear()} Carolina Alcaraz David</span>
                    <div className="flex gap-4">
                        <a href="https://github.com/CaroAd23"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors"
                        >GitHub
                        </a>
                        <a href="https://github.com/CaroAd23"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors"
                        >LinkedIn
                        </a>
                        <a href="https://github.com/CaroAd23"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors"
                        >Email
                        </a>
                    
                       
                    </div>
                </div>
                <p className="mt-4 text-xs text-neutral-500">Built with Next.js & Tailwind CSS</p>
            </div>
        </footer>
    )

    
}