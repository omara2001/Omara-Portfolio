
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-portfolioNavy text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold font-heading">
              Mohamed<span className="text-portfolioPurple">Omara</span>
            </h2>
            <p className="mt-1 text-gray-300">Software Engineer & Frontend Developer</p>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
              href="https://github.com/omara2001" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohamed-omara-aa351520b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:madayasser6@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-2 bg-portfolioPurple rounded-full hover:bg-portfolioAccent transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Mohamed Yasser Ahmed Omara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
