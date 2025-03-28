import { motion } from "framer-motion";
import { fadeIn, staggerContainer, fadeInUp } from "@/lib/animations";

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Easy Integration",
      description: "Our API connects seamlessly with your ticketing platform, offering Blowout Protection as a premium add-on during checkout.",
      icon: "ri-plug-line",
      text: "Simple API implementation"
    },
    {
      number: 2,
      title: "Fan Experience",
      description: "Fans pay a small premium for Blowout Protection. If their game ends with a 5+ run difference, they receive a 50% rebate automatically.",
      icon: "ri-user-smile-line",
      text: "Automatic fan rebates"
    },
    {
      number: 3,
      title: "Revenue Share",
      description: "Platforms earn a percentage of every Blowout Protection add-on sold, creating a new revenue stream with zero financial risk.",
      icon: "ri-money-dollar-circle-line",
      text: "New profit center"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How <span className="bg-gradient-to-r from-[#38F902] to-[#21c100] bg-clip-text text-transparent">Blowout Protection</span> Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A seamless integration that creates value for fans and platforms alike
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              className="bg-[#2A2A2A] rounded-xl p-8 border border-gray-800 shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_25px_-5px_rgba(56,249,2,0.1),0_8px_10px_-6px_rgba(56,249,2,0.1)]"
              variants={fadeInUp}
              custom={index * 0.2}
            >
              <div className="w-12 h-12 rounded-full bg-[#38F902] flex items-center justify-center text-black font-bold text-xl mb-6 shadow-[0_0_15px_rgba(56,249,2,0.3)]">{step.number}</div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-300 mb-4">
                {step.description}
              </p>
              <div className="flex items-center text-[#38F902]">
                <i className={`${step.icon} text-2xl mr-2`}></i>
                <span className="font-medium">{step.text}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-gradient-to-r from-[#2A2A2A] to-[#1A1A1A] p-8 rounded-xl border border-gray-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          custom={0.6}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Game Day Experience</h3>
              <p className="text-gray-300 mb-6">
                After the game, our system automatically processes eligible rebates and delivers them directly to fans. No manual claims or paperwork needed.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="ri-check-line text-[#38F902] text-xl mt-1 mr-3"></i>
                  <span>Instant rebate notifications</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-[#38F902] text-xl mt-1 mr-3"></i>
                  <span>Automatic processing</span>
                </li>
                <li className="flex items-start">
                  <i className="ri-check-line text-[#38F902] text-xl mt-1 mr-3"></i>
                  <span>No integration maintenance required</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1562077772-3bd90403f7f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Baseball game in action" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
