import { MessageCircle } from "lucide-react";
import whatsappLogo from "@/assets/whatsapp.webp"; // <-- nova logo (versão branca ou pb)

const WhatsAppFloat = () => {
  const handleClick = () => {
    window.open("https://wa.me/5511941119972", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-float group"
      aria-label="Falar no WhatsApp"
    >
      <img src={whatsappLogo} className="h-8 w-8 group-hover:scale-110 transition-transform" />
    </button>
  );
};

export default WhatsAppFloat;
