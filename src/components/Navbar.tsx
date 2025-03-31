
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Problem', href: '#problem' },
    { name: 'Solution', href: '#solution' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all-300",
        isScrolled ? "glass-effect py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#"
          className="flex items-center gap-2 text-navy hover:opacity-90 transition-all-200"
        >
          <div className="h-10 w-10 bg-gradient-to-br from-navy via-teal to-amber rounded-lg shadow-subtle flex items-center justify-center">
            <span className="text-white font-bold">D</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">DRISHTI</h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-navy/80 hover:text-navy transition-all-200 link-underline text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-navy hover:bg-navy-light text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all-200 shadow-subtle"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect rounded-b-lg">
          <div className="flex flex-col space-y-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-navy hover:text-teal transition-all-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-navy hover:bg-navy-light text-white font-medium px-6 py-2.5 rounded-full transition-all-200 shadow-subtle text-center mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
