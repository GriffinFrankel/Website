import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is Blowout Protection?",
      answer: "Blowout Protection is an innovative add-on service that provides fans with a 50% rebate on their ticket purchase if the game ends with a run differential of 5 or more. It's designed to enhance the fan experience and increase ticket sales for our partners."
    },
    {
      question: "How does the integration process work?",
      answer: "Integration is simple through our API. Our technical team works directly with your developers to ensure a seamless implementation process, typically completed within 2-3 weeks. We provide comprehensive documentation, testing environments, and dedicated support throughout the process."
    },
    {
      question: "How are rebates processed and funded?",
      answer: "TrueTIX handles all aspects of rebate processing. When a game qualifies as a blowout, our system automatically processes rebates and distributes them to eligible fans within 24 hours. Rebates are entirely funded by TrueTIX - partners have zero financial liability."
    },
    {
      question: "What percentage of MLB games end in blowouts?",
      answer: "Based on historical data from 2015-2023, approximately 26% of MLB games end with a run differential of 5 or more. Our pricing model accounts for this frequency to ensure sustainable operations while providing valuable protection to fans."
    },
    {
      question: "Can we customize the implementation for our platform?",
      answer: "Absolutely. We work with each partner to design an integration that fits their unique platform and user experience. This includes customizable pricing models, branding options, and flexible implementation approaches."
    },
    {
      question: "How does the revenue share model work?",
      answer: "Partners earn up to 40% of each Blowout Protection premium sold through their platform. Revenue is shared on a monthly basis, creating a new income stream with no associated costs or risks. Pilot program partners may qualify for enhanced revenue share terms."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#0F0F0F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-[#38F902] to-[#21c100] bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about TrueTIX Blowout Protection
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800 shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800 py-2">
                <AccordionTrigger className="text-left font-medium hover:text-[#38F902] transition-colors duration-200 py-4 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-8 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-300 mb-6">
              Still have questions about how TrueTIX can work with your platform?
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-[#38F902] hover:bg-[#21c100] text-black font-semibold py-3 px-8 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(56,249,2,0.3)] hover:shadow-[0_0_20px_rgba(56,249,2,0.5)]"
            >
              Contact Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}