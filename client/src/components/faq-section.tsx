import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare, Cpu, Zap, DatabaseZap, LayersIcon, PieChart } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is Blowout Protection?",
      answer: "Blowout Protection is an AI-driven risk management service that provides fans with a 50% rebate on their ticket purchase if the game ends with a run differential of 5 or more. It's designed to enhance the fan experience and increase ticket sales for our partners through predictive analytics.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      question: "How does the integration process work?",
      answer: "Integration is simple through our RESTful API. Our engineering team works directly with your developers to ensure a seamless implementation process, typically completed within 2-3 weeks. We provide comprehensive documentation, sandbox environments, and dedicated DevOps support throughout the process.",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      question: "How are rebates processed and funded?",
      answer: "TrueTIX handles all aspects of rebate processing through our automated cloud-based system. When a game qualifies as a blowout, our algorithm automatically processes rebates and distributes secure redemption links to eligible fans. Rebates are entirely funded by TrueTIX - ticketing partners have zero financial liability.",
      icon: <DatabaseZap className="w-5 h-5" />
    },
    {
      question: "What percentage of MLB games end in blowouts?",
      answer: "Based on our big data analysis from 2015-2023, approximately 16% of MLB games meet our 2025 MLB Pilot criteria for a blowout. Our machine learning pricing model accounts for this frequency to ensure sustainable operations while providing valuable protection to fans.",
      icon: <PieChart className="w-5 h-5" />
    },
    {
      question: "Can we customize the implementation for our platform?",
      answer: "Absolutely. We work with each partner to design a modular integration that fits their unique platform architecture and user experience. This includes customizable microservices, white-labeling options, and flexible implementation approaches based on your tech stack.",
      icon: <LayersIcon className="w-5 h-5" />
    },
    {
      question: "How does the revenue share model work?",
      answer: "Partners earn up to 10% of each Blowout Protection add-on sold through their platform. Revenue is tracked in real-time through our partner dashboard and distributed on a monthly basis, creating a new data-driven income stream with no associated costs or risks. Pilot program partners may qualify for enhanced revenue share algorithms.",
      icon: <MessageSquare className="w-5 h-5" />
    }
  ];

  return (
    <section id="faq" className="py-20 relative">
      {/* Tech-inspired background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a101f] to-[#0D1117]"></div>
      
      {/* Digital circuit pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0djItMmgtMnYtMmgydi0yaC0ydi0yaDJ2LTJoLTJ2LTJoMnYtMmgtMnYtMmgydi0yaC0ydi0yaC0ydjJoLTJ2LTJoLTJ2Mmh0di0yaC0ydjJoLTJ2Mmgydi0yaC0ydjJoLTJ2MmgydjJoLTJ2MmgydjJoLTJ2MmgydjJoLTJ2Mmgydj0yaDJ2LTJoMnYyaDJ2LTJoMnYtaC0ydi0yaDJ2LTJoLTJ2LTJoMnpNMiAyaDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      {/* Accent glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-1/2 h-1/3 bg-cyan-500/5 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="inline-flex items-center justify-center mb-3 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
            <span className="text-cyan-400 text-xs font-medium tracking-wider uppercase">Technical Documentation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technical specifications and implementation details
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-[#0a101f]/80 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/10 shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-b border-cyan-500/10 py-2"
              >
                <AccordionTrigger className="text-left font-medium hover:text-cyan-400 transition-colors duration-200 py-4 text-lg group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                      {faq.icon}
                    </div>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6 pt-2 pl-11">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 pt-6 border-t border-cyan-500/10">
            <div className="bg-gradient-to-r from-[#111827]/70 to-[#0a101f]/70 rounded-lg p-6 border border-cyan-500/10 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h4 className="text-xl font-bold mb-2 text-white">Need more technical details?</h4>
                  <p className="text-gray-300">
                    Our engineering team can provide API documentation and implementation guides
                  </p>
                </div>
                <a 
                  href="#contact" 
                  className="whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                >
                  Contact Our Team
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}