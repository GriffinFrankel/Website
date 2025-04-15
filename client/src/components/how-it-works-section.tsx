import { motion } from "framer-motion";
import { fadeIn, staggerContainer, fadeInUp } from "@/lib/animations";
import { Check, Plug, UserRound, DollarSign, Cpu, BrainCircuit, Code, Zap, Server, ArrowDownToLine } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "AI-Powered Integration",
      description: "Our smart API connects seamlessly with your ticketing platform, offering Blowout Protection as a premium add-on during checkout.",
      icon: Plug,
      text: "Intelligent API implementation"
    },
    {
      number: 2,
      title: "Fan Experience",
      description: "Fans pay a small premium for Blowout Protection. If their game ends in a blowout by our pre-defined criteria, they receive a 50% rebate.",
      icon: UserRound,
      text: "Automated fan rebates"
    },
    {
      number: 3,
      title: "Revenue Analytics",
      description: "Platforms earn a percentage of every Blowout Protection add-on sold, with real-time analytics to maximize your revenue stream.",
      icon: DollarSign,
      text: "Data-driven profit center"
    }
  ];

  return (
    <section id="how-it-works" className="relative py-20 overflow-hidden">
      {/* Tech-inspired background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] to-[#111827]"></div>
      
      {/* Digital circuit pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0djItMmgtMnYtMmgydi0yaC0ydi0yaDJ2LTJoLTJ2LTJoMnYtMmgtMnYtMmgydi0yaC0ydi0yaC0ydjJoLTJ2LTJoLTJ2Mmh0di0yaC0ydjJoLTJ2Mmgydi0yaC0ydjJoLTJ2MmgydjJoLTJ2MmgydjJoLTJ2MmgydjJoLTJ2Mmgydj0yaDJ2LTJoMnYyaDJ2LTJoMnYtaC0ydi0yaDJ2LTJoLTJ2LTJoMnpNMiAyaDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      {/* Accent glows */}
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
      </div>
      
      {/* Content area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="inline-flex items-center justify-center mb-3 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
            <span className="text-cyan-400 text-xs font-medium tracking-wider uppercase">Technology Ecosystem</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blowout Protection</span> Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A seamless integration powered by machine learning and advanced algorithms
          </p>
        </motion.div>
        
        {/* Terminal-style container */}
        <div className="mb-20 max-w-5xl mx-auto">
          <div className="bg-[#0a101f]/90 backdrop-blur-sm rounded-xl border border-cyan-500/20 shadow-[0_0_30px_rgba(8,145,178,0.1)] overflow-hidden">
            {/* Terminal top bar */}
            <div className="h-8 w-full bg-[#111827]/90 flex items-center px-4 border-b border-cyan-500/10">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <div className="text-xs text-cyan-500/70 ml-4 font-mono">truetix_protocol.ts</div>
            </div>
            
            {/* Step cards */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {steps.map((step, index) => (
                  <motion.div 
                    key={step.number}
                    className="relative bg-[#0D1117]/80 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/10 shadow-lg flex flex-col"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.15,
                      ease: "easeOut" 
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {/* Tech corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-[1px] bg-cyan-500/30"></div>
                    <div className="absolute top-0 left-0 w-[1px] h-8 bg-cyan-500/30"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-cyan-500/30"></div>
                    <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-cyan-500/30"></div>
                    
                    {/* Step number with tech styling */}
                    <div className="flex items-center justify-center mb-6 relative">
                      <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xl shadow-[0_0_15px_rgba(8,145,178,0.2)]">
                        {step.number}
                      </div>
                    </div>

                    {/* Step content */}
                    <h3 className="text-xl font-bold mb-4 text-center">{step.title}</h3>
                    <p className="text-gray-300 mb-6 text-center flex-grow">
                      {step.description}
                    </p>
                    
                    {/* Tech icon footer */}
                    <div className="mt-auto flex items-center justify-center text-cyan-400 bg-cyan-500/5 py-2 px-4 rounded-full border border-cyan-500/20">
                      <div className="mr-2">
                        {step.number === 1 && <Code size={18} />}
                        {step.number === 2 && <BrainCircuit size={18} />}
                        {step.number === 3 && <Server size={18} />}
                      </div>
                      <span className="font-medium text-sm">{step.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Process flow diagram */}
        <motion.div 
          className="mb-20 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-cyan-500/20 -translate-y-1/2 z-0"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="w-full md:w-1/4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(8,145,178,0.2)]">
                <Cpu className="w-7 h-7 text-cyan-400" />
              </div>
              <h4 className="font-bold text-center mb-2">Data Processing</h4>
              <p className="text-gray-400 text-sm text-center">Game data analyzed in real-time</p>
            </div>
            
            <div className="hidden md:block">
              <ArrowDownToLine className="w-8 h-8 text-cyan-500/40 rotate-[-90deg]" />
            </div>
            
            <div className="w-full md:w-1/4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(8,145,178,0.2)]">
                <BrainCircuit className="w-7 h-7 text-cyan-400" />
              </div>
              <h4 className="font-bold text-center mb-2">AI Analysis</h4>
              <p className="text-gray-400 text-sm text-center">Algorithms detect blowout criteria</p>
            </div>
            
            <div className="hidden md:block">
              <ArrowDownToLine className="w-8 h-8 text-cyan-500/40 rotate-[-90deg]" />
            </div>
            
            <div className="w-full md:w-1/4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(8,145,178,0.2)]">
                <Zap className="w-7 h-7 text-cyan-400" />
              </div>
              <h4 className="font-bold text-center mb-2">Automated Rebates</h4>
              <p className="text-gray-400 text-sm text-center">Secure and instant payouts to fans</p>
            </div>
          </div>
        </motion.div>

        {/* Features grid */}
        <motion.div 
          className="mb-10 bg-[#0a101f]/80 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/10 shadow-[0_8px_30px_rgba(8,145,178,0.1)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4">Advanced Features</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>
            
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <Check className="text-cyan-400 w-6 h-6" />
              </div>
              <h4 className="font-medium mb-2">Real-Time Notifications</h4>
              <p className="text-gray-400 text-sm">Fans receive immediate alerts via our mobile-optimized system</p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <Check className="text-cyan-400 w-6 h-6" />
              </div>
              <h4 className="font-medium mb-2">Blockchain-Secured Rebates</h4>
              <p className="text-gray-400 text-sm">Transparent and immutable transaction records for all payouts</p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <Check className="text-cyan-400 w-6 h-6" />
              </div>
              <h4 className="font-medium mb-2">Serverless Architecture</h4>
              <p className="text-gray-400 text-sm">Cloud-native infrastructure that scales automatically with demand</p>
            </div>
          </div>
          
          {/* Tech spec footer */}
          <div className="mt-10 pt-6 border-t border-cyan-500/10 flex flex-wrap justify-center gap-4">
            <span className="px-3 py-1 bg-cyan-500/5 rounded-full text-xs text-cyan-400 border border-cyan-500/20">256-bit Encryption</span>
            <span className="px-3 py-1 bg-cyan-500/5 rounded-full text-xs text-cyan-400 border border-cyan-500/20">RESTful API</span>
            <span className="px-3 py-1 bg-cyan-500/5 rounded-full text-xs text-cyan-400 border border-cyan-500/20">99.9% Uptime</span>
            <span className="px-3 py-1 bg-cyan-500/5 rounded-full text-xs text-cyan-400 border border-cyan-500/20">ML-Powered</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}