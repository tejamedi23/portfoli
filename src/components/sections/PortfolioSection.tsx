import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const projects = [
  {
    id: 1,
    title: 'Library Management System',
    description: 'A comprehensive library management application developed as a college mini project. Features book cataloging, member management, and automated borrowing/return tracking with an intuitive interface.',
    image: project1,
    category: 'Web Development',
    tags: ['MERN Stack', 'MongoDB', 'React', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Carbon Footprint Tracker',
    description: 'A health-conscious application designed to help users track and reduce their carbon footprint. Provides personalized insights and actionable recommendations for sustainable living.',
    image: project2,
    category: 'Web Development',
    tags: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
];

const categories = ['All', 'Web Development'];

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-headline gradient-text mb-4">
            Featured Work
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my passion for creating 
            exceptional digital experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className="rounded-full px-6 py-2 transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card animate-fade-in-up ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-white">
                    <div className="flex gap-3 mb-4">
                      <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge className="text-xs bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-title mb-3">{project.title}</h3>
                <p className="text-body text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};