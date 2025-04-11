import { motion } from "framer-motion";
import { fadeIn, staggerContainer, fadeInUp } from "@/lib/animations";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: "ri-line-chart-line",
      title: "Increased Sales Volume",
      description: "Partners see higher conversion rates when Blowout Protection is offered during checkout, leading to more primary ticket sales.",
      secondaryIcon: "ri-arrow-up-circle-line",
      secondaryText: "Drive more primary ticket sales"
    },
    {
      icon: "ri-money-dollar-circle-line",
      title: "New Revenue Stream",
      description: "Earn a share of each Blowout Protection add-on sold through your platform — with zero financial risk or liability.",
      secondaryIcon: "ri-funds-line",
      secondaryText: "Zero-risk additional revenue"
    },
    {
      icon: "ri-user-heart-line",
      title: "Enhanced Fan Loyalty",
      description: "Fans appreciate the added security of Blowout Protection, leading to higher satisfaction rates, repeat purchases, and platform loyalty.",
      secondaryIcon: "ri-repeat-line",
      secondaryText: "Increase repeat customers"
    },
    {
      icon: "ri-award-line",
      title: "Competitive Advantage",
      description: "Be among the first platforms to offer this innovative feature, setting your service apart from competitors and attracting new customers.",
      secondaryIcon: "ri-rocket-line",
      secondaryText: "Stand out in the market"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Partner <span className="bg-gradient-to-r from-[#38F902] to-[#21c100] bg-clip-text text-transparent">Benefits</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our 2025 MLB pilot program and transform your ticketing platform
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-[#1A1A1A] rounded-xl p-8 border border-gray-800 shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_25px_-5px_rgba(56,249,2,0.1),0_8px_10px_-6px_rgba(56,249,2,0.1)] hover:border-[#38F902]/20"
              variants={fadeInUp}
              custom={index * 0.15}
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#38F902]/10 flex items-center justify-center text-[#38F902] mr-4 shadow-[0_0_15px_rgba(56,249,2,0.15)]">
                  <i className={`${benefit.icon} text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
              </div>
              <p className="text-gray-300 mb-6">
                {benefit.description}
              </p>
              <div className="flex items-center text-[#38F902]">
                <i className={`${benefit.secondaryIcon} text-2xl mr-2`}></i>
                <span className="font-medium">{benefit.secondaryText}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}
