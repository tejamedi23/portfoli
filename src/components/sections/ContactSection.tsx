import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

// EmailJS config — get these from https://dashboard.emailjs.com after creating
// a free account, an Email Service, and an Email Template. See README for steps.
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tejamedi23@gmail.com',
    href: 'mailto:tejamedi23@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9347562325',
    href: 'tel:+919347562325',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Hyderabad, Telangana',
    href: '#',
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast({
        title: "Contact form not configured",
        description: "EmailJS keys are missing. Add them to your .env file (see README).",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try emailing me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-surface/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-headline gradient-text mb-4">
            Let's Work Together
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-title mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => {
                const isClickable = item.href !== '#';
                const Wrapper = isClickable ? 'a' : 'div';
                return (
                  <Wrapper
                    key={index}
                    {...(isClickable ? { href: item.href } : {})}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-xl bg-background transition-all duration-300 group",
                      isClickable && "hover:bg-muted hover:scale-105"
                    )}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-caption text-muted-foreground">{item.label}</div>
                      <div className="text-body font-medium">{item.value}</div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary-glow/10 p-6 rounded-2xl">
              <h4 className="text-title mb-3">Why Work With Me?</h4>
              <ul className="space-y-2 text-body text-muted-foreground">
                <li>• Fast turnaround times</li>
                <li>• Clear communication throughout</li>
                <li>• Quality-focused approach</li>
                <li>• Post-launch support included</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="focus-ring"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="focus-ring"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  className="focus-ring"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};