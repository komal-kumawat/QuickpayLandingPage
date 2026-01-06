import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="py-6" style={{ backgroundColor: "#101011ff", color: "#f9fafb" }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm" style={{ color: "#d1d5db" }}>
          &copy; {new Date().getFullYear()} QuickPay. All rights reserved.
        </p>

        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{ backgroundColor: "#1f2937" }}
            >
              <social.icon className="w-4 h-4 text-gray-400 hover:text-white" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
