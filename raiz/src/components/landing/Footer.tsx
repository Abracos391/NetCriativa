import { MessageCircle } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const whatsappNumber = "5586999334312";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8">
          <Logo variant="footer" />
          
          <div className="flex flex-col xl:flex-row items-center gap-6 text-center xl:text-left">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
            >
              <div className="p-3 rounded-xl bg-[#25D366]/20 group-hover:bg-[#25D366]/30 transition-colors">
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
              </div>
              <span className="font-semibold">(86) 99933-4312</span>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
            <a href="#" className="hover:opacity-100 transition-opacity">Termos de Serviço</a>
            <span>•</span>
            <a href="#" className="hover:opacity-100 transition-opacity">Política de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:opacity-100 transition-opacity">Política de Reembolso</a>
          </div>
          
          <div className="pt-8 border-t border-white/30 w-full text-center">
            <p className="text-sm opacity-80">
              2025 NetCriativa
            </p>
            <p className="text-xs opacity-40 mt-2">
              CNPJ: 00.000.000/0000-00 • Teresina, PI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
