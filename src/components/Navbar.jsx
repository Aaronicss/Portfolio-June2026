export default function NavBar() {
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-black backdrop-blur-md border-b border-gray-200">
            <h1 className="text-xl font-bold text-white">Aaron Lazaro</h1>
            <div className="flex items-center">
                <a href="#about" className="text-white hover:text-blue-600 transition-colors">About</a>
                <div className="mx-4 h-4 w-px bg-white"></div>
                <a href="#projects" className="text-white hover:text-blue-600 transition-colors">Projects</a>
                <div className="mx-4 h-4 w-px bg-white"></div>
                <a href="#contact" className="text-white hover:text-blue-600 transition-colors">Contact</a>
            </div>
        </nav>
    )
}