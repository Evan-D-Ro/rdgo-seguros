import {
  ShieldCheck,
  Zap,
  HeartHandshake,
  UsersRound,
  Target,
  Trophy,
} from "lucide-react";

import { useState, useEffect } from "react";

import aboutTeam from "@/assets/equipe.jpg";
import fachada from "@/assets/fachada.png";
import escritorio from "@/assets/escritorio.jpg";

const About = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Confiança em Primeiro Lugar",
      description:
        "Construímos relações sólidas, transparentes e baseadas em confiança real com cada cliente.",
    },
    {
      icon: Zap,
      title: "Juventude que Move",
      description:
        "Nossa cultura jovem traduz energia, ousadia e vontade de fazer diferente todos os dias.",
    },
    {
      icon: HeartHandshake,
      title: "Cuidado Humano",
      description:
        "Cada cliente é único, cada proteção importa, e cada relação é construída com empatia e propósito.",
    },
    {
      icon: UsersRound,
      title: "Parceria de Verdade",
      description:
        "Atuamos lado a lado com seguradoras, clientes e equipe, com presença e colaboração genuínas.",
    },
    {
      icon: Target,
      title: "Disciplina e Atitude GO",
      description:
        "Foco, energia e execução fazem parte do nosso DNA — sempre com propósito e direção.",
    },
    {
      icon: Trophy,
      title: "Meritocracia e Reconhecimento",
      description:
        "Valorizamos conquistas, celebramos resultados e reconhecemos quem faz a diferença.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [aboutTeam, fachada, escritorio];

  // troca automática a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-navy-dark mb-6 leading-tight">
            Sobre a <span className="text-secondary">RDGO</span>
          </h2>
          <p className="max-w-3xl text-lg text-foreground/80 leading-relaxed">
            Na RDGO, acreditamos que proteger vai muito além de vender seguros —
            é sobre conectar pessoas à tranquilidade que precisam.
            Há mais de 20 anos, unimos tecnologia, agilidade e cuidado humano
            para simplificar o acesso à proteção patrimonial e de vida,
            transformando o seguro em algo simples, acessível e transparente.

          </p>
          <p className="max-w-3xl text-lg text-foreground/80 mt-6 leading-relaxed">
            Nossa proposta é clara: <strong>entregar confiança, inovação e proximidade </strong>
            em cada atendimento. Mais do que proteção, oferecemos relacionamentos de valor,
            baseados em clareza, empatia e resultados reais.
            Cada cliente é único, cada conquista é celebrada e cada proteção importa.
          </p>

          <p className="max-w-3xl text-lg text-foreground/80 mt-6 leading-relaxed">
            Nos diferenciamos por unir <strong>agilidade digital e proximidade humana </strong>
            em cada etapa do processo. Enquanto o mercado se prende a modelos tradicionais,
            a RDgo segue em movimento, com uma cultura jovem, energia contagiante e
            comprometimento de verdade — a fim de criar relações duradouras
            e transformar clientes em parceiros de jornada.
          </p>
        </div>

        {/* Frase de impacto */}
        <blockquote className="text-2xl md:text-3xl font-medium italic text-navy-dark/90 mb-20 border-t-2 border-b-2 py-2 border-secondary text-center md:border-0 px-2 md:py-0 md:pl-0">
          “Proteção não é sobre seguros. É sobre gente. É sobre você.”
        </blockquote>

        {/* Imagem e texto lado a lado equilibrados */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-strong order-1 lg:order-none h-[480px]">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Equipe RDGO ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
              />
            ))}

            {/* Gradiente de overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/30 to-transparent"></div>

            {/* Indicadores (bolinhas) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-secondary scale-110" : "bg-white/50 hover:bg-white/70"
                    }`}
                ></button>
              ))}
            </div>

          </div>


          <div className="space-y-6 text-left order-2 lg:order-none">
            <div className="p-6 bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-xl border-l-4 border-secondary hover-lift transition-all">
              <h3 className="text-xl font-bold text-navy-dark mb-2">
                Nossa Missão
              </h3>
              <p className="text-foreground/80 text-justify">
                Conectar pessoas à proteção que precisam, de forma ágil,
                transparente e inovadora. Na RDGO, transformamos leads em
                relações de confiança, unindo tecnologia, cuidado humano e
                alta performance em vendas, para gerar prosperidade
                sustentável para clientes, parceiros e equipe
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl border-l-4 border-accent hover-lift transition-all">
              <h3 className="text-xl font-bold text-navy-dark mb-2">
                Nossa Visão
              </h3>
              <p className="text-foreground/80 text-justify">
                Ser a corretora de seguros digital mais confiável e inovadora do
                Brasil, referência em experiência humana e tecnológica, capaz
                de transformar a proteção em um ato simples, transparente e
                de valor para clientes, parceiros e colaboradores
              </p>
            </div>
          </div>
        </div>

        <section className="relative mt-24 py-12 bg-gradient-to-b from-navy-dark via-navy-dark/95 to-navy-dark/90 text-white rounded-3xl overflow-hidden shadow-strong">
          {/* Efeito de fundo */}

          <div className="relative z-10 container mx-auto px-6 text-center">
            {/* Título */}
            <div className="mb-14">
              <h3 className="text-4xl md:text-5xl font-extrabold mb-4 bg-primary-foreground from-secondary via-white to-accent bg-clip-text text-transparent">
                Nossos Valores
              </h3>
              <div className="mx-auto w-24 h-1 bg-secondary from-secondary to-accent rounded-full mb-6"></div>
              <p className="max-w-2xl mx-auto text-foreground/80 text-white/80 leading-relaxed">
                Somos movidos por energia, cuidado e propósito.
                Cada valor é um reflexo da nossa essência: presença real, inovação e atitude GO.
              </p>
            </div>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-center text-center p-8 bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 rounded-2xl backdrop-blur-sm transition-all hover:scale-[1.04] hover:shadow-xl hover:border-secondary/40"
                >
                  {/* Ícone com efeito de brilho */}
                  <div className="relative w-16 h-16 mb-5 flex items-center justify-center rounded-full from-secondary/30 to-accent/20 shadow-lg group-hover:from-secondary/50 group-hover:to-accent/40 transition-all">
                    <value.icon className="h-7 w-7 text-white group-hover:text-secondary transition-colors" />
                  </div>

                  <h4 className="font-semibold text-white mb-2 text-lg">
                    {value.title}
                  </h4>
                  <p className="text-sm text-white/80 leading-relaxed max-w-[250px]">
                    {value.description}
                  </p>

                  {/* Efeito de brilho no hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
