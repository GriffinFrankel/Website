import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { CheckIcon } from "lucide-react";

export default function WhatIsSection() {
  const benefits = [
    "Fans get value even when the game disappoints",
    "Higher fan satisfaction and loyalty",
    "Increased ticket sales through premium add-on"
  ];

  return (
    <section id="what-is" className="py-20 relative">
      {/* Tech-inspired background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] to-[#111827]"></div>
      
      {/* Digital circuit pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0djItMmgtMnYtMmgydi0yaC0ydi0yaDJ2LTJoLTJ2LTJoMnYtMmgtMnYtMmgydi0yaC0ydi0yaC0ydjJoLTJ2LTJoLTJ2Mmh0di0yaC0ydjJoLTJ2Mmgydi0yaC0ydjJoLTJ2MmgydjJoLTJ2MmgydjJoLTJ2MmgydjJoLTJ2Mmgydj0yaDJ2LTJoMnYyaDJ2LTJoMnYtaC0ydi0yaDJ2LTJoLTJ2LTJoMnpNMiAyaDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-12"
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
          variants={fadeIn}
        >
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1471295253337-3ceaaedca402?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80" 
                alt="Disappointed baseball fans at a blowout game" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#1A1A1A]/90 to-transparent md:hidden"></div>
            </div>
            
            <motion.div 
              className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2"
              variants={fadeInUp}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                The <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Fan Frustration</span> Problem
              </h3>
              <p className="text-gray-300 mb-6">
                Nothing's worse than paying full price for a ticket only to watch your team get blown out.
                Fans leave disappointed, and they're less likely to return.
              </p>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Solution</span>
              </h3>
              <p className="text-gray-300 mb-6">
                TrueTIX Blowout Protection offers fans a 50% rebate if the game they attend is a blowout
                (defined as a 5+ run difference for our MLB pilot program).
              </p>
              
              <ul className="space-y-4 mb-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="text-cyan-400 mr-3 h-5 w-5 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

