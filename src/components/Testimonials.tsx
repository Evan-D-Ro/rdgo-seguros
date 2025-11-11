import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  // Placeholder testimonials - In production, integrate with Google My Business API
  const testimonials = [
    {
      name: "Maria Silva",
      rating: 5,
      text: "Atendimento excepcional! A equipe da RDGO foi super atenciosa e me ajudou a encontrar o melhor seguro para meu carro. Recomendo!",
      date: "Há 2 semanas"
    },
    {
      name: "João Santos",
      rating: 5,
      text: "Profissionalismo e transparência do início ao fim. Finalmente encontrei uma corretora que realmente se importa com o cliente.",
      date: "Há 1 mês"
    },
    {
      name: "Ana Oliveira",
      rating: 5,
      text: "Processo totalmente digital e rápido. Contratei meu seguro residencial em minutos. Adorei a experiência!",
      date: "Há 3 semanas"
    }
  ];

  return (
    <section className="pt-24 pb-12 bg-navy-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O Que Nossos <span className="text-secondary">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-white/80">
            Avaliações reais de quem confia na RDGO
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-white to-secondary/5 backdrop-blur-sm border-0 hover-lift animate-slide-up shadow-strong border-t-4 border-secondary/30"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="pt-6">
                <Quote className="h-10 w-10 text-secondary/30 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-secondary/10">
                  <p className="font-semibold text-navy-dark">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Badge */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-white font-semibold">5.0 no Google</span>
          </div>
        </div>
      </div>


      <div className="text-center pt-8 rounded-lg">
        <h3 className="font-heading text-3xl font-bold mb-4 text-white">
          Deixe Seu Feedback
        </h3>
        <p className="text-white mb-6 max-w-2xl mx-auto">
          Sua opinião é muito importante para nós! Compartilhe sua experiência
          com a RDgo e ajude outros clientes a conhecerem nosso trabalho.
        </p>
        <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8"
          asChild>
          <a
            href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deixar Avaliação no Google
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Testimonials;
