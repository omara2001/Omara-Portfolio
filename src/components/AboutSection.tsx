
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolioNavy mb-4">About Me</h2>
          <div className="h-1 w-20 bg-portfolioPurple mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-portfolioGray">
              I'm a <span className="font-semibold text-portfolioNavy">Software Engineer and Frontend Developer</span> with expertise in modern AI technologies. Currently working at Critical Future in London remotely, I craft innovative solutions that leverage the latest tools and frameworks.
            </p>
            <p className="text-lg text-portfolioGray">
              My background in data science and frontend development enables me to build intelligent applications that solve real-world problems. I have extensive experience with AI tools like Flowise and n8n for creating agents and automated workflows.
            </p>
            <p className="text-lg text-portfolioGray">
              I graduated from Faculty of Computing and Data Science at Alexandria University with a Bachelor's degree in Data Science, which provided me with strong foundations in statistical analysis, data visualization, and database management.
            </p>
            <p className="text-lg text-portfolioGray">
              When I'm not coding, I enjoy exploring new technologies and contributing to innovative projects that push the boundaries of what's possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <Card className="card-hover">
              <CardContent className="p-6 flex gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-portfolioPurple" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-portfolioNavy mb-2">Professional Developer</h3>
                  <p className="text-portfolioGray">Working at Critical Future, developing advanced AI-powered applications and tools for business automation.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6 flex gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Code className="h-6 w-6 text-portfolioPurple" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-portfolioNavy mb-2">AI Enthusiast</h3>
                  <p className="text-portfolioGray">Creating intelligent automation flows, chatbots, and AI-powered assistants using modern tools like Flowise and n8n.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6 flex gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <User className="h-6 w-6 text-portfolioPurple" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-portfolioNavy mb-2">Data Scientist</h3>
                  <p className="text-portfolioGray">Applying statistical analysis, machine learning, and data visualization skills to extract valuable insights.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
