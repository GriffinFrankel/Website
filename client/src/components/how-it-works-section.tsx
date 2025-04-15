
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, BrainCircuit, Server } from "lucide-react";

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

  // We'll use this to track which step is active
  const [activeStep, setActiveStep] = useState(1);
  
  // Reference to our scrollable container
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the step number from the entry's target id
            const stepNumber = parseInt(entry.target.id.split('-')[1]);
            setActiveStep(stepNumber);
          }
        });
      },
      { threshold: 0.6 } // Higher threshold for better accuracy
    );

    // Observe all step elements
    document.querySelectorAll('.step-card').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="bg-[#0D1117] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Mobile title (shown only on mobile) */}
        <div className="md:hidden text-center mb-12">
          <div className="text-cyan-400 text-sm font-semibold uppercase mb-2">
            Technology Ecosystem
          </div>
          <h2 className="text-3xl font-bold mb-4">
            How <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blowout Protection</span> Works
          </h2>
          <p className="text-gray-400 text-lg">
            A seamless integration powered by machine learning and advanced algorithms
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left column (fixed) */}
          <div className="hidden md:block md:col-span-5">
            <div className="sticky top-32">
              <div className="text-cyan-400 text-sm font-semibold uppercase mb-2">
                Technology Ecosystem
              </div>
              <h2 className="text-4xl font-bold mb-4">
                How <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blowout Protection</span> Works
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                A seamless integration powered by machine learning and advanced algorithms
              </p>

              {/* Step Indicators */}
              <div className="space-y-6 border-l-2 border-cyan-500/20 pl-6">
                {steps.map((step) => (
                  <div key={step.number} className="flex items-start">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 -ml-11 border transition-all duration-300 text-lg font-bold ${
                      activeStep === step.number
                        ? "bg-cyan-500 text-black border-cyan-400"
                        : "bg-cyan-500/20 text-cyan-400 border-cyan-500/40"
                    }`}>
                      {step.number}
                    </div>
                    <p className={`font-semibold transition-colors duration-300 ${
                      activeStep === step.number ? "text-white" : "text-gray-400"
                    }`}>
                      {step.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column (scrolling content) */}
          <div className="md:col-span-7">
            <div className="space-y-32">
              {steps.map((step) => (
                <motion.div
                  key={step.number}
                  id={`step-${step.number}`}
                  className="step-card bg-[#111827] p-8 rounded-xl border border-cyan-500/20 shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-xl mb-4 md:mb-0 md:mr-4">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 my-4">
                        {step.description}
                      </p>
                      <div className="flex items-center gap-2 bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-4 py-2 w-fit text-cyan-400 text-sm">
                        {step.icon}
                        <span>{step.text}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile version (simplified) */}
        <div className="md:hidden mt-16 space-y-8">
          {steps.map((step) => (
            <motion.div
              key={`mobile-${step.number}`}
              className="bg-[#111827] p-6 rounded-xl border border-cyan-500/20 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-lg mr-4">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm my-3">
                    {step.description}
                  </p>
                  <div className="flex items-center gap-2 bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-3 py-1.5 w-fit text-cyan-400 text-xs">
                    {step.icon}
                    <span>{step.text}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
