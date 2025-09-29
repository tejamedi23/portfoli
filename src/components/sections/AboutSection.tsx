import React, { useEffect, useState, useRef } from 'react';
import workspace from '@/assets/workspace.jpg';

const skills = [
  { name: 'UI/UX Design', level: 95 },
  { name: 'React/TypeScript', level: 90 },
  { name: 'Brand Identity', level: 85 },
  { name: 'Mobile Development', level: 80 },
  { name: 'Node.js/Backend', level: 75 },
  { name: 'Motion Design', level: 70 },
];

const SkillBar = ({ skill, isVisible }: { skill: typeof skills[0], isVisible: boolean }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level]);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-body font-medium">{skill.name}</span>
        <span className="text-caption">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-surface/50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <div className="lg:w-1/2 animate-slide-in-left">
            <div className="relative">
              <img
                src={workspace}
                alt="Creative workspace"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 animate-slide-in-right">
            <h2 className="text-headline gradient-text mb-6">
              Crafting Digital Excellence
            </h2>
            
            <div className="text-body text-muted-foreground mb-8 space-y-4">
              <p>
                With over 5 years of experience in the digital realm, I've had the privilege 
                of working with startups, agencies, and Fortune 500 companies to bring their 
                visions to life.
              </p>
              
              <p>
                My approach combines strategic thinking with creative execution. I believe 
                that great design isn't just about how something looks—it's about how it 
                works, how it feels, and how it solves real problems for real people.
              </p>
              
              <p>
                When I'm not designing or coding, you'll find me exploring new technologies, 
                mentoring aspiring designers, or planning my next adventure.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-title mb-6">Skills & Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-caption">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">25+</div>
                <div className="text-caption">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">5+</div>
                <div className="text-caption">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};