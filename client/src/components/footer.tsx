export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Partner Benefits", href: "#benefits" },
    { name: "Contact Us", href: "#contact" }
  ];
  
  const contactItems = [
    { icon: "ri-mail-line", text: "info@truetix.com", href: "mailto:info@truetix.com" },
    { icon: "ri-phone-line", text: "+1 (855) 2-TRUETIX", href: "tel:+18552TRUETIX" },
    { icon: "ri-map-pin-line", text: "New York, NY", href: null }
  ];

  return (
    <footer className="bg-[#1A1A1A] border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold tracking-tight">
                True<span className="text-[#00C853]">TIX</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionizing the sports ticketing experience with innovative protection for fans and new revenue streams for platforms.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#00C853] transition-colors">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00C853] transition-colors">
                <i className="ri-twitter-x-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00C853] transition-colors">
                <i className="ri-mail-fill text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-[#00C853] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              {contactItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <i className={`${item.icon} mr-2 text-[#00C853]`}></i>
                  {item.href ? (
                    <a href={item.href} className="hover:text-[#00C853] transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} TrueTIX. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-[#00C853] text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-[#00C853] text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
