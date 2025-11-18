import { MessageCircle } from "lucide-react";
import whatsappLogo from "@/assets/whatsapp.webp"; // <-- nova logo (versão branca ou pb)

const WhatsAppFloat = () => {
  const handleClick = () => {
    window.open("https://wa.me/5511941119972", "_blank");
  };

  return (
    <button
      className="h-widget-trigger"
      aria-label="Falar no WhatsApp"
    >
    </button>
  );
};

export default WhatsAppFloat;
