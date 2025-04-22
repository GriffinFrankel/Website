import { useState, useEffect, useRef } from "react";
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
  const [sectionFullyVisible, setSectionFullyVisible] = useState(false);
  const [hasSeenAllSteps, setHasSeenAllSteps] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  
  // Helper to check if we've viewed all steps
  const checkCompletedAllSteps = (currentStep: number) => {
    if (currentStep === steps.length) {
      setHasSeenAllSteps(true);
    }
  };

  // Scroll to step on click - only works when section is active
  const scrollToStep = (stepNumber: number) => {
    if (!sectionFullyVisible) return;
    
    const element = document.getElementById(`step-${stepNumber}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Primary effect to control all scroll behavior
  useEffect(() => {
    let prevScrollY = window.scrollY;
    let isScrollingAllowed = false;
    let wheelEventCount = 0;
    let currentStep = 1;
    
    // Observer to detect when section first becomes visible (entering view)
    const enterObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionInView(true);
        } else {
          setSectionInView(false);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of section is visible
      }
    );

    // Observer to detect when section is fully centered (ready for internal scrolling)
    const centerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionFullyVisible(true);
        } else {
          setSectionFullyVisible(false);
        }
      },
      {
        rootMargin: "-30% 0px", // Trigger when section is 70% in view
        threshold: 0.7, // Trigger when section is 70% visible
      }
    );

    // Observer for each step to track progress
    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const stepId = entry.target.id;
            const stepNumber = parseInt(stepId.split("-")[1]);
            setActiveStep(stepNumber);
            currentStep = stepNumber;
            checkCompletedAllSteps(stepNumber);
          }
        });
      },
      {
        root: stepsContainerRef.current,
        threshold: 0.6,
      }
    );

    // Main scroll handler to control scroll behavior
    const handleScroll = (e: Event) => {
      // Prevent default scroll behavior when section is in view but not all steps seen
      if (sectionInView && !hasSeenAllSteps) {
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > prevScrollY;
        const sectionTop = sectionRef.current?.offsetTop || 0;
        const viewportHeight = window.innerHeight;
        const sectionCenter = sectionTop - (viewportHeight / 2) + (sectionRef.current?.offsetHeight || 0) / 2;
        
        // Force to center of section when entering
        if (!sectionFullyVisible && scrollingDown) {
          window.scrollTo({
            top: sectionCenter,
            behavior: 'smooth'
          });
          e.preventDefault();
          return false;
        }
        
        // Lock at top of section when trying to scroll up/out too early
        if (sectionFullyVisible && !scrollingDown && currentStep === 1) {
          window.scrollTo({
            top: sectionCenter,
            behavior: 'smooth'
          });
          e.preventDefault();
          return false;
        }
        
        // Lock at bottom of section until all steps seen
        if (sectionFullyVisible && scrollingDown && !hasSeenAllSteps) {
          window.scrollTo({
            top: sectionCenter,
            behavior: 'smooth'
          });
          e.preventDefault();
          return false;
        }
        
        prevScrollY = currentScrollY;
      }
    };

    // Wheel event handler to control step scrolling
    const handleWheel = (e: WheelEvent) => {
      if (sectionFullyVisible && !hasSeenAllSteps) {
        e.preventDefault();
        
        // Throttle wheel events to control step transitions
        wheelEventCount++;
        if (wheelEventCount < 5) return;
        wheelEventCount = 0;
        
        const step = stepsContainerRef.current;
        if (!step) return;

        // Logic to move between steps
        if (e.deltaY > 0 && currentStep < steps.length) {
          // Scrolling down, go to next step
          const nextStep = document.getElementById(`step-${currentStep + 1}`);
          if (nextStep) {
            nextStep.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        } else if (e.deltaY < 0 && currentStep > 1) {
          // Scrolling up, go to previous step
          const prevStep = document.getElementById(`step-${currentStep - 1}`);
          if (prevStep) {
            prevStep.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      }
    };

    // Touch events for mobile
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (sectionFullyVisible && !hasSeenAllSteps) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (sectionFullyVisible && !hasSeenAllSteps) {
        e.preventDefault();
        
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY - touchY;
        
        // Only process significant swipes
        if (Math.abs(deltaY) < 30) return;
        
        // Reset touch start to prevent multiple triggers
        touchStartY = touchY;
        
        if (deltaY > 0 && currentStep < steps.length) {
          // Swiping up, go to next step
          const nextStep = document.getElementById(`step-${currentStep + 1}`);
          if (nextStep) {
            nextStep.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        } else if (deltaY < 0 && currentStep > 1) {
          // Swiping down, go to previous step
          const prevStep = document.getElementById(`step-${currentStep - 1}`);
          if (prevStep) {
            prevStep.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      }
    };

    // Setup all event listeners and observers
    if (sectionRef.current) {
      enterObserver.observe(sectionRef.current);
      centerObserver.observe(sectionRef.current);
      
      // Monitor each step
      steps.forEach(step => {
        const element = document.getElementById(`step-${step.number}`);
        if (element) stepObserver.observe(element);
      });
      
      // Add event listeners for scroll control
      window.addEventListener('scroll', handleScroll, { passive: false });
      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('touchstart', handleTouchStart, { passive: false });
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    // Clean up
    return () => {
      enterObserver.disconnect();
      centerObserver.disconnect();
      stepObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [steps, sectionInView, sectionFullyVisible, hasSeenAllSteps]);

  return (
    <section 
      ref={sectionRef}
      id="how-it-works" 
      className={`bg-[#0D1117] relative h-screen overflow-hidden ${sectionInView ? 'section-active' : ''} ${sectionFullyVisible ? 'section-centered' : ''} ${hasSeenAllSteps ? 'all-steps-completed' : ''}`}
    >
      {/* Visual indicators for scroll progress */}
      <div className="absolute top-4 right-4 z-30 hidden md:flex gap-2 items-center">
        <div className={`h-2 w-2 rounded-full transition-colors duration-300 ${sectionFullyVisible ? 'bg-cyan-400' : 'bg-gray-600'}`}></div>
        <div className={`h-2 w-2 rounded-full transition-colors duration-300 ${activeStep >= 1 && sectionFullyVisible ? 'bg-cyan-400' : 'bg-gray-600'}`}></div>
        <div className={`h-2 w-2 rounded-full transition-colors duration-300 ${activeStep >= 2 ? 'bg-cyan-400' : 'bg-gray-600'}`}></div>
        <div className={`h-2 w-2 rounded-full transition-colors duration-300 ${activeStep >= 3 ? 'bg-cyan-400' : 'bg-gray-600'}`}></div>
        <div className={`h-2 w-2 rounded-full transition-colors duration-300 ${hasSeenAllSteps ? 'bg-cyan-400' : 'bg-gray-600'}`}></div>
      </div>

      {/* Fixed left side content */}
      <div className="absolute top-0 left-0 h-full w-full z-10 pointer-events-none hidden md:block">
        <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-6 flex items-center">
              <div className="pointer-events-auto max-w-md">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center mb-3 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm"
                >
                  <span className="text-cyan-400 text-xs font-medium tracking-wider uppercase">The Process</span>
                </motion.div>

                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold mb-6"
                >
                  How <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Blowout Protection</span> Works
                </motion.h2>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-gray-400 text-lg mb-8"
                >
                  A seamless integration powered by machine learning and advanced algorithms
                </motion.p>

                {/* Step Indicators */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="space-y-6 border-l-2 border-cyan-500/20 pl-6"
                >
                  {steps.map((navStep) => (
                    <div 
                      key={navStep.number}
                      onClick={() => scrollToStep(navStep.number)}
                      className={`flex items-center cursor-pointer group ${!sectionFullyVisible ? 'pointer-events-none' : ''}`}
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
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The steps container - only fully functional when section is fully visible */}
      <div 
        ref={stepsContainerRef}
        id="steps-container" 
        className={`h-screen w-full ${sectionFullyVisible ? 'snap-y snap-mandatory overflow-y-auto' : 'overflow-hidden'} scroll-smooth transition-all duration-500`}
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
                    animate={sectionFullyVisible && activeStep === step.number ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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
      
      {/* Scroll guide indicators */}
      {sectionFullyVisible && !hasSeenAllSteps && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center">
          <div className="text-cyan-400 text-sm mb-2">
            {activeStep < steps.length ? 'Scroll down to continue' : 'Continue to next section'}
          </div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-6 text-cyan-400"
          >
            ↓
          </motion.div>
        </div>
      )}
    </section>
  );
}