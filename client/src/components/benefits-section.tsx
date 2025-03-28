import { motion } from "framer-motion";
import { fadeIn, staggerContainer, fadeInUp } from "@/lib/animations";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: "ri-line-chart-line",
      title: "Increased Sales Volume",
      description: "Partners report 15-25% higher conversion rates when Blowout Protection is offered during checkout, leading to more primary ticket sales.",
      secondaryIcon: "ri-arrow-up-circle-line",
      secondaryText: "Drive more primary ticket sales"
    },
    {
      icon: "ri-money-dollar-circle-line",
      title: "New Revenue Stream",
      description: "Earn up to 40% revenue share on each Blowout Protection add-on sold through your platform — with zero financial risk or liability.",
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
    <section id="benefits" className="py-20 bg-[#2A2A2A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner <span className="bg-gradient-to-r from-[#00E676] to-[#00C853] bg-clip-text text-transparent">Benefits</span>
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
              className="bg-[#1A1A1A] rounded-xl p-8 border border-gray-800 shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_10px_25px_-5px_rgba(0,200,83,0.1),0_8px_10px_-6px_rgba(0,200,83,0.1)]"
              variants={fadeInUp}
              custom={index * 0.15}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#00C853]/20 flex items-center justify-center text-[#00C853] mr-4">
                  <i className={`${benefit.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
              </div>
              <p className="text-gray-300 mb-6">
                {benefit.description}
              </p>
              <div className="flex items-center text-[#00C853]">
                <i className={`${benefit.secondaryIcon} text-2xl mr-2`}></i>
                <span className="font-medium">{benefit.secondaryText}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-[#00C853]/10 to-[#1A1A1A] rounded-xl p-8 border border-gray-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Partner Success Story</h3>
              <blockquote className="text-gray-300 mb-6 italic">
                "Implementing TrueTIX Blowout Protection increased our average order value by 18% while dramatically improving customer satisfaction. The integration was seamless, and our platform now stands out from competitors."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Partner testimonial" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Sarah Chen</p>
                  <p className="text-sm text-gray-400">VP of Product, Major Ticketing Platform</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80" 
                alt="Business partners handshake" 
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
