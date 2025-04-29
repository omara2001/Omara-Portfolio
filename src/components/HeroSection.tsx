
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { handleHashLinkClick } from '@/lib/scrollUtils';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animate-delay-200"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-portfolioPurple font-medium text-lg mb-2 animate-fade-in">Software Engineer & Frontend Developer</h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-portfolioNavy mb-4 animate-fade-in animate-delay-100">
              Mohamed Yasser <br/> Ahmed Omara
            </h1>
            <p className="text-portfolioGray text-lg mb-6 max-w-lg animate-fade-in animate-delay-200">
              Software engineer specialized in frontend development and AI technologies. Currently working at Critical Future, crafting innovative solutions with modern tools.
            </p>

            <div className="flex gap-4 mb-8 animate-fade-in animate-delay-300">
              <a href="https://github.com/omara2001" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/mohamed-omara-aa351520b/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
              <a href="mailto:madayasser6@gmail.com">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </a>
            </div>

            <div className="animate-fade-in animate-delay-400">
              <a
                href="#about"
                onClick={(e) => handleHashLinkClick(e, 'about')}
              >
                <Button className="bg-portfolioPurple hover:bg-portfolioAccent text-white">
                  Learn More
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-scale-in">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-portfolioPurple to-blue-500 animate-pulse opacity-25"></div>
              <img
                src="./Assets/Omara.png"
                alt="Mohamed Omara"
                className="rounded-full w-full h-full object-cover border-4 border-white shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <a
          href="#about"
          className="text-portfolioNavy opacity-80 flex flex-col items-center"
          onClick={(e) => handleHashLinkClick(e, 'about')}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
