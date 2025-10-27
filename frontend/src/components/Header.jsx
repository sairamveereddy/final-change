import React from 'react';
import { Phone, MapPin, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#003876] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                +91-9849664800
              </span>
              <span className="hidden md:flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Hyderabad & Pan India Service
              </span>
            </div>
            <div className="text-xs md:text-sm">
              25+ Years of Trust
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold text-[#003876]">
              VSR INSURANCE PLUS
            </h1>
            <p className="text-xs md:text-sm text-gray-600 mt-1">
              Trusted Life Insurance Advisor | LIC of India Since 2000
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-[#003876] transition-colors">
              Home
            </Link>
            <Link to="/lic-plans" className="text-gray-700 hover:text-[#003876] transition-colors">
              LIC Plans
            </Link>
            <Link to="/insurance-plans" className="text-gray-700 hover:text-[#003876] transition-colors">
              Insurance Plans
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#003876] transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#003876] transition-colors">
              Contact
            </Link>
            <a
              href="tel:+919849664800"
              className="bg-[#FFD700] text-[#003876] px-6 py-2 rounded font-semibold hover:bg-[#FFC700] transition-colors"
            >
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#003876]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-3">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#003876] py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/lic-plans"
              className="text-gray-700 hover:text-[#003876] py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              LIC Plans
            </Link>
            <Link
              to="/insurance-plans"
              className="text-gray-700 hover:text-[#003876] py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Insurance Plans
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-[#003876] py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-[#003876] py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:+919849664800"
              className="bg-[#FFD700] text-[#003876] px-6 py-2 rounded font-semibold text-center"
            >
              Call Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
