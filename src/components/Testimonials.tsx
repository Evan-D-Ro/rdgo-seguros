import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import googleBadge from "@/assets/google-review.webp";
import seta from "@/assets/seta.webp";

const Testimonials = () => {
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
      text: "Profissionalismo e transparência do início ao fim. Finalmente encontrei uma corretora que realmente se importa com o cliente. O processo de cotação foi simples e a comunicação, impecável.",
      date: "Há 1 mês"
    },
    {
      name: "Ana Oliveira",
      rating: 5,
      text: "Processo totalmente digital e rápido. Contratei meu seguro residencial em minutos. Adorei a experiência!",
      date: "Há 3 semanas"
    }
  ];

  // URL de avaliação simplificada
  const googleReviewUrl = "https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review";
  // O link longo que você estava usando era:
  // "https://www.google.com/search?sca_esv=247386aaf4f72303&sxsrf=AE3TifOnDhSac73hYiy6XBQo1rMY2MS_bw:1762833601132&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-ExRd57NTdLSLnpbx-hS0gpE4Br88rB6ENO1g3UwX9PfMJb_ua2cVXrgTeDM2u4NvYeAdNLWeblVlqvEMjYthtiGaA_UG1kDr3_FIG3OQ_VKtpnuM0w%3D%3D&q=RDgo+Corretora+de+Seguros+Coment%C3%A1rios&sa=X&ved=2ahUKEwjI0t_0mumQAxUCq5UCHWqXLykQ0bkNegQIHxAD&biw=1536&bih=695&dpr=1.25#lrd=0x9493f15679e46d0f:0xfdb48b5752d9b60d,3,,,,"

  return (
    <section className="pt-24 pb-12 bg-navy-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O Que Nossos <span className="text-secondary">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-white/80">
            Avaliações reais de quem confia na RDGO
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto h-full">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="h-full flex flex-col bg-gradient-to-br from-white to-secondary/5 backdrop-blur-sm border-0 hover-lift animate-slide-up shadow-strong border-t-4 border-secondary/30"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="pt-6 flex flex-col flex-1">
                {/* Ícone decorativo */}
                <img
                  src={seta}
                  className="h-16 w-16 text-secondary/30 mb-4"
                  alt="Seta Decorativa"
                />

                {/* Avaliação */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Texto do depoimento */}
                <p className="text-foreground/80 mb-6 leading-relaxed flex-1 text-justify">
                  "{testimonial.text}"
                </p>

                {/* Autor e selo */}
                <div className="pt-4 border-t border-secondary/10 mt-auto flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-navy-dark">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.date}</p>
                  </div>

                  {/* Selo Google Reviews */}
                  <img
                    src={googleBadge}
                    alt="Avaliação Google"
                    className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
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


      <div className="text-center pt-8 rounded-lg z-10">
        <h3 className="font-heading text-3xl font-bold mb-4 text-white">
          Deixe Seu Feedback
        </h3>
        <p className="text-white mb-6 max-w-2xl mx-auto">
          Sua opinião é muito importante para nós! Compartilhe sua experiência
          com a RDgo e ajude outros clientes a conhecerem nosso trabalho.
        </p>


        {/* CORREÇÃO APLICADA: Usando 'asChild' e garantindo que o <a> tenha todas as classes de estilo do Button */}
        <Button
          // A classe 'size-lg' é interna, mas vamos replicar os estilos visuais no <a>
          // size="lg" (removido para evitar conflito de classes, os estilos visuais foram movidos para o <a>)
          className="bg-secondary hover:bg-secondary/90 text-white shadow-lg z-10"
          asChild
        >
          <a
            // Adicionado as classes base e de tamanho para garantir que o <a> se pareça e se comporte como o Button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-12 px-8 py-3" // h-12 px-8 py-3 são as classes para size="lg"
            href="https://www.google.com/search?sca_esv=247386aaf4f72303&sxsrf=AE3TifOnDhSac73hYiy6XBQo1rMY2MS_bw:1762833601132&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-ExRd57NTdLSLnpbx-hS0gpE4Br88rB6ENO1g3UwX9PfMJb_ua2cVXrgTeDM2u4NvYeAdNLWeblVlqvEMjYthtiGaA_UG1kDr3_FIG3OQ_VKtpnuM0w%3D%3D&q=RDgo+Corretora+de+Seguros+Coment%C3%A1rios&sa=X&ved=2ahUKEwjI0t_0mumQAxUCq5UCHWqXLykQ0bkNegQIHxAD&biw=1536&bih=695&dpr=1.25#lrd=0x9493f15679e46d0f:0xfdb48b5752d9b60d,3,,,,"
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