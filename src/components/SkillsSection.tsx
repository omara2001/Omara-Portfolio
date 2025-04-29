
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skills = {
    programming: [
      "JavaScript", "TypeScript", "HTML", "CSS", "Python", "Java", "SQL", "C#", "R", "C"
    ],
    frameworks: [
      "React", "Flutter", "Node.js", "Tailwind CSS", "Flowise", "n8n"
    ],
    dataScience: [
      "Pandas", "Scikit-learn", "Jupyter", "Numpy", "Matplotlib", "TensorFlow", "SAS"
    ],
    tools: [
      "Git", "Docker", "PowerBI", "Unity", "Minitab", "Kafka", "BeautifulSoup"
    ],
    aiTools: [
      "Flowise", "n8n", "LLM", "Chatflow", "Voice Chat", "AI Agents"
    ],
    other: [
      "Data Visualization", "Machine Learning", "Web Design", "Game Design", "Network Security", "Data Pipelines"
    ]
  };

  const getRandomColor = (index: number) => {
    const colors = [
      "bg-purple-100 text-purple-800",
      "bg-blue-100 text-blue-800",
      "bg-green-100 text-green-800",
      "bg-indigo-100 text-indigo-800",
      "bg-pink-100 text-pink-800",
      "bg-orange-100 text-orange-800",
      "bg-teal-100 text-teal-800",
      "bg-red-100 text-red-800",
      "bg-yellow-100 text-yellow-800",
      "bg-cyan-100 text-cyan-800"
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolioNavy mb-4">Skills & Abilities</h2>
          <div className="h-1 w-20 bg-portfolioPurple mx-auto mb-4"></div>
          <p className="text-portfolioGray max-w-2xl mx-auto">A comprehensive overview of my technical expertise and professional capabilities.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold text-portfolioNavy">Programming Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill, index) => (
                  <span key={skill} className={`skill-badge ${getRandomColor(index)}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold text-portfolioNavy">Frameworks & Libraries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <span key={skill} className={`skill-badge ${getRandomColor(index + 2)}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold text-portfolioNavy">Data Science</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.dataScience.map((skill, index) => (
                  <span key={skill} className={`skill-badge ${getRandomColor(index + 4)}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold text-portfolioNavy">Tools & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span key={skill} className={`skill-badge ${getRandomColor(index + 6)}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold text-portfolioNavy">AI Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.aiTools.map((skill, index) => (
                  <span key={skill} className={`skill-badge ${getRandomColor(index + 8)}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold text-portfolioNavy">Domain Knowledge</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.other.map((skill, index) => (
                  <span key={skill} className={`skill-badge ${getRandomColor(index + 10)}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
