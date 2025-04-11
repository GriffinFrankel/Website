import { motion } from "framer-motion";
import { fadeIn, staggerContainer, fadeInUp } from "@/lib/animations";
import { Check, Plug, UserRound, DollarSign } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Easy Integration",
      description: "Our API connects seamlessly with your ticketing platform, offering Blowout Protection as a premium add-on during checkout.",
      icon: Plug,
      text: "Simple API implementation"
    },
    {
      number: 2,
      title: "Fan Experience",
      description: "Fans pay a small premium for Blowout Protection. If their game ends in a blowout by our pre-defined criteria, they receive a 50% rebate.",
      icon: UserRound,
      text: "Seamless fan rebates"
    },
    {
      number: 3,
      title: "Revenue Share",
      description: "Platforms earn a percentage of every Blowout Protection add-on sold, creating a new revenue stream with zero financial risk.",
      icon: DollarSign,
      text: "New profit center"
    }
  ];

  return (
    <section id="how-it-works" className="relative py-20 overflow-hidden">
      {/* Dark background like hero section */}
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
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How <span className="bg-gradient-to-r from-[#38F902] to-[#21c100] bg-clip-text text-transparent">Blowout Protection</span> Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A seamless integration that creates value for fans and platforms alike
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:border-[#38F902]/30 hover:shadow-[0_10px_25px_-5px_rgba(56,249,2,0.15),0_8px_10px_-6px_rgba(56,249,2,0.15)]"
              variants={fadeInUp}
              custom={index * 0.2}
            >
              <div className="w-12 h-12 rounded-full bg-[#38F902] flex items-center justify-center text-black font-bold text-xl mb-6 shadow-[0_0_15px_rgba(56,249,2,0.3)]">{step.number}</div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-300 mb-4">
                {step.description}
              </p>
              <div className="flex items-center text-[#38F902]">
                <div className="mr-2">
                  {step.number === 1 && <Plug size={20} className="text-[#38F902]" />}
                  {step.number === 2 && <UserRound size={20} className="text-[#38F902]" />}
                  {step.number === 3 && <DollarSign size={20} className="text-[#38F902]" />}
                </div>
                <span className="font-medium">{step.text}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-black/40 backdrop-blur-md p-8 rounded-xl border border-gray-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          custom={0.6}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Game Day Experience</h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              After the game, our system automatically processes eligible rebates and delivers them directly to fans.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-[#38F902]/30 transition-all duration-300 flex flex-col items-center">
                <div className="w-12 h-12 bg-[#38F902]/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-[#38F902] w-6 h-6" />
                </div>
                <h4 className="font-medium mb-2">Instant Notifications</h4>
                <p className="text-gray-400 text-sm text-center">Fans receive immediate alerts about their rebates after the game</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-[#38F902]/30 transition-all duration-300 flex flex-col items-center">
                <div className="w-12 h-12 bg-[#38F902]/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-[#38F902] w-6 h-6" />
                </div>
                <h4 className="font-medium mb-2">Effortless Rebates</h4>
                <p className="text-gray-400 text-sm text-center">Fans receive an email link to quickly collect their rebate</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-[#38F902]/30 transition-all duration-300 flex flex-col items-center">
                <div className="w-12 h-12 bg-[#38F902]/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-[#38F902] w-6 h-6" />
                </div>
                <h4 className="font-medium mb-2">Zero Maintenance</h4>
                <p className="text-gray-400 text-sm text-center">No ongoing integration maintenance required for partners</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
