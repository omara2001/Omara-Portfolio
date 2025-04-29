
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  link?: string;
  image?: string;
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Flowise Blog Publishing Agent",
      description: "An AI agent built with Flowise that automatically generates and posts blog content to WordPress sites based on user-selected topics.",
      tags: ["AI", "Flowise", "WordPress", "Automation"],
      
    },
    {
      id: 2,
      title: "AI Email Assistant",
      description: "A Flutter application that connects with Flowise endpoints to check and send emails using natural language through chat and voice interfaces.",
      tags: ["Flutter", "Flowise", "Voice AI", "Email"],
      
    },
    {
      id: 3,
      title: "LLM In A Box UI",
      description: "Designed and implemented the user interface for Critical Future's 'LLM In A Box' product, focusing on user experience and accessibility.",
      tags: ["UI/UX", "Frontend", "LLM", "Design"],
      
    },
    {
      id: 4,
      title: "YouTube Data Extraction Tool",
      description: "A tool that extracts and analyzes data from YouTube videos and channels, providing valuable insights and metrics.",
      tags: ["Data Extraction", "YouTube API", "Analytics"],
      
    },
    {
      id: 5,
      title: "BDELHA Recommendation System",
      description: "Graduation project that keeps users in touch with their preferences by adding a recommendation system to the website using machine learning techniques.",
      tags: ["Machine Learning", "Recommendation System", "Web Development"],
      
    },
    {
      id: 6,
      title: "Ping Pong Game",
      description: "A simple game with a main menu panel, gaming sound, single player mode and scoring header implemented using Unity.",
      tags: ["Game Development", "Unity", "C#"],
      github: "https://github.com/omara2001/Ping-pong-Game"
    },
    {
      id: 7,
      title: "Covid-19-Analysis",
      description: "A data science project that analyzes COVID-19 pandemic statistics using Python. This Jupyter notebook repository examines trends in coronavirus cases, deaths, and recoveries through statistical analysis and data visualization. Created by GitHub user omara2001, the project demonstrates practical application of data science techniques to understand global health data during the pandemic.",
      tags: ["Data Science", "Jupyter Notebook", "python"],
      github: "https://github.com/omara2001/Covid-19-Analysis"
    },
    {
      id: 8,
      title: "HealthBook - Appointment Booking Platform",
      description: "A modern, fully responsive, animated, and accessible appointment booking UI for a healthcare platform.",
      tags: ["UI/UX", "Frontend", "React Typescript", "Design"],
      github: "https://github.com/omara2001/HealthBook"
    },
    {
      id: 9,
      title: "Super-Market-Management-System",
      description: "A Java based GUI Management System for a Supermarket implemented using Object-Oriented Programming concepts and File Handling.",
      tags: ["Management System", "oop", "Java"],
      github: "https://github.com/omara2001/Super-Market-Management-System"
    }
  ];
  
  const filters = ['All', 'AI', 'Flowise', 'Flutter', 'Data Science', 'Frontend', 'Game Development', 'Management System'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));
    
  return (
    <section id="projects" className="py-20 bg-white section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolioNavy mb-4">Recent Projects</h2>
          <div className="h-1 w-20 bg-portfolioPurple mx-auto mb-4"></div>
          <p className="text-portfolioGray max-w-2xl mx-auto">Here are some of the projects I've worked on. For more, visit my GitHub profile.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <Button 
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`mb-2 ${activeFilter === filter ? 'bg-portfolioPurple hover:bg-portfolioAccent' : ''}`}
            >
              {filter}
            </Button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="card-hover overflow-hidden">
              <CardHeader className="p-4 border-b">
                <CardTitle className="text-xl font-bold text-portfolioNavy">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="p-4">
                <p className="text-portfolioGray mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-gray-100">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0 flex justify-between">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  </a>
                )}
                
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live
                    </Button>
                  </a>
                )}
                
                {!project.link && !project.github && (
                  <Button variant="outline" size="sm" disabled>Private Project</Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="https://github.com/omara2001" target="_blank" rel="noopener noreferrer">
            <Button className="bg-portfolioPurple hover:bg-portfolioAccent">
              <Github className="h-5 w-5 mr-2" />
              See More on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
