import { motion } from "framer-motion";
import { fadeIn, staggerContainer, fadeInUp } from "@/lib/animations";
import { BarChart2, DollarSign, Heart, Award, TrendingUp, Repeat, Rocket } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Increased Sales Volume",
      description: "Partners see higher conversion rates when Blowout Protection is offered during checkout, leading to more primary ticket sales.",
      secondaryIcon: <TrendingUp className="w-5 h-5" />,
      secondaryText: "Drive more primary ticket sales"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "New Revenue Stream",
      description: "Earn a share of each Blowout Protection add-on sold through your platform — with zero financial risk or liability.",
      secondaryIcon: <DollarSign className="w-5 h-5" />,
      secondaryText: "Zero-risk additional revenue"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Enhanced Fan Loyalty",
      description: "Fans appreciate the added security of Blowout Protection, leading to higher satisfaction rates, repeat purchases, and platform loyalty.",
      secondaryIcon: <Repeat className="w-5 h-5" />,
      secondaryText: "Increase repeat customers"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Competitive Advantage",
      description: "Be among the first platforms to offer this innovative feature, setting your service apart from competitors and attracting new customers.",
      secondaryIcon: <Rocket className="w-5 h-5" />,
      secondaryText: "Stand out in the market"
    }
  ];

  return (
    <section id="benefits" className="relative py-20 overflow-hidden">
      {/* Tech-inspired background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] to-[#111827]"></div>
      
      {/* Digital circuit pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0djItMmgtMnYtMmgydi0yaC0ydi0yaDJ2LTJoLTJ2LTJoMnYtMmgtMnYtMmgydi0yaC0ydi0yaC0ydjJoLTJ2LTJoLTJ2Mmh0di0yaC0ydjJoLTJ2Mmgydi0yaC0ydjJoLTJ2MmgydjJoLTJ2MmgydjJoLTJ2MmgydjJoLTJ2Mmgydj0yaDJ2LTJoMnYyaDJ2LTJoMnYtaC0ydi0yaDJ2LTJoLTJ2LTJoMnpNMiAyaDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      {/* Accent glows */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-2/3 h-1/3 bg-cyan-500/5 blur-[100px] rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="inline-flex items-center justify-center mb-3 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
            <span className="text-cyan-400 text-xs font-medium tracking-wider uppercase">Platform Integration</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Partner <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Benefits</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our 2025 MLB pilot program and transform your ticketing platform
          </p>
          
          {/* Tech decoration lines */}
          <div className="mt-8 w-full max-w-xl mx-auto relative h-12">
            <div className="absolute left-0 top-0 w-1/3 h-[1px] bg-gradient-to-r from-cyan-500/80 to-cyan-500/0"></div>
            <div className="absolute right-0 top-0 w-1/3 h-[1px] bg-gradient-to-l from-cyan-500/80 to-cyan-500/0"></div>
            <div className="absolute left-1/2 top-0 w-[1px] h-12 bg-gradient-to-b from-cyan-500/80 to-cyan-500/0"></div>
          </div>
        </motion.div>
          
        {/* Benefits terminal-style container */}
        <div className="mb-20 max-w-5xl mx-auto">
          <div className="bg-[#0a101f]/90 backdrop-blur-sm rounded-xl border border-cyan-500/20 shadow-[0_0_30px_rgba(8,145,178,0.1)] overflow-hidden">
            {/* Benefits grid */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="relative bg-[#0a101f]/80 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/10 shadow-lg 
                      transition-all duration-300 hover:translate-y-[-5px] group
                      hover:shadow-cyan-500/20 hover:shadow-xl hover:border-cyan-400/40 hover:bg-[#0c1425]"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ 
                      duration: 0.5,
                      delay: index * 0.1
                    }}
                  >
                    {/* Tech corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-[1px] bg-cyan-500/30 group-hover:bg-cyan-400/50 transition-colors duration-300"></div>
                    <div className="absolute top-0 left-0 w-[1px] h-8 bg-cyan-500/30 group-hover:bg-cyan-400/50 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-cyan-500/30 group-hover:bg-cyan-400/50 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-cyan-500/30 group-hover:bg-cyan-400/50 transition-colors duration-300"></div>
                    
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mr-4 shadow-[0_0_15px_rgba(8,145,178,0.15)]
                        group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:text-black
                        transition-all duration-300 group-hover:border-cyan-400">
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white
                        group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent
                        transition-all duration-300">{benefit.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">
                      {benefit.description}
                    </p>
                    <div className="flex items-center text-cyan-400 bg-cyan-500/5 py-2 px-4 rounded-lg border border-cyan-500/20 w-fit">
                      <span className="mr-2">{benefit.secondaryIcon}</span>
                      <span className="font-medium text-sm">{benefit.secondaryText}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
            
        {/* Tech stats for added visual interest */}
        <motion.div 
          className="mb-10 bg-gradient-to-r from-[#0a101f]/90 to-[#111827]/90 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/10 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-4">Platform Performance Metrics</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-cyan-400 text-3xl md:text-4xl font-bold mb-2">16%</div>
              <p className="text-sm text-gray-300">MLB Blowout Game Rate</p>
            </div>
            <div className="p-4">
              <div className="text-cyan-400 text-3xl md:text-4xl font-bold mb-2">+24%</div>
              <p className="text-sm text-gray-300">Partner Profit Per Ticket</p>
            </div>
            <div className="p-4">
              <div className="text-cyan-400 text-3xl md:text-4xl font-bold mb-2">Jun-25</div>
              <p className="text-sm text-gray-300">Target Launch Date</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
