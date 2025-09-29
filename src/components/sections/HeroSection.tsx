import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import headshot from '@/assets/headshot.jpg';

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${Math.random() * 10 + 15}s`,
          }}
        />
      ))}
    </div>
  );
};

export const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = "Creative Designer & Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-container">
      <ParticleBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-display gradient-text mb-6">
              Hello, I'm Alex Rivera
            </h1>
            
            <div className="text-title text-muted-foreground mb-8 h-8">
              {text}<span className="animate-pulse">|</span>
            </div>
            
            <p className="text-body text-muted-foreground mb-8 max-w-2xl">
              I craft digital experiences that blend aesthetic beauty with functional excellence. 
              From concept to deployment, I bring ideas to life through thoughtful design and 
              clean, efficient code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToPortfolio}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                View My Work
              </Button>
              
              <Button 
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden float-animation">
                <img
                  src={headshot}
                  alt="Alex Rivera - Creative Designer & Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse-glow" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-glow/30 rounded-full blur-lg animate-float" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};