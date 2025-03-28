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
    <section id="contact" className="py-20 bg-[#00C853]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Ready to Transform Your Platform?</h2>
            <p className="text-xl text-black/80 max-w-3xl mx-auto">
              Schedule a call with our team to learn more about TrueTIX Blowout Protection and how it can benefit your ticketing platform.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 p-8 md:p-12 bg-[#1A1A1A]">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6 text-gray-300">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <i className={`${item.icon} text-xl text-[#00C853] mt-1 mr-4`}></i>
                      <div>
                        <p className="font-semibold mb-1">{item.title}</p>
                        {item.link ? (
                          <a href={item.link} className="hover:text-[#00C853] transition-colors">
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
                    <a href="#" className="w-10 h-10 rounded-full bg-[#2A2A2A] flex items-center justify-center hover:bg-[#00C853] hover:text-black transition-all">
                      <i className="ri-linkedin-fill text-xl"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#2A2A2A] flex items-center justify-center hover:bg-[#00C853] hover:text-black transition-all">
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
                            <FormLabel className="text-gray-700">First Name</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C853]" 
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
                            <FormLabel className="text-gray-700">Last Name</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C853]" 
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
                          <FormLabel className="text-gray-700">Company</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C853]" 
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
                          <FormLabel className="text-gray-700">Email</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="email"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C853]" 
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
                          <FormLabel className="text-gray-700">Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="tel"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C853]" 
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
                          <FormLabel className="text-gray-700">Tell us about your platform</FormLabel>
                          <FormControl>
                            <Textarea 
                              {...field} 
                              rows={4}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C853]" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[#00C853] hover:bg-[#009624] text-black font-semibold py-3 px-6 rounded-md transition-colors"
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
