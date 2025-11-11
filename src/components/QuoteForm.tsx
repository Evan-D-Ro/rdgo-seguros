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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.insuranceType) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Here you would send to WhatsApp or your backend
    const message = `Olá! Gostaria de solicitar uma cotação:\n\nNome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\nCPF: ${formData.cpf}\nTipo de Seguro: ${formData.insuranceType}`;
    const whatsappUrl = `https://wa.me/5511941119972?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    toast({
      title: "Solicitação enviada!",
      description: "Em breve um especialista entrará em contato.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", cpf: "", insuranceType: "" });
  };

  return (
    <section id="quote-form" className="py-24 bg-gradient-to-br from-navy-dark via-navy-dark to-accent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute inset-0 pattern-dots opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Solicite Sua <span className="text-secondary">Cotação</span>
            </h2>
            <p className="text-xl text-white/90">
              Preencha o formulário e receba uma proposta personalizada
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-strong p-8 md:p-10 animate-slide-up">
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
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary/80 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                size="lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar Solicitação
              </Button>
            </div>

            <p className="text-sm text-center text-foreground/60 mt-6">
              Ao enviar, em breve um de nossos consultores entrará em contato.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
