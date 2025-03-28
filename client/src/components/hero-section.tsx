import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-black">
        <img 
          src="https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
          alt="Baseball stadium packed with fans" 
          className="object-cover w-full h-full opacity-30" 
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.9)] to-[rgba(18,18,18,0.9)]"></div>
      
      {/* Animated geometric shapes for modern tech aesthetic */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#38F902]/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-[#38F902]/5 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.15, 0.2] 
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
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
          <div className="flex flex-col items-center mb-10">
            <motion.img 
              src="/images/truetix-logo.png" 
              alt="TrueTIX Logo"
              className="h-20 mb-6" 
              variants={scaleIn}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
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
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
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
