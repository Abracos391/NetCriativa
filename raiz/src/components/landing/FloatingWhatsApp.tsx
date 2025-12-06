import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappNumber = "5586999334312";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da NetCriativa.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-[var(--shadow-elegant)] hover:scale-110 transition-transform animate-bounce"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  );
};

export default FloatingWhatsApp;
