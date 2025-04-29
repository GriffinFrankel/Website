import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";

export default function WhatIsSection() {
  return (
    <section id="what-is" className="py-20 relative">
      {/* Tech-inspired background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] to-[#111827]"></div>
      
      {/* Digital circuit pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0djItMmgtMnYtMmgydi0yaC0ydi0yaDJ2LTJoLTJ2LTJoMnYtMmgtMnYtMmgydi0yaC0ydi0yaC0ydjJoLTJ2LTJoLTJ2Mmh0di0yaC0ydjJoLTJ2Mmgydi0yaC0ydjJoLTJ2MmgydjJoLTJ2MmgydjJoLTJ2MmgydjJoLTJ2Mmgydj0yaDJ2LTJoMnYyaDJ2LTJoMnYtaC0ydi0yaDJ2LTJoLTJ2LTJoMnpNMiAyaDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blowout Protection</span>?
            </h2>
            <p className="text-xl text-gray-300">A revolutionary add-on that transforms the fan experience and drives ticket sales</p>
          </motion.div>

          <motion.div 
            className="bg-[#111827]/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-cyan-500/20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">The Fan Frustration Problem</h3>
                <p className="text-gray-300 mb-6">
                  Nothing's worse than paying full price for a ticket only to watch your team get blown out.
                  Fans leave disappointed, and they're less likely to return.
                </p>
                <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                <p className="text-gray-300 mb-6">
                  TrueTIX Blowout Protection offers fans a <span className="text-cyan-400 font-semibold">50% rebate</span> if the game they attend is a blowout
                  by our pre-defined blowout criteria.
                </p>
                <div className="flex gap-4 items-center">
                  <i className="ri-shield-check-line text-3xl text-cyan-400"></i>
                  <p className="font-semibold">Fans get value even when the game disappoints</p>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1471295253337-3ceaaedca402?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80" 
                  alt="Disappointed baseball fans at a blowout game" 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 to-transparent md:hidden"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

