import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Cpu, Database, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Partner Benefits", href: "#benefits" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact Us", href: "#contact" }
  ];
  
  const contactItems = [
    { 
      icon: <Mail className="w-4 h-4" />, 
      text: "info@truetix.com", 
      href: "mailto:info@truetix.com" 
    },
    { 
      icon: <Phone className="w-4 h-4" />, 
      text: "+1 (855) 2-TRUETIX", 
      href: "tel:+18552TRUETIX" 
    },
    { 
      icon: <MapPin className="w-4 h-4" />, 
      text: "New York, NY", 
      href: null 
    }
  ];

  const technologies = [
    { name: "AI-Powered", icon: <Cpu className="w-4 h-4" /> },
    { name: "Big Data", icon: <Database className="w-4 h-4" /> },
    { name: "256-bit Encrypted", icon: <Shield className="w-4 h-4" /> }
  ];

  return (
    <footer className="relative bg-[#0a101f] border-t border-cyan-500/10 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0djItMmgtMnYtMmgydi0yaC0ydi0yaDJ2LTJoLTJ2LTJoMnYtMmgtMnYtMmgydi0yaC0ydi0yaC0ydjJoLTJ2LTJoLTJ2Mmgtdi0yaC0ydjJoLTJ2Mmgydi0yaC0ydjJoLTJ2MmgydjJoLTJ2MmgydjJoLTJ2MmgydjJoLTJ2Mmgydj0yaDJ2LTJoMnYyaDJ2LTJoMnYtaC0ydi0yaDJ2LTJoLTJ2LTJoMnpNMiAyaDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      {/* Accent glow */}
      <div className="absolute -top-20 right-0 w-1/3 h-40 bg-cyan-500/5 blur-[100px] rounded-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <motion.div 
            className="md:col-span-2"
            variants={fadeInUp}
          >
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <div className="relative p-2">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md group-hover:bg-cyan-500/30 transition-colors duration-300"></div>
                <span className="text-2xl font-bold tracking-tight relative">
                  True<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">TIX</span>
                </span>
              </div>
            </a>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Revolutionizing the sports ticketing experience with innovative tech-powered protection for fans and data-driven revenue streams for platforms.
            </p>
            
            
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Quick Links</span>
              <div className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent"></div>
            </h4>
            <ul className="space-y-3 pl-0">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-cyan-500/40 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Contact</span>
              <div className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent"></div>
            </h4>
            <ul className="space-y-4 text-gray-400">
              {contactItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-8 h-8 bg-cyan-500/10 rounded-full flex items-center justify-center mr-3 text-cyan-400">
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a href={item.href} className="hover:text-cyan-400 transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        
        {/* Newsletter signup - tech style */}
        <motion.div
          className="mt-16 p-6 bg-gradient-to-r from-[#0f172a] to-[#0a101f] rounded-xl border border-cyan-500/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:flex justify-between items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h4 className="text-xl font-bold mb-2">Stay updated with TrueTIX</h4>
              <p className="text-gray-400">Get the latest updates on our technology and features</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-[#111827]/50 border border-cyan-500/10 rounded-md focus:outline-none focus:border-cyan-500/40 text-gray-300"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-md hover:opacity-95 transition-opacity whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
        
        <div className="border-t border-cyan-500/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0 flex items-center">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
            &copy; {currentYear} TrueTIX. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">Data Processing</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
