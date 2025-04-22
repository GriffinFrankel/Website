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
    <section className="py-20 relative">
      {/* Tech-inspired background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827] to-[#0D1117]"></div>
      
      {/* Digital circuit pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0djItMmgtMnYtMmgydi0yaC0ydi0yaDJ2LTJoLTJ2LTJoMnYtMmgtMnYtMmgydi0yaC0ydi0yaC0ydjJoLTJ2LTJoLTJ2Mmh0di0yaC0ydjJoLTJ2Mmgydi0yaC0ydjJoLTJ2MmgydjJoLTJ2MmgydjJoLTJ2MmgydjJoLTJ2Mmgydj0yaDJ2LTJoMnYyaDJ2LTJoMnYtaC0ydi0yaDJ2LTJoLTJ2LTJoMnpNMiAyaDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="bg-[#111827]/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-cyan-500/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <img 
                src="/images/sports-fans-at-live-event-seo.jpg"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
                alt="Excited sports fans cheering with red flags at a live event"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#1A1A1A]/90 to-transparent md:hidden"></div>
            </div>
            <motion.div 
              className="p-8 md:p-12 flex flex-col justify-center"
              variants={fadeInUp}
            >
              <h3 className="text-3xl font-bold mb-4">
                Join Our 2025 <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">MLB Pilot Program</span>
              </h3>
              <p className="text-gray-300 mb-6">
                We're selecting a limited number of ticketing platforms to participate in our 2025 MLB season pilot. Partners will receive:
              </p>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <i className="ri-check-line text-cyan-400 text-xl"></i>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
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
