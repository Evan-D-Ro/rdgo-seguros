import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  // Estrutura de dados original (mantida)
  const faqCategories = [
    {
      title: "Dúvidas Gerais sobre o Seguro Automóvel",
      id: "gerais",
      items: [
        {
          question: "Quando o seguro começa a valer?",
          answer:
            "Para **seguro novo**: a partir da data de transmissão da proposta, informando o dia de início da vigência e realizando a vistoria no veículo. Para **renovação**: a partir da data de início da nova vigência, dando sequência à apólice atual."
        },
        {
          question: "O que é franquia e quando preciso pagar?",
          answer:
            "A franquia é o valor que você paga para acionar o seguro quando o seu carro precisa de conserto após um acidente coberto. A seguradora paga o restante acima do valor da franquia. Você só paga a franquia em caso de conserto do seu carro e diretamente à oficina. Não há franquia para casos de perda total, roubo ou furto sem recuperação do veículo, e nem para reparos em veículos de terceiros (quando você é o causador do acidente)."
        },
        {
          question: "O que são danos parciais?",
          answer:
            "São os danos no veículo passíveis de reparo, ou seja, o famoso conserto do carro. Nesses casos, a seguradora realiza o reparo e você paga apenas a franquia."
        },
        {
          question: "O seguro cobre mais de um condutor?",
          answer:
            "Sim. Na apólice é informado apenas o condutor principal, mas as seguradoras cobrem outros condutores habilitados. **Regra Geral:** Se dois ou mais condutores usam o veículo com a mesma frequência, informe sempre o mais jovem na apólice (assim, os condutores mais velhos estarão automaticamente cobertos). Se o condutor mais velho dirigir na maioria dos dias (pelo menos 5 vezes/semana), o mais novo também estará coberto, desde que tenha mais de 26 anos."
        },
        {
          question: "Como funciona a cobertura para condutor eventual entre 18 e 25 anos?",
          answer:
            "Essa cobertura deve ser contratada quando o condutor entre 18 e 25 anos usa o carro de forma eventual (no máximo dois dias por semana). Caso ele utilize por mais tempo, deve ser indicado como condutor principal."
        },
        {
          question: "Posso transferir o seguro se trocar de carro?",
          answer:
            "Sim! Basta avisar a RDGO sobre o novo veículo. Chamamos isso de substituição de risco. O valor do seguro pode mudar conforme o modelo e o perfil do novo carro."
        },
        {
          question: "O seguro cobre terceiros?",
          answer:
            "Depende do plano contratado. A cobertura de Responsabilidade Civil protege você caso cause danos a outra pessoa ou bem material em um acidente. A cobertura geralmente é dividida em danos materiais e danos corporais. Exemplo: Se você bate em outro carro e for o responsável, o seguro paga o conserto do veículo da outra pessoa."
        },
        {
          question: "Tenho cobertura fora do Brasil?",
          answer:
            "A maioria das seguradoras cobre apenas no território nacional. Mas algumas oferecem cobertura estendida para países do Mercosul (Argentina, Uruguai e Paraguai). Consulte seu consultor RDGO para mais informações."
        },
        {
          question: "Posso usar o carro para aplicativo (Uber, 99, etc.)?",
          answer:
            "Depende. Se o uso for profissional (transporte de passageiros ou entregas), isso precisa ser informado na contratação do seguro. Usar o carro para trabalho sem informar à seguradora pode fazer com que o seguro não cubra o sinistro."
        },
        {
          question: "Preciso avisar se mudar de endereço?",
          answer:
            "Sim. Mudanças de endereço, uso do veículo ou condutor principal precisam ser comunicadas à corretora. Isso mantém o seguro válido e evita divergências no momento do sinistro."
        },
      ]
    },
    {
      title: "Dúvidas sobre Sinistro (Quando você precisa acionar o seguro)",
      id: "sinistro",
      items: [
        {
          question: "Posso escolher a oficina em caso de reparo do veículo?",
          answer:
            "Sim. Você pode optar por: **Oficina credenciada da seguradora** (aprovação do conserto mais rápida e com garantia) ou **Oficina de sua confiança** (possível, mas com um processo de autorização mais cauteloso). As oficinas indicadas costumam ter desconto no pagamento da franquia."
        },
        {
          question: "Em quanto tempo recebo a indenização em caso de perda total (PT)?",
          answer:
            "Após o envio e aprovação de toda a documentação, o pagamento é feito em até 30 dias corridos, mas geralmente ocorre em cerca de 10 dias. O prazo pode variar conforme o tipo de sinistro. A RDGO acompanha todo o processo."
        },
        {
          question: "O que devo fazer se meu carro for roubado?",
          answer:
            "1. Registre o Boletim de Ocorrência. 2. Avise imediatamente a RDGO ou a seguradora. 3. Envie os documentos solicitados. A seguradora fará a análise e, caso o carro não seja recuperado, pagará a indenização integral."
        },
        {
          question: "Como funciona a cobertura de perda total?",
          answer:
            "Se o valor do conserto for igual ou superior a 75% do valor do veículo, é considerado perda total. Nesses casos, a seguradora paga o valor de mercado do carro (Tabela FIPE) vigente na data do sinistro."
        },
      ]
    },
    {
      title: "Assistência e Serviço 24h",
      id: "assistencia",
      items: [
        {
          question: "Quantas vezes posso usar o guincho e os serviços 24h?",
          answer:
            "Depende do plano contratado, mas geralmente: Guincho (em caso de pane mecânica) e serviços como chaveiro, troca de pneus ou carga de bateria podem ter até 2 ou 3 utilizações por vigência. O guincho possui limite de quilometragem por atendimento (ex: 200 km). Consulte sua apólice ou a RDGO para saber seus limites."
        },
        {
          question: "Como funciona o cálculo da quilometragem do guincho?",
          answer:
            "A quilometragem é contada do ponto onde o carro apresentou o problema até o destino escolhido (oficina, residência etc.). O deslocamento do guincho até o local da ocorrência não entra na conta."
        },
        {
          question: "O seguro cobre assistência em todo o Brasil?",
          answer:
            "Sim. A assistência 24 horas vale em todo o território nacional, dentro dos limites contratados."
        },
      ]
    }
  ];

  return (
    <section id="faq" className="pt-24 pb-12 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              FAQ: Seguro <span className="text-secondary">Automóvel</span>
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas frequentes sobre o seu seguro auto com a RDgo.
            </p>
          </div>

          <div className="animate-slide-up">
            {/* 1. ACCORDION EXTERNO (Nível da Categoria) */}
            <Accordion
              type="single"
              collapsible
              className="space-y-6"
            >
              {faqCategories.map((category, catIndex) => (
                <AccordionItem
                  key={category.id}
                  value={category.id}
                  // Estilo para o item da categoria principal
                  className="bg-gray-50 rounded-xl shadow-lg border border-gray-200 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-gray-900 hover:text-secondary hover:no-underline py-5 px-6">
                    <span className="font-bold text-xl">{category.title}</span>
                  </AccordionTrigger>

                  {/* 2. CONTEÚDO DO ACCORDION EXTERNO É O ACCORDION INTERNO */}
                  <AccordionContent className="p-4 pt-0">
                    <div className="bg-white p-4 rounded-xl border border-gray-100">

                      {/* ACCORDION INTERNO (Nível da Pergunta/Resposta) */}
                      <Accordion
                        type="single"
                        collapsible
                        className="space-y-4"
                      >
                        {category.items.map((item, index) => (
                          <AccordionItem
                            key={`${category.id}-item-${index}`}
                            value={`${category.id}-item-${index}`}
                            className="bg-white rounded-lg px-4 border border-gray-100 shadow-sm"
                          >
                            <AccordionTrigger className="text-left text-gray-800 hover:text-secondary hover:no-underline py-4">
                              <span className="font-semibold text-base">{item.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 pb-4 leading-relaxed text-sm">
                              {item.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>

                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center animate-fade-in">
            <p className="text-gray-600 mb-8">
              Lembre-se: As respostas acima são explicações gerais. Regras e exceções específicas devem ser verificadas caso a caso.
              <br />
              Não encontrou sua dúvida?
            </p>
            <Button
              className="bg-secondary hover:bg-secondary/90 text-white shadow-lg py-6"
              onClick={() => window.open("https://wa.me/5511941119972", "_blank")}
            >
              Fale com um Especialista RDgo!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;