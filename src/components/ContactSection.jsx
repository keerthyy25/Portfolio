import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_xmeo1bm",
        "template_m9pc9jg",
        form.current,
        "qH3QV5ZKRbASd470B"
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          setIsSubmitting(false);
          form.current.reset();
        },
        () => {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again.",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-indigo-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* 🌈 Enhanced Heading with Multiple Effects */}
        <div className="text-center mb-16 relative">
          {/* Glow effect behind text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-24 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-indigo-600/20 blur-3xl rounded-full"></div>
          </div>
          
          {/* Main heading */}
          <h2 className="relative text-4xl md:text-6xl font-extrabold mb-4 
            bg-gradient-to-br from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent
            drop-shadow-[0_4px_30px_rgba(255,255,255,0.25)] tracking-wide
            hover:scale-105 transition-transform duration-500"
            style={{
              WebkitBackgroundClip: "text",
              backgroundClip: "text"
            }}>
            Get In <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">Touch</span>
          </h2>
          
          {/* Decorative lines */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-500"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
            <div className="h-px w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-500"></div>
          </div>
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 relative">
            {/* Glass morphism background for contact info */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl shadow-2xl"></div>
            <div className="relative z-10 p-8">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">
                Contact Information
              </h3>
              <div className="space-y-6 justify-center">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:keerthikamk04@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    keerthikamk04@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+916381924205"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 6381924205
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">
                    Cuddalore, TamilNadu, India
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8 text-center">
                            <h4 className="font-medium mb-4 text-purple-300">Connect With Me</h4>
              <div className="flex justify-center space-x-4 flex-wrap">
                <a
                  href="https://www.linkedin.com/in/keerthika-k-572097321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-400 hover:from-blue-500 hover:to-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/keerthyy._____/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-r from-pink-500/20 to-rose-600/20 text-pink-400 hover:from-pink-500 hover:to-rose-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/keerthyy25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-r from-gray-500/20 to-gray-600/20 text-gray-400 hover:from-gray-500 hover:to-gray-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
            </div>
          </div>

          <div className="relative">
            {/* Glass morphism background for form */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl shadow-2xl"></div>
            <div className="relative z-10 p-8">
              <h3 className="text-2xl font-semibold mb-6 text-pink-300">
                Send a Message
              </h3>
              <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-purple-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-purple-500/20 bg-black/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Eg: Keerthika..."
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-purple-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-purple-500/20 bg-black/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Eg: keerthi@gmail.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-purple-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-purple-500/20 bg-black/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
