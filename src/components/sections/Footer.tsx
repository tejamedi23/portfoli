import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/tejamedi23', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/teja-medi', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:tejamedi23@gmail.com', label: 'Email' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <div className="text-xl font-playfair font-bold gradient-text mb-2">
              Teja
            </div>
            <p className="text-caption text-muted-foreground">
              © {currentYear} Teja. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-muted hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-caption text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};