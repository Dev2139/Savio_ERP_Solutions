import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const erpModules = [
  'Inventory Management',
  'Finance & Accounting',
  'Human Resources',
  'Customer Relationship',
  'Supply Chain',
  'Manufacturing',
];

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src="https://res.cloudinary.com/dsddldquo/image/upload/v1766252828/vztkaqjmbpr5ernaekqk.png" alt="Savio ERP Logo" className="h-20 w-auto" />
            </Link>
            <p className="text-footer-foreground/70 text-sm leading-relaxed">
              Empowering businesses with comprehensive ERP solutions that streamline operations and drive growth.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-footer-foreground/10 flex items-center justify-center hover:bg-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-footer-foreground/10 flex items-center justify-center hover:bg-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-footer-foreground/10 flex items-center justify-center hover:bg-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-footer-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-footer-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ERP Modules */}
          <div>
            <h4 className="font-semibold text-footer-foreground mb-4">ERP Modules</h4>
            <ul className="space-y-3">
              {erpModules.map((module) => (
                <li key={module}>
                  <Link
                    to="/savio-erp"
                    className="text-footer-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {module}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-footer-foreground mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-footer-foreground/70 text-sm">
                  516,517,518 - Samrudhdhi Business Hub,<br />
                  Opp. Hanspura,<br />
                  Near Naroda Business Hub,<br />
                  Near S.P.Ring road Circle,Naroda. <br />
                  Ahmedabad - 382330. Gujarat-India.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+919687276300" className="text-footer-foreground/70 hover:text-primary transition-colors text-sm">
                  +91 9687276300
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@savioerp.com" className="text-footer-foreground/70 hover:text-primary transition-colors text-sm">
                  info@savioerp.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-footer-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-footer-foreground/60 text-sm">
            © {new Date().getFullYear()} Savio ERP. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-footer-foreground/60 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-footer-foreground/60 hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
