
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, X, Twitter, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically handle form submission
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-white section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolioNavy mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-portfolioPurple mx-auto mb-4"></div>
          <p className="text-portfolioGray max-w-2xl mx-auto">Have a project in mind or want to discuss potential opportunities? Feel free to reach out!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-portfolioNavy mb-6">Contact Information</h3>

            <div className="space-y-4 mb-8">
              <Card className="card-hover">
                <CardContent className="p-4 flex items-center">
                  <div className="p-3 bg-purple-100 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-portfolioPurple" />
                  </div>
                  <div>
                    <p className="text-sm text-portfolioGray">Email</p>
                    <a href="mailto:madayasser6@gmail.com" className="text-portfolioNavy font-medium hover:text-portfolioPurple transition-colors">
                      madayasser6@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-4 flex items-center">
                  <div className="p-3 bg-purple-100 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-portfolioPurple" />
                  </div>
                  <div>
                    <p className="text-sm text-portfolioGray">Phone</p>
                    <p className="text-portfolioNavy font-medium">+201061816662</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-4 flex items-center">
                  <div className="p-3 bg-purple-100 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-portfolioPurple" />
                  </div>
                  <div>
                    <p className="text-sm text-portfolioGray">Location</p>
                    <p className="text-portfolioNavy font-medium">Alexandria, Egypt</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-bold text-portfolioNavy mb-4">Social Profiles</h3>
            <div className="flex flex-wrap gap-3">
              <div className="inline-block">
                <a href="https://github.com/omara2001" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </a>
              </div>
              <div className="inline-block">
                <a href="https://huggingface.co/madayasser6" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.997 0C5.373 0 0 5.373 0 12.001c0 6.628 5.373 12 11.997 12C18.627 24 24 18.628 24 12.001 24 5.373 18.627 0 11.997 0zm.544 4.4c.232.001.446.123.567.324l5.022 8.318c.123.204.125.457.004.662-.12.205-.34.332-.576.333H7.428a.658.658 0 0 1-.574-.334.666.666 0 0 1 .004-.662l5.022-8.318a.658.658 0 0 1 .567-.324h.094zm-.005 2.402L8.762 12.75h6.469l-3.774-5.948h.079z"/>
                    </svg>
                    <span className="sr-only">HuggingFace</span>
                  </Button>
                </a>
              </div>
              <div className="inline-block">
                <a href="https://www.linkedin.com/in/mohamed-omara-aa351520b/" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </a>
              </div>
              <div className="inline-block">
                <a href="https://profile.indeed.com/" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.566 21.563v-8.962l3.147 8.962h3.635l-3.725-9.662 3.492-7.338h-3.704l-2.845 7.716v-7.716h-3.48v16.998h3.48zm-7.01 0h3.48v-16.998h-3.48v16.998z"/>
                    </svg>
                    <span className="sr-only">indeed</span>
                  </Button>
                </a>
              </div>
              <div className="inline-block">
                <a href="https://www.facebook.com/mohamed.yasser.944023" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                </a>
              </div>
              <div className="inline-block">
                <a href="https://www.instagram.com/mohamed_omara_21?igsh=a3c0NjY4MW0xMzRo&utm_source=qr" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </a>
              </div>
              <div className="inline-block">
                <a href="https://x.com/moomara21?s=21&t=16R6tbmdNigYD3aioa-aoA" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">X</span>
                  </Button>
                </a>
              </div>
              <div className="inline-block">
                <a href="https://wa.me/201061816662" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span className="sr-only">WhatsApp</span>
                  </Button>
                </a>
              </div>
              <div className="inline-block">
                <a href="https://t.me/Mohamed_omara21" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    <span className="sr-only">Telegram</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-portfolioNavy mb-6">Send Me a Message</h3>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-portfolioNavy">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-portfolioNavy">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-portfolioNavy">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can I help you?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-portfolioNavy">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="I'm interested in discussing a project..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-portfolioPurple hover:bg-portfolioAccent"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
















