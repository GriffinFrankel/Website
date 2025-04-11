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
      icon: "ri-mail-line",
      title: "Email",
      content: "partnerships@truetix.com",
      link: "mailto:partnerships@truetix.com"
    },
    {
      icon: "ri-phone-line",
      title: "Phone",
      content: "+1 (855) 2-TRUETIX",
      link: "tel:+18552TRUETIX"
    },
    {
      icon: "ri-map-pin-line",
      title: "Location",
      content: "New York, NY",
      link: undefined
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] to-[#0a0a0a]" style={{backgroundImage: 'url("/attached_assets/sports-fans-at-live-event-seo.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2}}>
        <div className="absolute inset-0 bg-[#38F902]/10"></div>
      </div>
      
      {/* Animated shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div 
          className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#38F902]/5 blur-[100px]"
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
          className="absolute bottom-[-200px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#38F902]/5 blur-[100px]"
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to <span className="bg-gradient-to-r from-[#38F902] to-[#21c100] bg-clip-text text-transparent">Transform</span> Your Platform?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Schedule a call with our team to learn more about TrueTIX Blowout Protection and how it can benefit your ticketing platform.
            </p>
          </motion.div>

          <motion.div 
            className="bg-black/70 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 p-8 md:p-12 bg-[#0F0F0F]">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-8 text-gray-300">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-10 h-10 rounded-lg bg-[#38F902]/10 flex items-center justify-center mr-4 text-[#38F902] shadow-[0_0_10px_rgba(56,249,2,0.15)] group-hover:bg-[#38F902]/20 transition-colors">
                        <i className={`${item.icon} text-xl`}></i>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">{item.title}</p>
                        {item.link ? (
                          <a href={item.link} className="hover:text-[#38F902] transition-colors">
                            {item.content}
                          </a>
                        ) : (
                          <p>{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12">
                  <h4 className="font-semibold mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#38F902] hover:text-black transition-all shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                      <i className="ri-linkedin-fill text-xl"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#38F902] hover:text-black transition-all shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                      <i className="ri-twitter-x-fill text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3 p-8 md:p-12">
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
                                className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38F902] focus:border-transparent text-white" 
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
                                className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38F902] focus:border-transparent text-white" 
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
                              className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38F902] focus:border-transparent text-white" 
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
                              className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38F902] focus:border-transparent text-white" 
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
                              className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38F902] focus:border-transparent text-white" 
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
                              className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38F902] focus:border-transparent text-white" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[#38F902] hover:bg-[#21c100] text-black font-semibold py-3 px-6 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(56,249,2,0.3)] hover:shadow-[0_0_20px_rgba(56,249,2,0.5)] transform hover:translate-y-[-2px]"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? "Submitting..." : "Schedule a Call"}
                    </Button>
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
