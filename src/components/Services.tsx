import { useState, useEffect } from "react";
import {
  Car,
  Heart,
  Home,
  Building2,
  Truck,
  Gift,
  ArrowRight,
  MessageCircle,
  ChevronDown,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 0,
    title: "Seguro Automóvel",
    description:
      "Para veículos de uso particular ou comercial — com coberturas personalizadas e assistência 24h.",
    icon: Car,
  },
  {
    id: 1,
    title: "Seguros Residenciais e Empresariais",
    description:
      "Proteção completa para imóveis e negócios contra riscos imprevisíveis, com coberturas sob medida.",
    icon: Home,
  },
  {
    id: 2,
    title: "Seguro de Vida e Acidentes Pessoais",
    description:
      "Cuidado com o futuro de quem mais importa, garantindo segurança financeira em momentos difíceis.",
    icon: Heart,
  },
  {
    id: 3,
    title: "Responsabilidade Civil Profissional",
    description:
      "Voltado para médicos, advogados, engenheiros e outros profissionais que buscam proteção contra imprevistos da atividade.",
    icon: Building2,
  },
  {
    id: 4,
    title: "Seguro para Frota e Transporte",
    description:
      "Soluções completas para empresas que desejam proteger sua operação logística e seus veículos.",
    icon: Truck,
  },
  {
    id: 5,
    title: "Planos de Proteção e Benefícios",
    description:
      "Assistências, serviços e vantagens exclusivas para oferecer mais tranquilidade no dia a dia.",
    icon: Gift,
  },
  {
    id: 6,
    title: "Consórcios e Financiamentos",
    description:
      "Opções inteligentes para planejar a realização de sonhos materiais com segurança e flexibilidade.",
    icon: DollarSign,
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5511941119972?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seguros.",
      "_blank"
    );
  };

  const currentService = services[activeService];

  return (
    <section
      id="services"
      className="pt-24 pb-12 relative overflow-hidden bg-navy-dark text-white"
    >
      <style>
        {`
          @keyframes pulseShadow {
            0%, 100% { box-shadow: 0 0 20px rgba(255, 212, 71, 0.15); }
            50% { box-shadow: 0 0 35px rgba(255, 212, 71, 0.35); }
          }
          .animate-pulse-shadow {
            animation: pulseShadow 3s ease-in-out infinite;
          }
        `}
      </style>

      <div className="container mx-auto px-6 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos <span className="text-secondary">Serviços</span>
          </h2>
          <p className="text-xl text-white">
            Todas as soluções são trabalhadas com consultoria personalizada,
            clareza de informações e acompanhamento completo antes, durante e
            após a contratação — garantindo que o cliente tenha suporte de
            verdade, quando ele mais precisa.
          </p>
        </div>
        {/* Seção principal */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center max-w-7xl mx-auto relative">
          {/* Divisória central (desktop apenas) */}

          {/* Lado esquerdo - órbitas */}
          <div
            className="relative flex items-center justify-center sm:justify-start pl-0 sm:pl-12 lg:pl-20 overflow-visible"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Wrapper com posição relativa — importante no mobile */}
            <div className="relative w-full flex items-center justify-center min-h-[360px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[520px]">
              {/* Anéis */}
              <div className="relative flex items-center justify-center w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px]">
                <div className="absolute inset-0 rounded-full border border-white/10 animate-rotate-slow "></div>

                <div
                  className="absolute inset-6 rounded-full border border-white/10 animate-rotate-slow"
                  style={{ animationDirection: "reverse" }}
                ></div>

                {/* Ícone central */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/10 p-8 rounded-full border border-white/20 animate-pulse-shadow">
                    <currentService.icon className="w-14 h-14 text-secondary" />
                  </div>
                </div>

                {/* Ícones orbitando */}
                {services.map((service, index) => {
                  const screenWidth =
                    typeof window !== "undefined" ? window.innerWidth : 1024;
                  const radius =
                    screenWidth < 380
                      ? 150
                      : screenWidth < 480
                        ? 150
                        : screenWidth < 640
                          ? 140
                          : 230;

                  const angle =
                    (index * 360) / services.length +
                    activeService * (-360 / services.length);
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  const isActive = index === activeService;

                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(index)}
                      className={`absolute transition-all duration-500 ${isActive
                        ? "scale-125 z-10"
                        : "opacity-60 hover:opacity-100 hover:scale-110"
                        }`}
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                        left: "50%",
                        top: "50%",
                        marginLeft: "-24px",
                        marginTop: "-24px",
                      }}
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isActive
                          ? "bg-secondary text-white"
                          : "bg-white/10 text-white/70"
                          }`}
                      >
                        <service.icon className="w-5 h-5" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Lado direito - cartão */}
          <div
            key={activeService}
            className="bg-white text-navy-dark rounded-2xl p-6 sm:p-10 shadow-strong animate-fade-in transition-all w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto sm:mt-0 z-20"
          >

            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/10 rounded-full border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.2)] animate-pulse-soft">
                <currentService.icon className="w-14 h-14 text-secondary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">{currentService.title}</h3>
            </div>

            <p className="text-base sm:text-lg text-navy-medium leading-relaxed mb-8 text-justify">
              {currentService.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <Button
                size="lg"
                className="bg-secondary text-white hover:bg-secondary/90 w-full sm:w-auto"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-5 h-5" />
                Fale no WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-navy-light text-navy-dark hover:bg-navy-light/5 w-full sm:w-auto"
              >
                Saiba mais
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Indicadores de serviços */}
            <div className="flex justify-center gap-3 pt-2 flex-wrap">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeService
                    ? "bg-secondary w-8"
                    : "bg-navy-medium/30 hover:bg-navy-medium/50"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
