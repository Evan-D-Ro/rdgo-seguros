import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Calendar } from "lucide-react";

const News = () => {
  // Placeholder news - In production, this would fetch from RSS feeds
  const newsItems = [
    {
      title: "Novas Tendências em Seguros Digitais para 2025",
      source: "CQCS",
      date: "15 Jan 2025",
      description: "O mercado de seguros passa por transformação digital acelerada com novas tecnologias.",
      link: "https://cqcs.com.br"
    },
    {
      title: "Como Escolher o Seguro Auto Ideal",
      source: "InfoMoney",
      date: "12 Jan 2025",
      description: "Guia completo para entender coberturas e escolher a melhor proteção para seu veículo.",
      link: "https://www.infomoney.com.br"
    },
    {
      title: "Seguros Residenciais: O Que Mudou em 2025",
      source: "Revista Apólice",
      date: "10 Jan 2025",
      description: "Novas coberturas e condições especiais para proteção patrimonial residencial.",
      link: "https://revistaapolice.com.br"
    }
  ];

  return (
    <section id="news" className="pt-24 pb-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4">
            Notícias e <span className="text-secondary">Atualizações</span>
          </h2>
          <p className="text-xl text-foreground/70">
            Fique por dentro das últimas novidades do mercado de seguros
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="hover-lift cursor-pointer group animate-slide-up bg-gradient-to-br from-white to-accent/5 border-l-4 border-accent/30 hover:border-accent shadow-medium hover:shadow-strong"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => window.open(item.link, '_blank')}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    {item.source}
                  </span>
                  <ExternalLink className="h-4 w-4 text-foreground/40 group-hover:text-secondary transition-colors" />
                </div>
                <CardTitle className="text-xl text-navy-dark group-hover:text-secondary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {item.description}
                </CardDescription>
                <div className="flex items-center text-sm text-foreground/60">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-foreground/60 mt-8">
          * Conteúdo agregado de fontes confiáveis do mercado de seguros
        </p>
      </div>
    </section>
  );
};

export default News;
