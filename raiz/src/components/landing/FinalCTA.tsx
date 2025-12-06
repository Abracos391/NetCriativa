import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const handleChatbotClick = () => {
    // Dispara um evento customizado para abrir o chatbot
    const event = new CustomEvent('openChatbot');
    window.dispatchEvent(event);
  };

  return (
    <section className="py-16 xl:py-24 bg-[var(--gradient-hero)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl glass-card mb-6">
            <Sparkles className="h-12 w-12 text-white" />
          </div>
          
          <h2 className="text-5xl xl:text-7xl font-bold text-foreground max-sm:text-4xl leading-tight animate-fade-loop">
            Seu negócio precisa ser visto
          </h2>
          
          <p className="text-2xl xl:text-3xl text-white/90 max-sm:text-xl leading-relaxed max-w-3xl mx-auto font-light">
            Comece hoje e tenha presença digital profissional. 
            Não perca mais clientes por falta de visibilidade online.
          </p>
          
          <div className="flex flex-col xl:flex-row gap-6 justify-center items-center pt-8">
            <Button
              size="lg"
              className="text-xl px-12 py-8 bg-white text-primary hover:bg-white/90 shadow-[var(--shadow-elegant)] hover:scale-110 transition-all w-full xl:w-auto font-bold group"
              onClick={handleChatbotClick}
            >
              <MessageCircle className="mr-3 h-7 w-7" />
              Chamar no WhatsApp agora
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="pt-16 grid grid-cols-1 xl:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              "Resposta rápida",
              "Atendimento personalizado",
              "Sem compromisso"
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-center gap-3 glass-card px-8 py-5 rounded-2xl animate-slide-up hover:scale-105 transition-transform"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                <span className="text-white font-semibold text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
