import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logoRdgo from "@/assets/logo-rdgo-pb.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img src={logoRdgo} alt="RDGO Seguros" className="h-24 mb-4" />
            <p className="text-white/70 mb-6 leading-relaxed">
              Conectamos pessoas à proteção que precisam, de forma ágil, transparente e inovadora.
              Mais de 20 anos de experiência cuidando do que mais importa para você.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/rdgoseguros/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/rdgo.seguros/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rdgo-corretora-de-seguros-58a769361/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-3 text-white/70">
              <a href="mailto:contato@rdgoseguros.com.br" className="flex items-start gap-2 hover:text-secondary transition-colors">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">contato@rdgoseguros.com.br</span>
              </a>
              <a href="tel:+551832229972" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">(18) 3222-9972</span>
              </a>
              <a href="https://wa.me/5511941119972" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">(11) 94111-9972</span>
              </a>
            </div>
          </div>

          {/* Addresses */}
          <div>
            <h3 className="text-lg font-bold mb-4">Endereços</h3>
            <div className="space-y-4 text-white/70 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-secondary" />
                <div>
                  <p className="font-semibold text-white">Sede Administrativa</p>
                  <p>Rua Fernando Costa, 367</p>
                  <p>Vila Boa Vista</p>
                  <p>Presidente Prudente/SP</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-secondary" />
                <div>
                  <p className="font-semibold text-white">Sede Comercial</p>
                  <p>Rua Bandeirante Renê Nobre, 209</p>
                  <p>Vila Formosa</p>
                  <p>Presidente Prudente/SP</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Information */}
        <div className="border-t border-white/10 pt-8">
          <div className="text-sm text-white/60 space-y-2">
            <p>
              <strong className="text-white">Razão social: RDGO Corretora de Seguros Ltda</strong>
            </p>
            <p>CNPJ: 44.193.056/0001-85 | SUSEP: 232147860</p>
            <p>Empresa do Grupo RDGO</p>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-sm text-white/60 text-center">
              © {currentYear} RDGO Seguros. Todos os direitos reservados.
            </p>
            {/* <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-secondary transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-secondary transition-colors">Termos de Uso</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
