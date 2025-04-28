import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import truetixLogo from "../assets/truetix-logo.png";
import { Menu, X, Code, Cpu, ShieldCheck, BarChart3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  const navItems = [
    { name: "How It Works", href: "#how-it-works", icon: <Cpu className="w-4 h-4" /> },
    { name: "Partner Benefits", href: "#benefits", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "FAQ", href: "#faq", icon: <Code className="w-4 h-4" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a nav link
  const handleNavClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0D1117]/80 backdrop-blur-xl border-b border-cyan-500/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <div className={`absolute inset-0 bg-cyan-500/20 rounded-full blur-md transition-opacity ${isScrolled ? 'opacity-50' : 'opacity-30'} group-hover:opacity-70`}></div>
                <img 
                  src={truetixLogo} 
                  alt="TrueTIX Logo" 
                  className="h-10 w-auto relative z-10"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight relative">
                True<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">TIX</span>
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation - with tech-inspired design */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                onClick={handleNavClick}
              >
                <span className="text-cyan-500/70 group-hover:text-cyan-400 transition-colors">{item.icon}</span>
                <span>{item.name}</span>
                <span className="block h-[1px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-300 absolute bottom-0 left-0"></span>
              </a>
            ))}
            <Button 
              asChild
              className="bg-cyan-600/30 hover:bg-cyan-500/40 text-white font-medium border border-cyan-500/30 shadow-[0_0_10px_rgba(8,145,178,0.2)] backdrop-blur-sm"
            >
              <a href="#contact" onClick={handleNavClick} className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Book a Call</span>
              </a>
            </Button>
          </nav>
          
          {/* Mobile Menu Button - upgraded with tech aesthetic */}
          <div className="md:hidden">
            <button 
              className="relative text-cyan-400 focus:outline-none transition-colors p-2 rounded-md bg-black/20 backdrop-blur-sm border border-cyan-500/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={isMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation - with futuristic dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-2 pt-2 pb-4 space-y-1 bg-[#0D1117]/90 backdrop-blur-xl rounded-lg mt-2 border border-cyan-500/10 shadow-[0_5px_15px_rgba(8,145,178,0.1)]">
                {navItems.map((item, index) => (
                  <motion.a 
                    key={index}
                    href={item.href} 
                    className="flex items-center gap-3 px-3 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/5 rounded-md transition-colors border-l border-transparent hover:border-cyan-500/20"
                    onClick={handleNavClick}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="text-cyan-500">{item.icon}</span>
                    <span>{item.name}</span>
                  </motion.a>
                ))}
                <motion.a 
                  href="#contact" 
                  className="flex items-center justify-center gap-2 px-3 py-3 bg-cyan-600/30 hover:bg-cyan-500/40 text-white font-medium rounded-md mt-4 border border-cyan-500/20 shadow-[0_0_10px_rgba(8,145,178,0.2)] backdrop-blur-sm transition-all duration-300"
                  onClick={handleNavClick}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.05 }}
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Book a Call</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
