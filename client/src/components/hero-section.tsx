import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn } from "@/lib/animations";
import truetixLogo from "../assets/truetix-logo.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-32">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] to-[#0a0a0a]"></div>
      
      {/* Green accent glow */}
      <div className="absolute inset-0 bg-[#38F902]/5"></div>
      
      {/* Animated geometric shapes for modern tech aesthetic */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-[#38F902]/10 blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            y: [0, -20, 0] 
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#38F902]/5 blur-[100px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.15, 0.2],
            x: [0, 20, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-[#38F902]/5 blur-[80px]"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <motion.div
              className="relative w-48 h-48 mb-8 mt-4 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-[#38F902]/20 rounded-full blur-[40px] transform scale-75"></div>
              
              <motion.img 
                src={truetixLogo} 
                alt="TrueTIX Logo"
                className="w-full h-full object-contain relative z-10" 
                variants={scaleIn}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          </div>
          
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight"
              variants={fadeInUp}
            >
              The Future of <span className="bg-gradient-to-r from-[#38F902] to-[#21c100] bg-clip-text text-transparent">Fan Engagement</span> Is Here
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
              variants={fadeInUp}
              custom={1}
            >
              Offer fans 50% rebates on blowout games. Drive ticket sales, build loyalty, and grow your revenue with our innovative protection service.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-5 justify-center"
              variants={fadeInUp}
              custom={2}
            >
              <Button 
                asChild
                className="bg-[#38F902] hover:bg-[#21c100] text-black font-semibold py-3 px-8 text-lg h-auto shadow-[0_0_15px_rgba(56,249,2,0.5)] transition-all duration-300 rounded-md"
              >
                <a href="#contact">Join Our MLB Pilot</a>
              </Button>
              <Button 
                variant="outline" 
                asChild
                className="border-white hover:border-[#38F902] hover:text-[#38F902] py-3 px-8 text-lg h-auto transition-all duration-300 rounded-md"
              >
                <a href="#how-it-works">Learn More</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#what-is" className="text-[#38F902] opacity-80 hover:opacity-100 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
}
