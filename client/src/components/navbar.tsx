import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import truetixLogo from "../assets/truetix-logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  const navItems = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Partner Benefits", href: "#benefits" }
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
    <header className={`fixed w-full z-50 bg-[#121212]/90 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'border-b border-gray-800' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <img 
                src={truetixLogo} 
                alt="TrueTIX Logo" 
                className="h-10 w-auto"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="text-gray-300 hover:text-[#38F902] transition-colors"
                onClick={handleNavClick}
              >
                {item.name}
              </a>
            ))}
            <Button 
              asChild
              className="bg-[#38F902] hover:bg-[#21c100] text-black font-medium shadow-[0_0_10px_rgba(56,249,2,0.4)]"
            >
              <a href="#contact" onClick={handleNavClick}>Book a Call</a>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-[#2A2A2A] rounded-md"
                  onClick={handleNavClick}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="block px-3 py-2 bg-[#38F902] hover:bg-[#21c100] text-black font-medium rounded-md mt-4 shadow-[0_0_10px_rgba(56,249,2,0.4)]"
                onClick={handleNavClick}
              >
                Book a Call
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
