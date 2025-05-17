
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
      title: "AI Study Assistant",
      description: "Transform your study materials into effective learning tools with AI. Generate flashcards, summaries, quizzes, concept maps, and study guides instantly.",
      tags: ["AI", "Education", "Web Development", "React"],
      github: "https://github.com/omara2001/AI-Study-Assistant"
    },
    {
      id: 2,
      title: "Real-Time Code Explainer Tool",
      description: "Understand any code instantly with AI-powered line-by-line explanations. Perfect for code reviews, learning new languages, and understanding complex algorithms.",
      tags: ["AI", "Developer Tools", "Web Development", "JavaScript"],
      github: "https://github.com/omara2001/Real-Time-Code-Explainer-Tool"
    },
    {
      id: 3,
      title: "Paraphrasing & Plagiarism Checker",
      description: "A modern, responsive web application that helps students paraphrase text academically and check for plagiarism using Google's Gemini AI.",
      tags: ["AI", "Education", "Web Development", "Gemini API"],
      github: "https://github.com/omara2001/Paraphrasing-Plagiarism-Checker"
    },
    {
      id: 4,
      title: "Multi-Model AI Chatbot",
      description: "A versatile AI chatbot application that allows users to interact with multiple open-source AI models through a single, unified interface. Built with FastAPI for the backend and vanilla HTML, CSS, and JavaScript for the frontend.",
      tags: ["AI", "FastAPI", "JavaScript", "Chatbot"],
      github: "https://github.com/omara2001/Multi-Model-AI-Chatbot"
    },
    {
      id: 5,
      title: "PromptSphere - Prompt Engineering Tool",
      description: "A modern, user-friendly interface for interacting with powerful AI language models through the Groq API. With a clean design and intuitive controls, it makes AI text generation accessible to everyone.",
      tags: ["AI", "Prompt Engineering", "Web Development", "Groq API"],
      github: "https://github.com/omara2001/Prompt-Engineering-Tool"
    },
    {
      id: 6,
      title: "VisionAI - Image Recognition",
      description: "A modern, user-friendly frontend for image analysis powered by Google's Gemini Vision API. Upload any image and get detailed AI-generated descriptions and analysis.",
      tags: ["AI", "Computer Vision", "Web Development", "Gemini API"],
      github: "https://github.com/omara2001/Image-Recognition"
    },
    {
      id: 7,
      title: "Business Idea Validator Tool",
      description: "Transform your business ideas into actionable insights with AI-powered analysis. Get comprehensive market analysis, competitive insights, and financial projections in minutes.",
      tags: ["AI", "Business", "Web Development", "Analytics"],
      github: "https://github.com/omara2001/Business-Idea-Validator-Tool"
    },
    {
      id: 8,
      title: "Book & Movie Recommendation Tool",
      description: "Discover your next favorite book or movie with AI-powered personalized recommendations. Using Google's Gemini AI to understand your preferences and suggest perfect matches.",
      tags: ["AI", "Recommendation System", "Web Development", "Gemini API"],
      github: "https://github.com/omara2001/Book-Movie-Recommendation-Tool"
    },
    {
      id: 9,
      title: "CV Resume Generator & Checker Tool",
      description: "Create professional CVs with AI and analyze existing ones for improvements. Features AI-powered content generation, multiple export formats, style options, and real-time preview.",
      tags: ["AI", "Career Tools", "Web Development", "Gemini API", "Llama3"],
      github: "https://github.com/omara2001/CVResume-Generator-Checker-Tool"
    },
    {
      id: 10,
      title: "Telegram Bot Project",
      description: "Streamline conversations and amplify insights in real-time. Integrates Telegram bots with Apache Kafka for seamless message processing, real-time data streaming, and message analysis with visualization.",
      tags: ["Telegram API", "Kafka", "Data Streaming", "Analytics"],
      github: "https://github.com/omara2001/Telegram-bot-project"
    },
    {
      id: 11,
      title: "AI Psychologist",
      description: "A lightweight FastAPI backend with a static frontend that serves as a conversational bridge between user input and AI responses, specifically designed for a real-time AI psychologist web tool with speech-to-text capabilities.",
      tags: ["AI", "Mental Health", "FastAPI", "Speech Recognition", "Web Development"],
    },
    {
      id: 12,
      title: "LinkedIn Insights Tool",
      description: "A powerful web application that allows users to analyze company posts and engagement metrics from LinkedIn. Fetches and displays LinkedIn posts for any company, providing valuable insights into their social media performance.",
      tags: ["LinkedIn API", "Analytics", "Web Development", "Social Media"],
    },
    {
      id: 13,
      title: "AI Image Generator",
      description: "Create beautiful images from text descriptions with this fully responsive web application. Features include image download, fast generation powered by Stable Diffusion XL, real-time feedback, and cross-platform compatibility.",
      tags: ["AI", "Image Generation", "Stable Diffusion", "Web Development"],
    },
    {
      id: 14,
      title: "Google News Search",
      description: "A modern, responsive Google News search application with advanced filtering options. Features include keyword search, filtering by source domain and date range, responsive design, and a clean modern UI.",
      tags: ["Google API", "News", "Web Development", "Search Engine"],
    },
    
    {
      id: 15,
      title: "CF-Assistant",
      description: "An AI-powered voice assistant with features including voice recognition, text input, live voice chat, theme customization, chat history, multiple chat flows, file attachments, and voice settings customization.",
      tags: ["AI", "Voice Assistant", "Flutter", "Flowise", "Mobile App"],
    },
    {
      id: 16,
      title: "Flowise Blog Publishing Agent",
      description: "An AI agent built with Flowise that automatically generates and posts blog content to WordPress sites based on user-selected topics.",
      tags: ["AI", "Flowise", "WordPress", "Automation"]
    },
    {
      id: 17,
      title: "AI Email Assistant",
      description: "A Flutter application that connects with Flowise endpoints to check and send emails using natural language through chat and voice interfaces.",
      tags: ["Flutter", "Flowise", "Voice AI", "Email"]
    },
    {
      id: 18,
      title: "LLM In A Box UI",
      description: "Designed and implemented the user interface for Critical Future's 'LLM In A Box' product, focusing on user experience and accessibility.",
      tags: ["UI/UX", "Frontend", "LLM", "Design"]
    },
    {
      id: 19,
      title: "YouTube Data Extraction Tool",
      description: "A tool that extracts and analyzes data from YouTube videos and channels, providing valuable insights and metrics.",
      tags: ["Data Extraction", "YouTube API", "Analytics"]
    },
    {
      id: 20,
      title: "BDELHA Recommendation System",
      description: "Graduation project that keeps users in touch with their preferences by adding a recommendation system to the website using machine learning techniques.",
      tags: ["Machine Learning", "Recommendation System", "Web Development"]
    },
    {
      id: 21,
      title: "Ping Pong Game",
      description: "A simple game with a main menu panel, gaming sound, single player mode and scoring header implemented using Unity.",
      tags: ["Game Development", "Unity", "C#"],
      github: "https://github.com/omara2001/Ping-pong-Game"
    },
    {
      id: 22,
      title: "Covid-19-Analysis",
      description: "A data science project that analyzes COVID-19 pandemic statistics using Python. This Jupyter notebook repository examines trends in coronavirus cases, deaths, and recoveries through statistical analysis and data visualization.",
      tags: ["Data Science", "Jupyter Notebook", "Python"],
      github: "https://github.com/omara2001/Covid-19-Analysis"
    },
    {
      id: 23,
      title: "HealthBook - Appointment Booking Platform",
      description: "A modern, fully responsive, animated, and accessible appointment booking UI for a healthcare platform.",
      tags: ["UI/UX", "Frontend", "React Typescript", "Design"],
      github: "https://github.com/omara2001/HealthBook"
    },
    {
      id: 24,
      title: "Super-Market-Management-System",
      description: "A Java based GUI Management System for a Supermarket implemented using Object-Oriented Programming concepts and File Handling.",
      tags: ["Management System", "OOP", "Java"],
      github: "https://github.com/omara2001/Super-Market-Management-System"
    }
  ];

  const filters = ['All', 'AI', 'Education', 'Web Development', 'Gemini API', 'Developer Tools', 'Recommendation System', 'Computer Vision', 'FastAPI', 'Prompt Engineering', 'Data Science', 'Frontend', 'Game Development', 'Management System', 'Career Tools', 'Mental Health', 'Voice Assistant', 'Image Generation', 'Flutter', 'Telegram API', 'LinkedIn API', 'Google API', 'YouTube API'];

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
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-block">
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-2 pointer-events-none" />
                      GitHub
                    </Button>
                  </a>
                )}

                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2 pointer-events-none" />
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
          <a href="https://github.com/omara2001" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button className="bg-portfolioPurple hover:bg-portfolioAccent">
              <Github className="h-5 w-5 mr-2 pointer-events-none" />
              See More on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
