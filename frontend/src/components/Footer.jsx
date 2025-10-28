import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2c3e50] text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">VSR INSURANCE PLUS</h3>
            <p className="text-gray-300 text-sm mb-4">
              Trusted Life Insurance Advisor with LIC of India since 2000. Over 25 years of proven guidance helping families protect wealth and plan for the future.
            </p>
            <p className="text-sm text-gray-300">
              Founder: V.S. Reddy<br />
              SVR LIC Services
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/lic-plans" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  LIC Plans
                </Link>
              </li>
              <li>
                <Link to="/insurance-plans" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  HDFC ERGO Plans
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Life Insurance</li>
              <li>Retirement Planning</li>
              <li>Pension Plans</li>
              <li>Child Education Plans</li>
              <li>Health Insurance</li>
              <li>Motor Insurance</li>
              <li>Travel Insurance</li>
              <li>Home Insurance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Call or WhatsApp:</p>
                  <a href="tel:+919849664800" className="text-[#FFD700] hover:underline">
                    +91-9849664800
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p>Hyderabad, India</p>
                  <p className="text-gray-400">Pan India Service Available</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">For enquiries, call us at</p>
                  <p className="text-[#FFD700]">+91-9849664800</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm mb-3">Follow Us:</p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 bg-[#003876] rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#003876] transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-[#003876] rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#003876] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-[#003876] rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#003876] transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-[#003876] rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#003876] transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} VSR INSURANCE PLUS. All Rights Reserved.
            </p>
            <p>
              For any queries, Call or WhatsApp V.S. Reddy at{' '}
              <a href="tel:+919849664800" className="text-[#FFD700] hover:underline">
                +91-9849664800
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
