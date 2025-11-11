import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqItems = [
    {
      question: "Quando o seguro começa a valer?",
      answer: "Para seguro novo: a partir da data de transmissão da proposta, informando o dia de início da vigência e realizando a vistoria no veículo. Para renovação: a partir da data de início da nova vigência, dando sequência à apólice atual."
    },
    {
      question: "O que é franquia e quando preciso pagar?",
      answer: "A franquia é o valor que você paga para acionar o seguro quando o seu carro precisa de conserto após um acidente coberto. Você só paga franquia em caso de conserto do seu carro e diretamente à oficina ao buscar o veículo reparado. Nos casos de perda total, roubo ou furto sem recuperação, não há franquia."
    },
    {
      question: "O seguro cobre mais de um condutor?",
      answer: "Sim. Na apólice é informado apenas o condutor principal, mas as seguradoras cobrem outros condutores habilitados. Quando dois ou mais condutores usam o veículo com a mesma frequência, informe sempre o mais jovem na apólice."
    },
    {
      question: "Posso transferir o seguro se trocar de carro?",
      answer: "Sim! Basta avisar a RDGO sobre o novo veículo. Chamamos isso de substituição de risco. O valor do seguro pode mudar conforme o modelo e o perfil do novo carro."
    },
    {
      question: "O seguro cobre terceiros?",
      answer: "Depende do plano contratado. A cobertura de Responsabilidade Civil protege você caso cause danos a outra pessoa ou bem material em um acidente. Se você bate em outro carro e for o responsável, o seguro paga o conserto do veículo da outra pessoa."
    },
    {
      question: "Tenho cobertura fora do Brasil?",
      answer: "A maioria das seguradoras cobre apenas no território nacional. Mas algumas oferecem cobertura estendida para países do Mercosul (Argentina, Uruguai e Paraguai). Consulte seu consultor RDGO para mais informações."
    },
    {
      question: "Posso usar o carro para aplicativo (Uber, 99, etc.)?",
      answer: "Se o uso for profissional (transporte de passageiros ou entregas), isso precisa ser informado na contratação do seguro. Usar o carro para trabalho sem informar à seguradora pode fazer com que o seguro não cubra o sinistro."
    },
    {
      question: "Preciso avisar se mudar de endereço?",
      answer: "Sim. Mudanças de endereço, uso do veículo ou condutor principal precisam ser comunicadas à corretora. Isso mantém o seguro válido e evita divergências no momento do sinistro."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-navy-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Perguntas <span className="text-secondary">Frequentes</span>
            </h2>
            <p className="text-xl text-white/80">
              Tire suas dúvidas sobre seguros
            </p>
          </div>

          <div className="animate-slide-up">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white/95 backdrop-blur-sm rounded-xl px-6 border-0"
                >
                  <AccordionTrigger className="text-left text-navy-dark hover:text-secondary hover:no-underline py-6">
                    <span className="font-semibold text-lg">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 pb-6 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center animate-fade-in">
            <p className="text-white/80 mb-4">Não encontrou sua dúvida?</p>
            <Button 
              className="bg-secondary hover:bg-secondary/90 text-white"
              onClick={() => window.open("https://wa.me/5511941119972", "_blank")}
            >
              Fale com um Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
