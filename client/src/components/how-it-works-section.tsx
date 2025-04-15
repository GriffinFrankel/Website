
'use client';

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code, BrainCircuit, Server } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "AI-Powered Integration",
      description:
        "Our smart API connects seamlessly with your ticketing platform, offering Blowout Protection as a premium add-on during checkout.",
      icon: <Code className="w-5 h-5" />,
      text: "Intelligent API implementation",
    },
    {
      number: 2,
      title: "Fan Experience",
      description:
        "Fans pay a small premium for Blowout Protection. If their game ends in a blowout by our pre-defined criteria, they receive a 50% rebate.",
      icon: <BrainCircuit className="w-5 h-5" />,
      text: "Automated fan rebates",
    },
    {
      number: 3,
      title: "Revenue Analytics",
      description:
        "Platforms earn a percentage of every Blowout Protection add-on sold, with real-time analytics to maximize your revenue stream.",
      icon: <Server className="w-5 h-5" />,
      text: "Data-driven profit center",
    },
  ];

  const [activeStep, setActiveStep] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create an observer to track which steps are in view
    const options = {
      root: containerRef.current,
      rootMargin: "0px",
      threshold: 0.6 // Higher threshold for more precise detection
    };
    
    const step1Observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveStep(1);
      });
    }, options);
    
    const step2Observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveStep(2);
      });
    }, options);
    
    const step3Observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveStep(3);
      });
    }, options);
    
    // Select the step containers
    const step1Element = document.querySelector("#step-1");
    const step2Element = document.querySelector("#step-2");
    const step3Element = document.querySelector("#step-3");
    
    // Observe the steps
    if (step1Element) step1Observer.observe(step1Element);
    if (step2Element) step2Observer.observe(step2Element);
    if (step3Element) step3Observer.observe(step3Element);
    
    return () => {
      step1Observer.disconnect();
      step2Observer.disconnect();
      step3Observer.disconnect();
    };
  }, []);

  return (
    <section id="how-it-works" className="bg-[#0D1117] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Sticky Left Column */}
        <div className="md:col-span-5">
          <div className="sticky top-32">
            <div className="inline-flex items-center justify-center mb-3 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
              <span className="text-cyan-400 text-xs font-medium tracking-wider uppercase">The Process</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              How{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Blowout Protection
              </span>{" "}
              Works
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              A seamless integration powered by machine learning and advanced algorithms
            </p>

            {/* Step Indicators */}
            <div className="space-y-4 border-l-2 border-cyan-500/20 pl-6">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 -ml-11 border transition-all duration-300 text-lg font-bold ${
                      activeStep === step.number
                        ? "bg-cyan-500 text-black border-cyan-400"
                        : "bg-cyan-500/20 text-cyan-400 border-cyan-500/40"
                    }`}
                  >
                    {step.number}
                  </div>
                  <p
                    className={`font-semibold transition-colors duration-300 ${
                      activeStep === step.number ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scrollable Right Column */}
        <div 
          ref={containerRef}
          className="md:col-span-7 h-[80vh] overflow-y-scroll snap-y snap-mandatory pr-4 hide-scrollbar scroll-smooth"
        >
          {/* First step - normal position */}
          <motion.div
            id="step-1"
            key={steps[0].number}
            className="snap-start min-h-[80vh] flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#111827] p-8 rounded-xl border border-cyan-500/20 shadow-lg max-w-xl w-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-xl mr-4">
                  {steps[0].number}
                </div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {steps[0].title}
                </h3>
              </div>
              <p className="text-gray-300 mb-6 pl-[3.5rem]">{steps[0].description}</p>
              <div className="ml-[3.5rem] flex items-center gap-2 bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-4 py-2 w-fit text-cyan-400 text-sm">
                {steps[0].icon}
                {steps[0].text}
              </div>
            </div>
          </motion.div>
          
          {/* Second step - normal position */}
          <motion.div
            id="step-2"
            key={steps[1].number}
            className="snap-start min-h-[80vh] flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#111827] p-8 rounded-xl border border-cyan-500/20 shadow-lg max-w-xl w-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-xl mr-4">
                  {steps[1].number}
                </div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {steps[1].title}
                </h3>
              </div>
              <p className="text-gray-300 mb-6 pl-[3.5rem]">{steps[1].description}</p>
              <div className="ml-[3.5rem] flex items-center gap-2 bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-4 py-2 w-fit text-cyan-400 text-sm">
                {steps[1].icon}
                {steps[1].text}
              </div>
            </div>
          </motion.div>
          
          {/* Third step - special positioning to center it */}
          <div id="step-3" className="snap-start min-h-[80vh] flex flex-col">
            {/* Empty space at top to push content down */}
            <div className="h-[30vh]"></div>
            
            {/* Actual content */}
            <motion.div
              key={steps[2].number}
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#111827] p-8 rounded-xl border border-cyan-500/20 shadow-lg max-w-xl w-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-xl mr-4">
                    {steps[2].number}
                  </div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {steps[2].title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 pl-[3.5rem]">{steps[2].description}</p>
                <div className="ml-[3.5rem] flex items-center gap-2 bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-4 py-2 w-fit text-cyan-400 text-sm">
                  {steps[2].icon}
                  {steps[2].text}
                </div>
              </div>
            </motion.div>
            
            {/* Empty space at bottom for proper spacing */}
            <div className="h-[30vh]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
