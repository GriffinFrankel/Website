import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Check, Plug, UserRound, DollarSign, Code, BrainCircuit, Server } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "AI-Powered Integration",
      description: "Our smart API connects seamlessly with your ticketing platform, offering Blowout Protection as a premium add-on during checkout.",
      icon: <Code className="w-5 h-5" />,
      text: "Intelligent API implementation"
    },
    {
      number: 2,
      title: "Fan Experience",
      description: "Fans pay a small premium for Blowout Protection. If their game ends in a blowout by our pre-defined criteria, they receive a 50% rebate.",
      icon: <BrainCircuit className="w-5 h-5" />,
      text: "Automated fan rebates"
    },
    {
      number: 3,
      title: "Revenue Analytics",
      description: "Platforms earn a percentage of every Blowout Protection add-on sold, with real-time analytics to maximize your revenue stream.",
      icon: <Server className="w-5 h-5" />,
      text: "Data-driven profit center"
    }
  ];

  return (
    <section id="how-it-works" className="relative overflow-hidden py-24">
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
            opacity: [0.2, 0.3, 0.2]
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
            opacity: [0.2, 0.15, 0.2]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile title (shown only on mobile) */}
        <div className="md:hidden text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            How <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blowout Protection</span> Works
          </h2>
          <p className="text-lg text-gray-300">
            A seamless integration powered by machine learning and advanced algorithms
          </p>
        </div>
        
        {/* Desktop view */}
        <div className="hidden md:block">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-5">
              <div className="sticky top-32">
                <div className="inline-flex items-center justify-center mb-3 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
                  <span className="text-cyan-400 text-xs font-medium tracking-wider uppercase">Technology Ecosystem</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  How <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blowout Protection</span> Works
                </h2>
                
                <p className="text-xl text-gray-300 mb-10">
                  A seamless integration powered by machine learning and advanced algorithms
                </p>
                
                {/* Step indicators */}
                <div className="mt-12 space-y-8 border-l-2 border-l-cyan-500/20 pl-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mr-4 -ml-11 border border-cyan-500/40">
                        <span className="text-lg font-bold text-cyan-400">{step.number}</span>
                      </div>
                      <div>
                        <p className="font-bold text-white">{step.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Decorative elements */}
                <div className="mt-16">
                  <div className="w-full h-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/0"></div>
                </div>
              </div>
            </div>
            <div className="col-span-7 pl-10">
              <div className="space-y-[60vh] py-16">
                {/* Step cards */}
                {steps.map((step, index) => (
                  <motion.div 
                    key={step.number}
                    id={`step-${step.number}`}
                    className="bg-[#0a101f]/90 backdrop-blur-sm rounded-xl border border-cyan-500/20 shadow-[0_0_30px_rgba(8,145,178,0.1)] overflow-hidden relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-[1px] bg-cyan-500/30"></div>
                    <div className="absolute top-0 left-0 w-[1px] h-8 bg-cyan-500/30"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-cyan-500/30"></div>
                    <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-cyan-500/30"></div>
                    
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xl shadow-[0_0_15px_rgba(8,145,178,0.2)] mr-4">
                          {step.number}
                        </div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                      
                      <p className="text-gray-300 mb-8 pl-[4.5rem]">
                        {step.description}
                      </p>
                      
                      <div className="flex items-center text-cyan-400 bg-cyan-500/5 py-3 px-5 rounded-lg border border-cyan-500/20 w-fit ml-[4.5rem]">
                        <span className="mr-2">{step.icon}</span>
                        <span className="font-medium">{step.text}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile steps */}
        <div className="md:hidden space-y-16">
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              id={`step-${step.number}-mobile`}
              className="bg-[#0a101f]/90 backdrop-blur-sm rounded-xl border border-cyan-500/20 shadow-[0_0_30px_rgba(8,145,178,0.1)] overflow-hidden relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-[1px] bg-cyan-500/30"></div>
              <div className="absolute top-0 left-0 w-[1px] h-6 bg-cyan-500/30"></div>
              <div className="absolute bottom-0 right-0 w-6 h-[1px] bg-cyan-500/30"></div>
              <div className="absolute bottom-0 right-0 w-[1px] h-6 bg-cyan-500/30"></div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold shadow-[0_0_15px_rgba(8,145,178,0.2)] mr-3">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">
                  {step.description}
                </p>
                
                <div className="flex items-center text-cyan-400 bg-cyan-500/5 py-2 px-4 rounded-lg border border-cyan-500/20 w-fit">
                  <span className="mr-2">{step.icon}</span>
                  <span className="font-medium text-sm">{step.text}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Features grid */}
        <motion.div 
          className="mt-32 mb-10 bg-[#0a101f]/80 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/10 shadow-[0_8px_30px_rgba(8,145,178,0.1)]"
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