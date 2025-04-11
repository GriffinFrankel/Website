import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";

export default function MLBPilotSection() {
  const benefits = [
    "Priority integration support",
    "Enhanced revenue share",
    "Co-marketing opportunities",
    "Early access to future sport expansions"
  ];

  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-[#2A2A2A] rounded-2xl overflow-hidden shadow-xl border border-gray-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <img 
                src="./images/sports-fans-at-live-event-seo.jpg" 
                alt="Excited sports fans cheering with red rally towels" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#1A1A1A]/90 to-transparent md:hidden"></div>
            </div>
            <motion.div 
              className="p-8 md:p-12 flex flex-col justify-center"
              variants={fadeInUp}
            >
              <h3 className="text-3xl font-bold mb-4">
                Join Our 2025 <span className="bg-gradient-to-r from-[#38F902] to-[#21c100] bg-clip-text text-transparent">MLB Pilot Program</span>
              </h3>
              <p className="text-gray-300 mb-6">
                We're selecting a limited number of ticketing platforms to participate in our 2025 MLB season pilot. Partners will receive:
              </p>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <i className="ri-check-line text-[#38F902] text-xl mt-1 mr-3"></i>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="bg-[#38F902] hover:bg-[#21c100] text-black font-semibold py-3 px-8 rounded-md transition-all duration-300 text-lg w-full sm:w-auto shadow-[0_0_15px_rgba(56,249,2,0.3)] hover:shadow-[0_0_20px_rgba(56,249,2,0.5)]"
              >
                <a href="#contact">Apply for the Pilot Program</a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}