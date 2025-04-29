import { motion } from "framer-motion";
import { Code, BrainCircuit, Server } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Simple Integration",
      description: "Our API connects seamlessly with your ticketing platform, offering Blowout Protection as a premium add-on during checkout.",
      icon: <Code className="w-5 h-5" />,
      text: "Intelligent API implementation"
    },
    {
      number: 2,
      title: "Fan Experience",
      description: "Fans pay a small add-on fee for Blowout Protection. If their game ends in a blowout by our pre-defined criteria, they receive a 50% rebate.",
      icon: <BrainCircuit className="w-5 h-5" />,
      text: "Automated fan rebates"
    },
    {
      number: 3,
      title: "Revenue Share",
      description: "Platforms earn a percentage of every Blowout Protection add-on sold, creating a new revenue stream with zero finanical risk.",
      icon: <Server className="w-5 h-5" />,
      text: "Data-driven profit"
    }
  ];

  return (
    <section id="how-it-works" className="bg-[#0D1117] py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Left column - Title and Description */}
          <div className="md:col-span-5 md:sticky md:top-32 self-start">
            <div className="max-w-md">
              <div className="inline-flex items-center justify-center mb-3 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
                <span className="text-cyan-400 text-xs font-medium tracking-wider uppercase">The Process</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blowout Protection</span> Works
              </h2>

              <p className="text-gray-400 text-lg">
                A seamless integration powered by machine learning and advanced algorithms that creates a win-win for fans and partners.
              </p>
            </div>
          </div>
          
          {/* Right column - Steps stacked vertically */}
          <div className="md:col-span-7">
            <div className="space-y-8">
              {steps.map((step) => (
                <motion.div
                  key={step.number}
                  className="bg-[#111827] p-6 md:p-8 rounded-xl border border-cyan-500/20 shadow-lg group 
                    hover:shadow-cyan-500/20 hover:shadow-xl transition-all duration-300 
                    hover:border-cyan-400/40 hover:scale-[1.02] hover:bg-[#141d2f]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: step.number * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-start md:items-center mb-5">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-xl mr-4 
                      group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:text-black 
                      transition-all duration-300 group-hover:border-cyan-400">
                      {step.number}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 
                      group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-5 md:pl-16 group-hover:text-gray-200 transition-colors duration-300">
                    {step.description}
                  </p>
                  <div className="md:ml-16 flex items-center gap-2 bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-4 py-2 w-fit text-cyan-400 text-sm
                    group-hover:bg-cyan-500/10 group-hover:border-cyan-400/30 transition-all duration-300 group-hover:text-cyan-300">
                    <span>{step.icon}</span>
                    <span>{step.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}