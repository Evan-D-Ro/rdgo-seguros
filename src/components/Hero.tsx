import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import TypewriterText from "./TypewriterText";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [heroSlide1, heroSlide2, heroSlide3];

  const typingPhrases = [
    "sua família",
    "seu negócio",
    "seu patrimônio",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511941119972", "_blank");
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              src={slide}
              alt={`RDGO Proteção ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-transparent"></div>
      </div>

      {/* Animated Patterns */}
      <div className="absolute inset-0 pattern-dots opacity-20 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            A proteção que <TypewriterText phrases={typingPhrases} /> precisa
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Transformamos tecnologia e cuidado humano em segurança completa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={handleWhatsAppClick}
            >
              <Phone className="mr-2 h-5 w-5" />
              Fale com um especialista
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white bg-white text-primary hover:bg-white/90 hover:text-navy-dark text-lg px-8 py-6 transition-all"
              onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicite sua cotação
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
