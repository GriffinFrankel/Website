import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black">
        <img 
          src="https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
          alt="Baseball stadium packed with fans" 
          className="object-cover w-full h-full opacity-40" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(26,26,26,0.8)]"></div>
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            variants={fadeInUp}
          >
            The Future of <span className="bg-gradient-to-r from-[#38F902] to-[#21c100] bg-clip-text text-transparent">Fan Engagement</span> Is Here
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8"
            variants={fadeInUp}
            custom={1}
          >
            Offer fans 50% rebates on blowout games. Drive ticket sales, build loyalty, and grow your revenue.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
            custom={2}
          >
            <Button 
              asChild
              className="bg-[#38F902] hover:bg-[#21c100] text-black font-semibold py-3 px-8 text-lg h-auto shadow-[0_0_15px_rgba(56,249,2,0.5)]"
            >
              <a href="#contact">Join Our MLB Pilot</a>
            </Button>
            <Button 
              variant="outline" 
              asChild
              className="border-white hover:border-[#38F902] hover:text-[#38F902] py-3 px-8 text-lg h-auto"
            >
              <a href="#how-it-works">Learn More</a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#what-is" className="text-white opacity-80 hover:opacity-100">
          <i className="ri-arrow-down-line text-3xl"></i>
        </a>
      </div>
    </section>
  );
}
