import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { CreditCard, AlertCircle, TrendingUp, ShieldCheck, BadgePercent } from "lucide-react";

export default function WhatIsSection() {
  return (
    <section id="what-is" className="py-20 relative">
      {/* Tech-inspired background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] to-[#111827]"></div>
      
      {/* Digital circuit pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0djItMmgtMnYtMmgydi0yaC0ydi0yaDJ2LTJoLTJ2LTJoMnYtMmgtMnYtMmgydi0yaC0ydi0yaC0ydjJoLTJ2LTJoLTJ2Mmgtdi0yaC0ydjJoLTJ2Mmgydi0yaC0ydjJoLTJ2MmgydjJoLTJ2MmgydjJoLTJ2MmgydjJoLTJ2Mmgydj0yaDJ2LTJoMnYyaDJ2LTJoMnYtaC0ydi0yaDJ2LTJoLTJ2LTJoMnpNMiAyaDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      {/* Accent glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-cyan-500/5 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="inline-flex items-center justify-center mb-3 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
              <span className="text-cyan-400 text-xs font-medium tracking-wider uppercase">Revolutionary Technology</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blowout Protection</span>?
            </h2>
            <p className="text-xl text-gray-300">A data-driven solution that transforms the fan experience and drives revenue</p>
          </motion.div>

          <motion.div 
            className="bg-[#0a101f]/80 rounded-2xl overflow-hidden shadow-xl border border-cyan-500/10 backdrop-blur-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center relative">
                {/* Tech line decorations */}
                <div className="absolute top-0 left-0 w-12 h-[1px] bg-cyan-500/30"></div>
                <div className="absolute top-0 left-0 w-[1px] h-12 bg-cyan-500/30"></div>
                <div className="absolute bottom-0 right-0 w-12 h-[1px] bg-cyan-500/30"></div>
                <div className="absolute bottom-0 right-0 w-[1px] h-12 bg-cyan-500/30"></div>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold">The Fan Frustration Problem</h3>
                </div>
                <p className="text-gray-300 mb-8 pl-12 border-l border-red-500/20">
                  Nothing's worse than paying full price for a ticket only to watch your team get blown out.
                  Fans leave disappointed, and they're less likely to return.
                </p>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Solution</h3>
                </div>
                <p className="text-gray-300 mb-8 pl-12 border-l border-cyan-500/20">
                  TrueTIX Blowout Protection offers fans a <span className="text-cyan-400 font-semibold">50% rebate</span> if the game they attend is a blowout
                  (defined as a 5+ run difference for our MLB pilot program).
                </p>
                
                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex gap-4 items-center p-3 rounded-lg bg-gradient-to-r from-cyan-500/5 to-transparent border-l-2 border-cyan-500">
                    <ShieldCheck className="w-6 h-6 text-cyan-400" />
                    <p className="font-medium">Fans get value even when the game disappoints</p>
                  </div>
                  <div className="flex gap-4 items-center p-3 rounded-lg bg-gradient-to-r from-cyan-500/5 to-transparent border-l-2 border-cyan-500">
                    <CreditCard className="w-6 h-6 text-cyan-400" />
                    <p className="font-medium">Venues drive increased ticket sales through protection offer</p>
                  </div>
                  <div className="flex gap-4 items-center p-3 rounded-lg bg-gradient-to-r from-cyan-500/5 to-transparent border-l-2 border-cyan-500">
                    <BadgePercent className="w-6 h-6 text-cyan-400" />
                    <p className="font-medium">Data-driven pricing based on game analytics</p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-64 md:h-auto overflow-hidden">
                {/* Stylized overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-blue-600/10 mix-blend-overlay"></div>
                
                {/* Data visualization effect */}
                <div className="absolute inset-0 bg-[#0D1117]/50 z-10">
                  <div className="absolute top-0 left-0 w-full h-full grid grid-cols-12 gap-[1px] opacity-20">
                    {Array(12).fill(0).map((_, colIndex) => (
                      Array(20).fill(0).map((_, rowIndex) => (
                        <motion.div 
                          key={`${colIndex}-${rowIndex}`}
                          className="bg-cyan-400"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: Math.random() > 0.5 ? 0.4 : 0.1 }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            repeatType: "reverse",
                            delay: rowIndex * 0.05 + colIndex * 0.02 
                          }}
                        />
                      ))
                    ))}
                  </div>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1471295253337-3ceaaedca402?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80" 
                  alt="Disappointed baseball fans at a blowout game" 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a101f]/90 to-[#0a101f]/70"></div>
                
                {/* Tech overlay elements */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <div className="w-full h-20 bg-gradient-to-r from-cyan-500/10 to-transparent backdrop-blur-sm border border-cyan-500/20 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-cyan-400 text-xs">RISK ANALYSIS</span>
                      <span className="text-xs text-cyan-400">LIVE</span>
                    </div>
                    <div className="w-full h-2 bg-cyan-950 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "65%" }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-400">Blowout probability</span>
                      <span className="text-xs font-medium text-cyan-400">65%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
