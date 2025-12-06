import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Zap } from "lucide-react";
import Logo from "./Logo";

const Hero = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('planos');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChatbotClick = () => {
    // Dispara um evento customizado para abrir o chatbot
    const event = new CustomEvent('openChatbot');
    window.dispatchEvent(event);
  };

  return (
    <section className="relative py-16 xl:py-24 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="absolute top-8 left-8 z-20 animate-fade-in">
        <Logo />
      </div>
      
      <div className="absolute top-8 right-8 z-20 animate-fade-in">
        <div className="glass-card px-6 py-3 rounded-full border-2 border-secondary/50">
          <p className="text-sm font-bold text-secondary flex items-center gap-2">
            <Zap className="h-4 w-4" />
            Apenas 5 vagas disponíveis esta semana
          </p>
        </div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">Mais de R$ 2.5 milhões em vendas geradas para nossos clientes</span>
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight xl:text-7xl max-sm:text-4xl leading-tight">
              Pare de Perder Vendas:{" "}
              <span className="gradient-text">Sua Landing Page Profissional</span>, Pronta para Converter Clientes em 7 Dias
            </h1>
            
            <p className="text-xl xl:text-2xl text-foreground/80 max-w-xl max-sm:text-lg leading-relaxed">
              Design de Alta Conversão + Copy Persuasiva. Receba sua máquina de vendas online e comece a gerar leads qualificados imediatamente.
            </p>
            
            <div className="flex flex-col xl:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="text-lg px-8 py-7 bg-[var(--gradient-primary)] hover:opacity-90 shadow-[var(--shadow-elegant)] hover:scale-105 transition-all border-0"
                onClick={scrollToPlans}
              >
                <Zap className="mr-2 h-6 w-6" />
                QUERO MINHA MÁQUINA DE VENDAS AGORA
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-7 border-2 hover:scale-105 transition-all"
                onClick={handleChatbotClick}
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Tirar Dúvidas no WhatsApp
              </Button>
            </div>
            
            <p className="text-base text-foreground/70 italic pt-4 max-sm:text-sm">
              💡 "Landing page é um vendedor automático que funciona 24h por dia."
            </p>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
            <img 
              src="https://miaoda-site-img.s3cdn.medo.dev/images/8c6448a2-6962-42b4-8612-053c43c200d1.jpg"
              alt="Mockup de landing page profissional em laptop"
              className="relative rounded-2xl shadow-[var(--shadow-elegant)] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
