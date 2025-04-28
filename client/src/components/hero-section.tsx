import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn } from "@/lib/animations";
import truetixLogo from "../assets/truetix-logo.png";
import { Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-32">
      {/* Dark background with tech-inspired gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] to-[#0a0a0a]"></div>
      
      {/* Cyan/blue accent glow for tech feel */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 to-transparent"></div>
      
      {/* Digital circuit pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0djItMmgtMnYtMmgydi0yaC0ydi0yaDJ2LTJoLTJ2LTJoMnYtMmgtMnYtMmgydi0yaC0ydi0yaC0ydjJoLTJ2LTJoLTJ2Mmh0di0yaC0ydjJoLTJ2Mmgydi0yaC0ydjJoLTJ2MmgydjJoLTJ2MmgydjJoLTJ2MmgydjJoLTJ2Mmgydj0yaDJ2LTJoMnYyaDJ2LTJoMnYtaC0ydi0yaDJ2LTJoLTJ2LTJoMnpNMiAyaDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      {/* Animated geometric shapes for modern tech aesthetic */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[100px]"
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
          className="absolute bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px]"
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
          className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-[80px]"
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
              {/* Static glow effect behind logo */}
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-[40px] transform scale-75"></div>
              
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
              The Future of <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Fan Engagement</span> Is Here
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
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 text-lg h-auto shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300 rounded-md"
              >
                <a href="#contact" className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  <span>Join Our MLB Pilot</span>
                </a>
              </Button>
              <Button 
                variant="outline" 
                asChild
                className="border-cyan-700/50 bg-transparent text-white hover:bg-cyan-500/10 font-semibold py-3 px-8 text-lg h-auto shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300 rounded-md"
              >
                <a href="#how-it-works">Learn More</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Down arrow scroll indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <a href="#what-is" className="group flex flex-col items-center">
          <motion.div
            animate={{ 
              y: [0, 10, 0]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="text-cyan-400 group-hover:text-cyan-300 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </motion.div>
        </a>
      </div>
    </section>
  );
}