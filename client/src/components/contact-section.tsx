import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Twitter, Cpu, Terminal, Send } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  async function onSubmit(data: ContactFormData) {
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Form submitted!",
        description: "Thank you for your interest! Our team will contact you shortly.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your form could not be submitted. Please try again.",
        variant: "destructive"
      });
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 flex-shrink-0" />,
      title: "Email",
      content: "info@truetix.com",
      link: "mailto:info@truetix.com"
    },
    {
      icon: <Phone className="w-5 h-5 flex-shrink-0" />,
      title: "Phone",
      content: "+1 (855) 2-TRUETIX",
      link: "tel:+18552TRUETIX"
    },
    {
      icon: <MapPin className="w-5 h-5 flex-shrink-0" />,
      title: "Location",
      content: "New York, NY",
      link: undefined
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Tech-inspired background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a101f] to-[#111827]"></div>

      {/* Digital circuit pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0djItMmgtMnYtMmgydi0yaC0ydjJoLTJ2LTJoMnYtMmgtMnYtMmgydi0yaC0ydjJoLTJ2Mmgydi0yaC0ydjJoLTJ2MmgydjJoLTJ2Mmgydj0yaDJ2LTJoMnYyaDJ2LTJoMnYtaC0ydi0yaDJ2LTJoLTJ2LTJoMnpNMiAyaDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      {/* Accent glows */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[100px]"
          animate={{ 
            y: [0, 50, 0],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-[-200px] left-[-100px] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[100px]"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <div className="inline-flex items-center justify-center mb-3 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
              <span className="text-cyan-400 text-xs font-medium tracking-wider uppercase">API Integration</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Transform</span> Your Platform?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with our engineering team to learn about our SDK, API documentation, and implementation strategy.
            </p>
          </motion.div>

          <motion.div 
            className="rounded-2xl shadow-2xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 p-8 md:p-12 bg-[#0a101f]/90 backdrop-blur-sm border-y border-l border-cyan-500/10 rounded-l-2xl relative">
                {/* Tech corner accents */}
                <div className="absolute top-0 left-0 w-12 h-[1px] bg-cyan-500/30"></div>
                <div className="absolute top-0 left-0 w-[1px] h-12 bg-cyan-500/30"></div>
                <div className="absolute bottom-0 left-0 w-12 h-[1px] bg-cyan-500/30"></div>
                <div className="absolute bottom-0 left-0 w-[1px] h-12 bg-cyan-500/30"></div>

                <div className="relative">
                  <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-8"></div>

                  <div className="space-y-8 text-gray-300">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start group">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mr-4 text-cyan-400 shadow-[0_0_10px_rgba(8,145,178,0.15)] group-hover:bg-cyan-500/20 transition-colors border border-cyan-500/30">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-cyan-300 font-semibold mb-1">{item.title}</p>
                          {item.link ? (
                            <a href={item.link} className="hover:text-cyan-400 transition-colors">
                              {item.content}
                            </a>
                          ) : (
                            <p>{item.content}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech decorations */}
                  <div className="absolute bottom-4 right-4 opacity-10">
                    <svg width="160" height="80" viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0" y="0" width="160" height="80" fill="none" />
                      <path d="M10 10 H150 V70 H10 Z" stroke="rgba(8,145,178,0.5)" strokeWidth="1" fill="none" strokeDasharray="5,5" />
                      <circle cx="10" cy="10" r="2" fill="rgba(8,145,178,0.5)" />
                      <circle cx="150" cy="10" r="2" fill="rgba(8,145,178,0.5)" />
                      <circle cx="10" cy="70" r="2" fill="rgba(8,145,178,0.5)" />
                      <circle cx="150" cy="70" r="2" fill="rgba(8,145,178,0.5)" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 p-8 md:p-12 bg-[#111827]/90 backdrop-blur-sm border border-cyan-500/10 rounded-r-2xl">

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">First Name</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="w-full px-4 py-2 bg-[#0a101f]/70 border border-cyan-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent text-white" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Last Name</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="w-full px-4 py-2 bg-[#0a101f]/70 border border-cyan-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent text-white" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Company</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="w-full px-4 py-2 bg-[#0a101f]/70 border border-cyan-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent text-white" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Email</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="email"
                              className="w-full px-4 py-2 bg-[#0a101f]/70 border border-cyan-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent text-white" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="tel"
                              className="w-full px-4 py-2 bg-[#0a101f]/70 border border-cyan-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent text-white" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Tell us about your platform</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              rows={4}
                              className="w-full px-4 py-2 bg-[#0a101f]/70 border border-cyan-500/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent text-white" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(8,145,178,0.3)] hover:shadow-[0_0_20px_rgba(8,145,178,0.5)] transform hover:translate-y-[-2px]"
                      disabled={form.formState.isSubmitting}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {form.formState.isSubmitting ? (
                          <>Processing<span className="inline-block w-4 ml-1">...</span></>
                        ) : (
                          <>
                            <span>Schedule API Demo</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </div>
                    </Button>

                    {/* Tech decoration - form validation status */}
                    <div className="mt-4 flex justify-end items-center text-xs text-cyan-500/70">
                      <div className="flex items-center">
                        <span className="mr-2 font-mono">STATUS:</span>
                        <span className="inline-block h-2 w-2 rounded-full bg-cyan-500 mr-1.5 animate-pulse"></span>
                        <span>FORM READY</span>
                      </div>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}