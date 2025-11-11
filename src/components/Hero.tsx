import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useState } from "react";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import TypewriterText from "./TypewriterText";

const Hero = () => {
  const [currentSlide] = useState(0);
  const slides = [heroSlide3];

  const typingPhrases = ["sua família", "seu negócio", "seu patrimônio", "você"];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511941119972", "_blank");
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <img src={slide} alt={`RDGO Proteção ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl animate-fade-in">
          <h1
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-bold text-white leading-tight
              mb-4 animate-slide-up
              flex flex-wrap items-center gap-2
              transition-all duration-300
              font-[Sango Rounded]
            "
          >
            A proteção que{" "}
            <h1 className="inline-flex items-baseline leading-tight text-inherit font-[Sango Rounded] mb-2">
              <TypewriterText phrases={typingPhrases} />
            </h1>{" "}
            precisa
          </h1>

          <p
            className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Transformamos tecnologia e cuidado humano em segurança completa.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
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
              className="bg-white text-primary hover:bg-white/90 hover:text-navy-dark text-lg px-8 py-6 transition-all"
              onClick={() => document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })}
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
