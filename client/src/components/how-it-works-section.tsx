import { useState, useEffect } from "react";
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

  const [activeStep, setActiveStep] = useState(1);
  const [sectionInView, setSectionInView] = useState(false);
  const [allStepsViewed, setAllStepsViewed] = useState(false);
  const [viewedSteps, setViewedSteps] = useState<number[]>([]);
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  // Track which steps have been viewed
  useEffect(() => {
    if (!viewedSteps.includes(activeStep)) {
      setViewedSteps(prev => [...prev, activeStep]);
    }

    // Check if all steps have been viewed
    if (viewedSteps.length === steps.length && !allStepsViewed) {
      setAllStepsViewed(true);
    }
  }, [activeStep, viewedSteps, steps.length, allStepsViewed]);

  // Scroll to step on click
  const scrollToStep = (stepNumber: number) => {
    const element = document.getElementById(`step-${stepNumber}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Use an effect to detect when the entire section is in view and centered
  useEffect(() => {
    const sectionObserverOptions = {
      rootMargin: "-30% 0px -30% 0px", // Section must be centered in viewport
      threshold: [0.4, 0.6, 0.8] // More thresholds for smoother detection
    };

    const sectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setSectionInView(true);
          
          // When section comes into view, lock main page scrolling
          document.body.style.overflow = 'hidden';
          setIsScrollLocked(true);
        } else if (!allStepsViewed) {
          setSectionInView(false);
        }
      });
    };

    const sectionObserver = new IntersectionObserver(sectionObserverCallback, sectionObserverOptions);
    
    const section = document.getElementById('how-it-works');
    if (section) sectionObserver.observe(section);

    return () => {
      sectionObserver.disconnect();
    };
  }, [allStepsViewed]);

  // This effect manages the scrolling lock
  useEffect(() => {
    // Only unlock scrolling when all steps have been viewed
    if (allStepsViewed && isScrollLocked) {
      document.body.style.overflow = '';
      setIsScrollLocked(false);
    }

    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [allStepsViewed, isScrollLocked]);

  // This effect manages the step visibility and active state
  useEffect(() => {
    // Only set up step observers when section is in view
    if (!sectionInView) return;
    
    const observerOptions = {
      root: document.getElementById('steps-container'),
      rootMargin: "0px",
      threshold: 0.7 // Higher threshold for more accurate detection
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

    // Observe all the step elements
    steps.forEach(step => {
      const element = document.getElementById(`step-${step.number}`);
      if (element) observer.observe(element);
    });

    // Clean up the observer on component unmount
    return () => observer.disconnect();
  }, [steps, sectionInView]);

  return (
    <section 
      id="how-it-works" 
      className={`bg-[#0D1117] relative h-screen overflow-hidden ${sectionInView ? 'section-active' : ''} ${isScrollLocked ? 'scroll-locked' : ''}`}
    >
      {/* Progress indicator - only visible when section is locked */}
      {sectionInView && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#111827]/80 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-500/20 shadow-lg flex items-center gap-3">
          <div className="flex gap-2">
            {steps.map((step) => (
              <div 
                key={step.number}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  viewedSteps.includes(step.number) 
                    ? activeStep === step.number 
                      ? "bg-cyan-400 scale-110" 
                      : "bg-cyan-400/50" 
                    : "bg-gray-600"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-300 font-medium">
            {allStepsViewed 
              ? "All steps viewed - scroll to continue" 
              : `Step ${activeStep} of ${steps.length}`}
          </span>
        </div>
      )}
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
                      onClick={() => scrollToStep(navStep.number)}
                      className="flex items-center cursor-pointer group"
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

      {/* Completion indicator that appears when all steps are viewed */}
      {allStepsViewed && (
        <motion.div 
          className="absolute bottom-[25%] right-8 z-40 hidden md:flex items-center gap-2 px-4 py-3 rounded-lg bg-cyan-500/10 border border-cyan-500/40 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-white">
              <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-white font-medium">All steps viewed! Scroll to continue</span>
        </motion.div>
      )}
      
      {/* Scrollable content - only enabled when section is in view */}
      <div 
        id="steps-container" 
        className={`h-screen w-full ${sectionInView ? 'snap-y snap-mandatory overflow-y-auto' : 'overflow-hidden'} scroll-smooth transition-all duration-500`}
      >
        {steps.map((step) => (
          <div 
            key={step.number}
            id={`step-${step.number}`}
            className="h-screen w-full snap-start flex flex-col justify-center"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Aligned with navbar */}
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
                    animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
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