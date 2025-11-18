import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const QuoteForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    insuranceType: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const lastExecution = localStorage.getItem("lastFormSubmit");
    const now = Date.now();

    // Se o último envio foi há menos de 60 segundos, bloqueia
    if (lastExecution && now - parseInt(lastExecution) < 60 * 1000) {
      toast({
        title: "Aguarde um momento",
        description: "Você pode enviar novamente após 1 minuto.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.name || !formData.email || !formData.phone || !formData.insuranceType) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any),
      });

      const result = await response.json();

      if (result.status === "success") {
        // salva o timestamp do envio
        localStorage.setItem("lastFormSubmit", now.toString());

        toast({
          title: "Mensagem enviada!",
          description: "Recebemos seu contato e retornaremos em breve.",
        });
        setFormData({ name: "", email: "", phone: "", cpf: "", insuranceType: "" });
      } else {
        toast({
          title: "Erro ao enviar mensagem",
          description: result.message || "Tente novamente mais tarde.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro de conexão",
        description: "Não foi possível enviar o formulário.",
        variant: "destructive",
      });
    }
  };


  return (
    <section id="quote-form" className="pt-12 pb-12 bg-gray-50 text-gray-900 relative overflow-hidden border-t-4 border-secondary">
      {/* Background Elements - Ajustados para fundo claro */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Solicite Sua <span className="text-secondary">Cotação</span>
            </h2>
            <p className="text-xl text-gray-600">
              Preencha o formulário e receba uma proposta personalizada
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-10 animate-slide-up border border-gray-100">
            <div className="space-y-6">
              {/* Nome */}
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo *</Label>
                <Input
                  id="name"
                  placeholder="Digite seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              {/* Telefone e CPF em grid */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone *</Label>
                  <Input
                    id="phone"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input
                    id="cpf"
                    placeholder="000.000.000-00"
                    value={formData.cpf}
                    onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                  />
                </div>
              </div>

              {/* Tipo de Seguro */}
              <div className="space-y-2">
                <Label htmlFor="insurance-type">Tipo de Seguro *</Label>
                <Select
                  value={formData.insuranceType}
                  onValueChange={(value) => setFormData({ ...formData, insuranceType: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo de seguro" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Seguro Automóvel</SelectItem>
                    <SelectItem value="residencial">Residencial</SelectItem>
                    <SelectItem value="empresarial">Empresarial</SelectItem>
                    <SelectItem value="vida">Vida</SelectItem>
                    <SelectItem value="acidentes">Acidentes Pessoais</SelectItem>
                    <SelectItem value="rc">Responsabilidade Civil</SelectItem>
                    <SelectItem value="frota">Frota e Transporte</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center align-center w-full">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Solicitação
                </Button>
              </div>
            </div>

            <p className="text-sm text-center text-gray-500 mt-6">
              Ao enviar, em breve um de nossos consultores entrará em contato.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;