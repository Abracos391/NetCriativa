import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, CreditCard, Send, Rocket, Clock, Banknote } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: CheckCircle2,
      title: "Escolha o plano",
      description: "Selecione o plano que melhor atende suas necessidades",
      color: "from-primary/20 to-primary/10"
    },
    {
      icon: CreditCard,
      title: "Faça o pagamento",
      description: "50% no pedido + 50% na entrega ou 2x sem juros",
      color: "from-secondary/20 to-secondary/10"
    },
    {
      icon: Send,
      title: "Envie as informações",
      description: "Compartilhe seu conteúdo ou briefing conosco",
      color: "from-primary/20 to-primary/10"
    },
    {
      icon: Rocket,
      title: "Receba em 10 dias",
      description: "Sua landing page profissional pronta para usar",
      color: "from-secondary/20 to-secondary/10"
    }
  ];

  return (
    <section className="py-16 xl:py-24 bg-[var(--gradient-section)] relative overflow-hidden">
      <div className="absolute top-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl xl:text-7xl font-bold mb-8 max-sm:text-4xl">
            Como <span className="gradient-text">funciona</span>?
          </h2>
          <p className="text-xl xl:text-2xl text-foreground/70 max-w-3xl mx-auto max-sm:text-lg leading-relaxed">
            Processo simples e transparente em 4 passos
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="glass-card border-2 border-white/50 hover:border-primary/50 transition-all shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] h-full hover:scale-105 group">
                <CardContent className="p-8 text-center relative">
                  <div className={`mb-8 mx-auto inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} group-hover:scale-110 transition-transform`}>
                    <step.icon className="h-12 w-12 text-primary" />
                  </div>
                  
                  <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--gradient-primary)] text-white text-xl font-bold shadow-lg">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-2xl xl:text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden xl:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full z-10" />
              )}
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto animate-scale-in">
          <Card className="glass-card border-2 border-white/50 shadow-[var(--shadow-elegant)]">
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold text-center mb-10 gradient-text">
                Informações importantes
              </h3>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl mb-3">Prazo de entrega</h4>
                    <p className="text-foreground/70 text-lg leading-relaxed">
                      Até 10 dias úteis após confirmação do pagamento e recebimento do material
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10">
                      <Banknote className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl mb-3">Formas de pagamento</h4>
                    <p className="text-foreground/70 text-lg leading-relaxed mb-2">
                      • 50% no pedido + 50% na entrega
                    </p>
                    <p className="text-foreground/70 text-lg leading-relaxed">
                      • Cartão: 2x sem juros
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
