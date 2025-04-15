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
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  // Scroll to top on refresh
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  // Track which step is currently in view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(i + 1);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="bg-[#0D1117] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Sticky Left Column */}
        <div className="md:col-span-5">
          <div className="sticky top-32">
            <div className="text-cyan-400 text-sm font-semibold uppercase mb-2">
              Technology Ecosystem
            </div>
            <h2 className="text-white text-4xl font-bold mb-4">
              How{" "}
              <span className="text-cyan-400">Blowout Protection</span> Works
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              A seamless integration powered by machine learning and advanced algorithms
            </p>

            {/* Step Indicators */}
            <div className="space-y-6 border-l-2 border-cyan-500/20 pl-6">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 -ml-11 border text-lg font-bold ${
                      activeStep === step.number
                        ? "bg-cyan-500 text-black border-cyan-400"
                        : "bg-cyan-500/20 text-cyan-400 border-cyan-500/40"
                    }`}
                  >
                    {step.number}
                  </div>
                  <p
                    className={`font-semibold ${
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

        {/* Scrollable Right Column with Snap */}
        <div className="md:col-span-7 h-[200vh] overflow-y-scroll snap-y snap-mandatory space-y-0 flex flex-col gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              ref={(el) => (stepRefs.current[i] = el)}
              className="snap-center min-h-[90vh] flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#111827] p-8 rounded-xl border border-cyan-500/20 shadow-lg max-w-xl w-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-xl mr-4">
                    {step.number}
                  </div>
                  <h3 className="text-white text-2xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 pl-[3.5rem]">{step.description}</p>
                <div className="ml-[3.5rem] flex items-center gap-2 bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-4 py-2 w-fit text-cyan-400 text-sm">
                  {step.icon}
                  {step.text}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
