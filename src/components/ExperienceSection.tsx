
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer & Frontend Developer",
      company: "Critical Future",
      location: "London (Remote)",
      period: "Current",
      description: [
        "Develop AI-powered applications and automation tools using Flowise and n8n",
        "Created agent in Flowise for automated blog posting to WordPress sites",
        "Built chat applications with voice capabilities for AI interactions",
        "Developed data extraction tools for YouTube, Google News, and LinkedIn",
        "Designed and implemented UI for the LLM In A Box product"
      ],
      skills: ["AI", "Flowise", "n8n", "Flutter", "Frontend", "UI/UX"],
    },
    {
      id: 2,
      title: "Data Science Training",
      company: "Data Camp",
      location: "Alexandria, Egypt",
      period: "03/2024 - 04/2024",
      description: [
        "Focused on Data Science life cycle and applied Time series modeling",
        "Learned advanced data analysis and visualization techniques",
        "Worked with real-world datasets to solve business problems"
      ],
      skills: ["Data Science", "Time Series Analysis", "Data Visualization"],
    },
    {
      id: 3,
      title: "Security Training",
      company: "NTI",
      location: "Alexandria, Egypt",
      period: "08/2021 - 10/2021",
      description: [
        "Training covered networking fundamentals including routing and switching essentials",
        "Learned about network security and cybersecurity practices",
        "Studied Cisco Packet Tracer, networking essentials, and security protocols"
      ],
      skills: ["Network Security", "Cisco Packet Tracer", "Cybersecurity"],
    },
    {
      id: 4,
      title: "Internal Training",
      company: "Faculty of Computing and Data Science, Alexandria University",
      location: "Alexandria, Egypt",
      period: "08/2022 - 10/2022",
      description: [
        "Training focused on game design principles and Unity development",
        "Created various games including Ball game, Ping-pong game, and Terrain environments",
        "Learned about game mechanics, physics, and interactive design"
      ],
      skills: ["Unity", "Game Design", "C#", "3D Modeling"],
    }
  ];
  
  return (
    <section id="experience" className="py-20 bg-gray-50 section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolioNavy mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-portfolioPurple mx-auto mb-4"></div>
          <p className="text-portfolioGray max-w-2xl mx-auto">My journey through various roles and educational experiences.</p>
        </div>
        
        <div className="relative mt-14">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
          
          {/* Experience cards */}
          {experiences.map((exp, index) => (
            <div key={exp.id} className="mb-12 md:mb-20 relative">
              <div className={`md:flex ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-portfolioPurple border-4 border-white"></div>
                
                {/* Date indicator */}
                <div className="md:w-1/2 mb-4 md:mb-0 md:px-8">
                  <div className={`hidden md:flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <div className="bg-white shadow px-4 py-2 rounded-lg flex items-center text-portfolioNavy font-medium">
                      <Calendar className="h-4 w-4 mr-2 text-portfolioPurple" />
                      {exp.period}
                    </div>
                  </div>
                </div>
                
                {/* Experience card */}
                <div className="md:w-1/2 md:px-8">
                  <Card className="card-hover relative">
                    <div className="md:hidden absolute -top-3 left-4 bg-white shadow px-3 py-1 rounded-lg flex items-center text-portfolioNavy font-medium text-sm">
                      <Calendar className="h-3 w-3 mr-1 text-portfolioPurple" />
                      {exp.period}
                    </div>
                    
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl font-bold text-portfolioNavy">
                            {exp.title}
                          </CardTitle>
                          <div className="text-portfolioGray flex items-center mt-1">
                            <Briefcase className="h-4 w-4 mr-1" />
                            <span>{exp.company}</span>
                            {exp.location && (
                              <span className="ml-2 text-sm text-portfolioGray">({exp.location})</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="list-disc list-inside text-portfolioGray space-y-1 mb-4">
                        {exp.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-1 mt-3">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="bg-purple-50 border-purple-200">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-portfolioNavy mb-4">Education</h3>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h4 className="text-xl font-bold text-portfolioNavy">Bachelor's Degree in Data Science</h4>
                  <p className="text-portfolioGray">Faculty of Computing and Data Science, Alexandria University</p>
                </div>
                <Badge className="bg-portfolioPurple">10/2019 - 06/2023</Badge>
              </div>
            </CardContent>
          </Card>
          
          <h3 className="text-2xl font-bold text-portfolioNavy mb-4 mt-10">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Card className="card-hover">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-portfolioNavy">Cisco Cyber Security</h4>
                  <p className="text-sm text-portfolioGray">NTI</p>
                </div>
                <Badge variant="outline">10/2021</Badge>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-portfolioNavy">Data Engineer Track</h4>
                  <p className="text-sm text-portfolioGray">Data Camp</p>
                </div>
                <Badge variant="outline">03/2024</Badge>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-portfolioNavy">Data Science Course</h4>
                  <p className="text-sm text-portfolioGray">Udemy</p>
                </div>
                <Badge variant="outline">04/2024</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
