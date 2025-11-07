import React, { useEffect, useState, useRef } from 'react';
import workspace from '@/assets/workspace.jpg';

const skills = [
  { name: 'UI/UX Design', level: 85 },
  { name: 'HTML/CSS/JavaScript', level: 90 },
  { name: 'MERN Stack', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'DSA', level: 75 },
  { name: 'React Development', level: 88 },
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
                I'm a passionate MERN stack learner and AI enthusiast from Hyderabad, Telangana, 
                eager to work with AI-based companies and contribute to cutting-edge technological solutions.
              </p>
              
              <p>
                My journey in development has been driven by a desire to create applications that make 
                a real difference. I believe in combining technical skills with creative problem-solving 
                to build solutions that are both functional and user-friendly.
              </p>
              
              <p>
                When I'm not coding, I'm exploring new AI technologies, learning advanced data structures 
                and algorithms, and staying updated with the latest trends in full-stack development.
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
                <div className="text-2xl font-bold text-primary mb-1">2+</div>
                <div className="text-caption">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">6+</div>
                <div className="text-caption">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-caption">Passion Driven</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};