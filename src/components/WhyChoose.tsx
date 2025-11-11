import { CheckCircle2 } from "lucide-react";

const WhyChoose = () => {
  const differentials = [
    {
      title: "Atendimento Humano e Próximo",
      description: "Nossa equipe está sempre disponível para oferecer suporte personalizado e atencioso."
    },
    {
      title: "Operação Completa e Setorizada",
      description: "Estrutura profissional com departamentos especializados para cada necessidade."
    },
    {
      title: "Especialistas em Vendas Online",
      description: "Tecnologia de ponta para facilitar todo o processo de contratação digital."
    },
    {
      title: "Parceria com Grandes Seguradoras",
      description: "Acesso às melhores condições através de parcerias consolidadas no mercado."
    },
    {
      title: "Transparência e Educação",
      description: "Explicamos tudo de forma clara para você tomar decisões informadas."
    },
    {
      title: "Relacionamento Contínuo",
      description: "Não abandonamos você após a venda. Estamos juntos em toda a jornada."
    }
  ];

  return (
    <section id="why-choose" className="pt-24 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="pattern-dots w-full h-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4">
              Por que escolher a <span className="text-secondary">RDGO?</span>
            </h2>
            <p className="text-xl text-foreground/70">
              Diferenciais que fazem toda a diferença na sua proteção
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-gradient-to-br from-white to-secondary/5 rounded-xl shadow-medium hover-lift animate-slide-up border border-secondary/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
