
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from 'react-router-dom';
import { handleHashLinkClick } from '@/lib/scrollUtils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', section: 'home' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Skills', href: '#skills', section: 'skills' },
    { name: 'Projects', href: '#projects', section: 'projects' },
    { name: 'Experience', href: '#experience', section: 'experience' },
    { name: 'Contact', href: '#contact', section: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              type="button"
              className="text-portfolioNavy font-heading font-bold text-xl bg-transparent border-none cursor-pointer"
              onClick={() => {
                const element = document.getElementById('home');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '#home');
                }
              }}
            >
              Mohamed<span className="text-portfolioPurple">Omara</span>
            </button>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    type="button"
                    className="nav-link text-portfolioNavy hover:text-portfolioPurple font-medium transition-colors bg-transparent border-none cursor-pointer"
                    onClick={() => {
                      const element = document.getElementById(link.section);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, '', link.href);
                      }
                    }}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-portfolioNavy"
            >
              <Menu />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  type="button"
                  className="block w-full text-left px-3 py-2 text-portfolioNavy hover:text-portfolioPurple hover:bg-gray-50 rounded-md font-medium bg-transparent border-none cursor-pointer"
                  onClick={() => {
                    const element = document.getElementById(link.section);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                      window.history.pushState(null, '', link.href);
                      setMobileMenuOpen(false);
                    }
                  }}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
