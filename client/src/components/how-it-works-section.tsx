import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Check, Plug, UserRound, DollarSign, Cpu, BrainCircuit, Code, Zap, Server, ArrowDownToLine, ChevronDown } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function HowItWorksSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  
  // Fixed step observer that tracks which step is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === step1Ref.current) setCurrentStep(0);
          else if (entry.target === step2Ref.current) setCurrentStep(1);
          else if (entry.target === step3Ref.current) setCurrentStep(2);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (step1Ref.current) observer.observe(step1Ref.current);
    if (step2Ref.current) observer.observe(step2Ref.current);
    if (step3Ref.current) observer.observe(step3Ref.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const steps = [
    {
      number: 1,
      title: "AI-Powered Integration",
      description: "Our smart API connects seamlessly with your ticketing platform, offering Blowout Protection as a premium add-on during checkout.",
      icon: Plug,
      text: "Intelligent API implementation",
      highlight: <Code size={22} />
    },
    {
      number: 2,
      title: "Fan Experience",
      description: "Fans pay a small premium for Blowout Protection. If their game ends in a blowout by our pre-defined criteria, they receive a 50% rebate.",
      icon: UserRound,
      text: "Automated fan rebates",
      highlight: <BrainCircuit size={22} />
    },
    {
      number: 3,
      title: "Revenue Analytics",
      description: "Platforms earn a percentage of every Blowout Protection add-on sold, with real-time analytics to maximize your revenue stream.",
      icon: DollarSign,
      text: "Data-driven profit center",
      highlight: <Server size={22} />
    }
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="relative py-24 overflow-hidden">
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
      
      {/* Main content with fixed-scroll sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="min-h-screen relative">
          {/* Mobile title (shown only on mobile) */}
          <div className="md:hidden text-center mb-20">
            <div className="inline-flex items-center justify-center mb-3 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
              <span className="text-cyan-400 text-xs font-medium tracking-wider uppercase">Technology Ecosystem</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">
              How <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blowout Protection</span> Works
            </h2>
            
            <p className="text-lg text-gray-300">
              A seamless integration powered by machine learning and advanced algorithms
            </p>
          </div>
          
          {/* Desktop layout with fixed left column */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {/* Left column - Fixed position title and indicators */}
            <div className="relative z-20">
              <div ref={titleRef} className="sticky top-32">
                <div className="inline-flex items-center justify-center mb-3 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
                  <span className="text-cyan-400 text-xs font-medium tracking-wider uppercase">Technology Ecosystem</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  How <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blowout Protection</span> Works
                </h2>
                
                <p className="text-xl text-gray-300 mb-10">
                  A seamless integration powered by machine learning and advanced algorithms
                </p>
                
                {/* Step indicators */}
                <div className="mt-16 space-y-8 pl-4">
                  <div className={`flex items-center transition-all duration-300 ${currentStep === 0 ? 'opacity-100 scale-105 translate-x-1' : 'opacity-40'}`}>
                    <div className={`w-10 h-10 rounded-full ${currentStep === 0 ? 'bg-cyan-500/20' : 'bg-gray-700/20'} flex items-center justify-center mr-4 transition-all duration-300`}>
                      <span className={`text-lg font-bold ${currentStep === 0 ? 'text-cyan-400' : 'text-gray-400'}`}>1</span>
                    </div>
                    <div>
                      <p className={`font-bold ${currentStep === 0 ? 'text-white' : 'text-gray-400'}`}>AI-Powered Integration</p>
                    </div>
                  </div>
                  
                  <div className={`flex items-center transition-all duration-300 ${currentStep === 1 ? 'opacity-100 scale-105 translate-x-1' : 'opacity-40'}`}>
                    <div className={`w-10 h-10 rounded-full ${currentStep === 1 ? 'bg-cyan-500/20' : 'bg-gray-700/20'} flex items-center justify-center mr-4 transition-all duration-300`}>
                      <span className={`text-lg font-bold ${currentStep === 1 ? 'text-cyan-400' : 'text-gray-400'}`}>2</span>
                    </div>
                    <div>
                      <p className={`font-bold ${currentStep === 1 ? 'text-white' : 'text-gray-400'}`}>Fan Experience</p>
                    </div>
                  </div>
                  
                  <div className={`flex items-center transition-all duration-300 ${currentStep === 2 ? 'opacity-100 scale-105 translate-x-1' : 'opacity-40'}`}>
                    <div className={`w-10 h-10 rounded-full ${currentStep === 2 ? 'bg-cyan-500/20' : 'bg-gray-700/20'} flex items-center justify-center mr-4 transition-all duration-300`}>
                      <span className={`text-lg font-bold ${currentStep === 2 ? 'text-cyan-400' : 'text-gray-400'}`}>3</span>
                    </div>
                    <div>
                      <p className={`font-bold ${currentStep === 2 ? 'text-white' : 'text-gray-400'}`}>Revenue Analytics</p>
                    </div>
                  </div>
                </div>
                
                {/* Tech decorative elements */}
                <div className="relative mt-24 h-40">
                  <div className="absolute left-0 top-0 w-1/2 h-[1px] bg-gradient-to-r from-cyan-500/80 to-cyan-500/0"></div>
                  <div className="absolute left-0 top-0 w-[1px] h-40 bg-gradient-to-b from-cyan-500/80 to-cyan-500/0"></div>
                  
                  {/* Floating tech icons with active state based on currentStep */}
                  <motion.div 
                    className={`absolute left-4 top-8 w-16 h-16 rounded-full bg-cyan-500/5 border border-cyan-500/20 flex items-center justify-center transition-all duration-500 ${currentStep === 0 ? 'opacity-100 scale-110' : 'opacity-40 scale-90'}`}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Code className={`w-8 h-8 ${currentStep === 0 ? 'text-cyan-400' : 'text-cyan-500/50'}`} />
                  </motion.div>
                  
                  <motion.div 
                    className={`absolute left-24 top-16 w-14 h-14 rounded-full bg-cyan-500/5 border border-cyan-500/20 flex items-center justify-center transition-all duration-500 ${currentStep === 1 ? 'opacity-100 scale-110' : 'opacity-40 scale-90'}`}
                    animate={{
                      y: [0, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <BrainCircuit className={`w-7 h-7 ${currentStep === 1 ? 'text-cyan-400' : 'text-cyan-500/50'}`} />
                  </motion.div>
                  
                  <motion.div
                    className={`absolute left-10 top-28 w-12 h-12 rounded-full bg-cyan-500/5 border border-cyan-500/20 flex items-center justify-center transition-all duration-500 ${currentStep === 2 ? 'opacity-100 scale-110' : 'opacity-40 scale-90'}`}
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8
                    }}
                  >
                    <Server className={`w-6 h-6 ${currentStep === 2 ? 'text-cyan-400' : 'text-cyan-500/50'}`} />
                  </motion.div>
                </div>
                
                {/* Scroll indicator */}
                <div className="hidden md:flex flex-col items-center mt-8">
                  <p className="text-cyan-400/70 text-sm mb-2">Scroll to explore</p>
                  <motion.div
                    animate={{
                      y: [0, 5, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ChevronDown className="text-cyan-400/70 w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Right column - Scrolling content */}
            <div className="space-y-[70vh] py-20">
              {/* Step 1 */}
              <div ref={step1Ref} id="step1" className="min-h-[60vh] flex items-center">
                <motion.div 
                  className="bg-[#0a101f]/90 backdrop-blur-sm rounded-xl border border-cyan-500/20 shadow-[0_0_30px_rgba(8,145,178,0.1)] overflow-hidden w-full"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Tech corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-[1px] bg-cyan-500/30"></div>
                  <div className="absolute top-0 left-0 w-[1px] h-8 bg-cyan-500/30"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-cyan-500/30"></div>
                  <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-cyan-500/30"></div>
                  
                  <div className="p-8 relative">                    
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xl shadow-[0_0_15px_rgba(8,145,178,0.2)] mr-4">
                        1
                      </div>
                      <h3 className="text-2xl font-bold">{steps[0].title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-8 pl-[4.5rem]">
                      {steps[0].description}
                    </p>
                    
                    <div className="flex items-center text-cyan-400 bg-cyan-500/5 py-3 px-5 rounded-lg border border-cyan-500/20 w-fit ml-[4.5rem]">
                      <span className="mr-2">{steps[0].highlight}</span>
                      <span className="font-medium">{steps[0].text}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Step 2 */}
              <div ref={step2Ref} id="step2" className="min-h-[60vh] flex items-center">
                <motion.div 
                  className="bg-[#0a101f]/90 backdrop-blur-sm rounded-xl border border-cyan-500/20 shadow-[0_0_30px_rgba(8,145,178,0.1)] overflow-hidden w-full"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Tech corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-[1px] bg-cyan-500/30"></div>
                  <div className="absolute top-0 left-0 w-[1px] h-8 bg-cyan-500/30"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-cyan-500/30"></div>
                  <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-cyan-500/30"></div>
                  
                  <div className="p-8 relative">                    
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xl shadow-[0_0_15px_rgba(8,145,178,0.2)] mr-4">
                        2
                      </div>
                      <h3 className="text-2xl font-bold">{steps[1].title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-8 pl-[4.5rem]">
                      {steps[1].description}
                    </p>
                    
                    <div className="flex items-center text-cyan-400 bg-cyan-500/5 py-3 px-5 rounded-lg border border-cyan-500/20 w-fit ml-[4.5rem]">
                      <span className="mr-2">{steps[1].highlight}</span>
                      <span className="font-medium">{steps[1].text}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Step 3 */}
              <div ref={step3Ref} id="step3" className="min-h-[60vh] flex items-center">
                <motion.div 
                  className="bg-[#0a101f]/90 backdrop-blur-sm rounded-xl border border-cyan-500/20 shadow-[0_0_30px_rgba(8,145,178,0.1)] overflow-hidden w-full"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Tech corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-[1px] bg-cyan-500/30"></div>
                  <div className="absolute top-0 left-0 w-[1px] h-8 bg-cyan-500/30"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-cyan-500/30"></div>
                  <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-cyan-500/30"></div>
                  
                  <div className="p-8 relative">                    
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xl shadow-[0_0_15px_rgba(8,145,178,0.2)] mr-4">
                        3
                      </div>
                      <h3 className="text-2xl font-bold">{steps[2].title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-8 pl-[4.5rem]">
                      {steps[2].description}
                    </p>
                    
                    <div className="flex items-center text-cyan-400 bg-cyan-500/5 py-3 px-5 rounded-lg border border-cyan-500/20 w-fit ml-[4.5rem]">
                      <span className="mr-2">{steps[2].highlight}</span>
                      <span className="font-medium">{steps[2].text}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Mobile steps */}
          <div className="md:hidden space-y-16 py-12">
            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                className="bg-[#0a101f]/90 backdrop-blur-sm rounded-xl border border-cyan-500/20 shadow-[0_0_30px_rgba(8,145,178,0.1)] overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-6 relative">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold shadow-[0_0_15px_rgba(8,145,178,0.2)] mr-3">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Features grid */}
        <motion.div 
          className="mt-16 mb-10 bg-[#0a101f]/80 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/10 shadow-[0_8px_30px_rgba(8,145,178,0.1)]"
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