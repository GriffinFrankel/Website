import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Code, BrainCircuit, Server } from "lucide-react";

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
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

  const [activeStep, setActiveStep] = useState(1);
  const [hasLandedOnSection, setHasLandedOnSection] = useState(false);
  const [stepsUnlocked, setStepsUnlocked] = useState(false);

  // Handle section entrance - first phase of scroll control
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setHasLandedOnSection(true);
          // Delay enabling step scrolling to ensure user sees intro content
          setTimeout(() => {
            setStepsUnlocked(true);
          }, 800);
        }
      });
    }, { threshold: 0.6 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll to specific step 
  const scrollToStep = (stepNumber: number) => {
    const element = document.getElementById(`step-${stepNumber}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Track which step is visible
  useEffect(() => {
    if (!stepsUnlocked) return;

    const observerOptions = {
      root: document.getElementById('steps-container'),
      rootMargin: "0px",
      threshold: 0.6
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stepId = entry.target.id;
          const stepNumber = parseInt(stepId.split("-")[1]);
          setActiveStep(stepNumber);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all step elements
    steps.forEach(step => {
      const element = document.getElementById(`step-${step.number}`);
      if (element) observer.observe(element);
    });

    // Control wheel events to prevent skipping steps
    const handleWheel = (e: WheelEvent) => {
      if (!stepsContainerRef.current) return;
      
      const container = stepsContainerRef.current;
      const currentScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      
      // Determine target step based on scroll direction
      let targetStep = activeStep;
      if (e.deltaY > 0) {
        // Scrolling down
        targetStep = Math.min(activeStep + 1, steps.length);
      } else if (e.deltaY < 0) {
        // Scrolling up
        targetStep = Math.max(activeStep - 1, 1);
      }
      
      if (targetStep !== activeStep) {
        e.preventDefault();
        scrollToStep(targetStep);
      }
      
      // Prevent scrolling past if not on the last step
      if (activeStep < steps.length && 
         (currentScrollTop + containerHeight >= container.scrollHeight - 10)) {
        e.preventDefault();
      }
    };
    
    const stepsContainer = stepsContainerRef.current;
    if (stepsContainer) {
      stepsContainer.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      observer.disconnect();
      if (stepsContainer) {
        stepsContainer.removeEventListener('wheel', handleWheel);
      }
    };
  }, [steps, activeStep, stepsUnlocked]);

  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="bg-[#0D1117] relative h-screen overflow-hidden snap-center snap-always"
    >
      {/* Fixed left side content */}
      <div className="absolute top-0 left-0 h-full w-full z-10 pointer-events-none hidden md:block">
        <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-6 flex items-center">
              <div className="pointer-events-auto max-w-md">
                <div className="inline-flex items-center justify-center mb-3 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
                  <span className="text-cyan-400 text-xs font-medium tracking-wider uppercase">The Process</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  How <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blowout Protection</span> Works
                </h2>

                <p className="text-gray-400 text-lg mb-8">
                  A seamless integration powered by machine learning and advanced algorithms
                </p>

                {/* Step Indicators */}
                <div className="space-y-6 border-l-2 border-cyan-500/20 pl-6">
                  {steps.map((navStep) => (
                    <div 
                      key={navStep.number}
                      onClick={() => stepsUnlocked && scrollToStep(navStep.number)}
                      className={`flex items-center cursor-pointer group ${stepsUnlocked ? '' : 'pointer-events-none opacity-70'}`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 -ml-11 border transition-all duration-300 text-lg font-bold relative ${
                          activeStep === navStep.number
                            ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-black border-cyan-400"
                            : "bg-cyan-500/20 text-cyan-400 border-cyan-500/40 group-hover:bg-cyan-500/30"
                        }`}
                      >
                        {navStep.number}
                        {activeStep === navStep.number && (
                          <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-[15px] -z-10"></div>
                        )}
                      </div>
                      <div
                        className={`font-semibold transition-colors duration-300 ${
                          activeStep === navStep.number ? "text-white" : "text-gray-400 group-hover:text-gray-300"
                        }`}
                      >
                        {navStep.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div 
        id="steps-container" 
        ref={stepsContainerRef}
        className={`h-screen w-full snap-y snap-mandatory overflow-y-auto scroll-smooth 
                   ${stepsUnlocked ? '' : 'pointer-events-none'}`}
      >
        {steps.map((step) => (
          <div 
            key={step.number}
            id={`step-${step.number}`}
            className="h-screen w-full snap-start flex flex-col justify-center"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Mobile-only left side content */}
                <div className="md:hidden mb-8">
                  <div className="inline-flex items-center justify-center mb-3 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
                    <span className="text-cyan-400 text-xs font-medium tracking-wider uppercase">The Process</span>
                  </div>

                  <h2 className="text-3xl font-bold mb-4">
                    How <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blowout Protection</span> Works
                  </h2>

                  <p className="text-gray-400 text-base mb-6">
                    A seamless integration powered by machine learning
                  </p>
                </div>

                {/* Empty space for desktop left column */}
                <div className="hidden md:block md:col-span-6"></div>

                {/* Right Column - Step Content */}
                <div className="col-span-1 md:col-span-6">
                  <motion.div
                    className="bg-[#111827] p-6 md:p-8 rounded-xl border border-cyan-500/20 shadow-lg max-w-xl ml-0"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-start md:items-center mb-6">
                      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-xl mr-4">
                        {step.number}
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-6 md:pl-16">
                      {step.description}
                    </p>
                    <div className="md:ml-16 flex items-center gap-2 bg-cyan-500/5 border border-cyan-500/20 rounded-lg px-4 py-2 w-fit text-cyan-400 text-sm">
                      {step.icon}
                      <span>{step.text}</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}