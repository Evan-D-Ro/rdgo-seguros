import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logoRdgo from "@/assets/logo-rdgo.png";
import logoRdgoPB from "@/assets/logo-rdgo-pb.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Detecta scroll para mudar estilo
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detecta seção visível (como na sua JN Navbar)
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisibleSection = null;
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            mostVisibleSection = entry.target.id;
            maxRatio = entry.intersectionRatio;
          }
        });

        if (mostVisibleSection) setActiveSection(mostVisibleSection);
      },
      { threshold: Array.from({ length: 11 }, (_, i) => i / 10) } // thresholds 0, 0.1, 0.2 ... 1
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);


  // Scroll suave ao clicar
  const handleScrollTo = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    const offset = 100;

    if (element) {
      const position = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: position, behavior: "smooth" });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Notícias", href: "#news" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511941119972", "_blank");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen
        ? "bg-white shadow-md py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <a href="#hero" onClick={() => handleScrollTo("#hero")} className="flex items-center">
            <img
              src={isScrolled ? logoRdgo : logoRdgoPB}
              alt="RDGO Seguros"
              className="h-20 w-auto object-contain transition-all duration-500"
            />
          </a>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleScrollTo(link.href)}
                className={`relative font-medium transition-all duration-300 
                  ${activeSection === link.href.replace("#", "")
                    ? isScrolled
                      ? "text-secondary"
                      : "text-secondary"
                    : isScrolled
                      ? "text-navy-dark hover:text-secondary"
                      : "text-white hover:text-secondary"
                  }
                  after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-secondary 
                  after:transition-all after:duration-300 ${activeSection === link.href.replace("#", "")
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                  }`}
              >
                {link.label}
              </button>
            ))}

            {/* Botão CTA */}
            <Button
              className="ml-4 bg-secondary hover:bg-secondary/90 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-transform hover:scale-105"
              onClick={handleWhatsAppClick}
            >
              <Phone className="mr-2 h-4 w-4" />
              Fale Conosco
            </Button>
          </div>

          {/* Botão mobile */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-navy-dark" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-navy-dark" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 animate-fade-in">
            <div className="container mx-auto px-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleScrollTo(link.href)}
                  className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-all ${activeSection === link.href.replace("#", "")
                    ? "bg-secondary/10 text-secondary"
                    : "text-navy-dark hover:text-secondary"
                    }`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                className="w-full bg-secondary hover:bg-secondary/90 text-white"
                onClick={() => {
                  handleWhatsAppClick();
                  setIsMobileMenuOpen(false);
                }}
              >
                <Phone className="mr-2 h-4 w-4" />
                Fale Conosco
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
