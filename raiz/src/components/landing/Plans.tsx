import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MessageCircle, Sparkles, Zap, ShoppingCart, Gift } from "lucide-react";

const Plans = () => {
  const whatsappNumber = "5586999334312";

  const plans = [
    {
      name: "Criação Simples",
      price: "297",
      oldPrice: "497",
      description: "Você envia o conteúdo, nós criamos a página",
      icon: Zap,
      features: [
        "Design profissional de alta conversão",
        "Botões estratégicos para WhatsApp",
        "Versão mobile 100% responsiva",
        "Link pronto para divulgar",
        "Otimização para SEO básico",
        "Entrega garantida em até 7 dias"
      ],
      cta: "COMEÇAR AGORA",
      highlight: false,
      color: "from-primary/10 to-primary/5",
      bonus: null
    },
    {
      name: "Criação Completa",
      price: "697",
      oldPrice: "1.297",
      description: "NetCriativa cria tudo do zero para você",
      icon: Sparkles,
      features: [
        "Criação de logo profissional exclusivo",
        "Copywriting persuasivo de alta conversão",
        "Seleção estratégica de imagens premium",
        "Estrutura profissional completa",
        "Design premium personalizado",
        "Otimização avançada para SEO",
        "Integração com ferramentas de analytics",
        "Entrega garantida em até 7 dias",
        "3 meses de manutenção GRÁTIS"
      ],
      cta: "QUERO O PLANO COMPLETO",
      highlight: true,
      color: "from-secondary/10 to-secondary/5",
      bonus: "BÔNUS: 3 meses de manutenção grátis (valor R$ 297)"
    }
  ];

  const getWhatsappLink = (planName: string) => {
    const message = encodeURIComponent(`Olá! Quero contratar o plano ${planName} da NetCriativa.`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <section id="planos" className="py-16 xl:py-24 bg-background relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold">Investimento que se paga sozinho</span>
          </div>
          <h2 className="text-5xl xl:text-7xl font-bold mb-8 max-sm:text-4xl">
            Escolha seu <span className="gradient-text">plano</span>
          </h2>
          <p className="text-xl xl:text-2xl text-foreground/70 max-w-3xl mx-auto max-sm:text-lg leading-relaxed">
            Máquinas de vendas profissionais que geram resultados reais. Invista no crescimento do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative animate-scale-in border-2 transition-all duration-300 ${
                plan.highlight 
                  ? 'glass-card border-primary/50 shadow-[var(--shadow-glow)] xl:scale-105 xl:-translate-y-4' 
                  : 'glass-card border-white/30 shadow-[var(--shadow-card)] hover:border-primary/30'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-2 bg-[var(--gradient-primary)] text-white px-8 py-3 rounded-full text-sm font-bold shadow-xl">
                    <Sparkles className="h-4 w-4" />
                    Mais Vendido - Melhor Custo-Benefício
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-6 pt-12">
                <div className={`mx-auto mb-6 inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${plan.color}`}>
                  <plan.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-3xl xl:text-4xl mb-4 font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-base text-foreground/70 mb-6">{plan.description}</CardDescription>
                <div className="flex items-baseline justify-center gap-3 mb-2">
                  <span className="text-xl font-semibold text-foreground/40 line-through">R$ {plan.oldPrice}</span>
                </div>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-2xl font-semibold text-foreground/60">R$</span>
                  <span className="text-6xl xl:text-7xl font-bold gradient-text">{plan.price}</span>
                </div>
                <p className="text-sm text-foreground/60 mt-2">ou 2x de R$ {(parseFloat(plan.price) / 2).toFixed(2)} sem juros</p>
              </CardHeader>

              {plan.bonus && (
                <div className="mx-8 mb-6">
                  <div className="glass-card border-2 border-secondary/50 px-4 py-3 rounded-xl">
                    <div className="flex items-center gap-2 text-secondary font-bold text-sm">
                      <Gift className="h-5 w-5" />
                      {plan.bonus}
                    </div>
                  </div>
                </div>
              )}

              <CardContent className="space-y-5 pb-8 px-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-4">
                    <div className="mt-1 p-1.5 rounded-full bg-secondary/20 flex-shrink-0">
                      <Check className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="text-base leading-relaxed text-foreground/80">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="pt-6 px-8 pb-8 flex flex-col gap-3">
                <Button 
                  className="w-full text-lg py-7 bg-[var(--gradient-primary)] hover:opacity-90 shadow-[var(--shadow-elegant)] hover:scale-105 transition-all border-0 font-semibold"
                  size="lg"
                  asChild
                >
                  <a href={getWhatsappLink(plan.name)} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="mr-2 h-6 w-6" />
                    {plan.cta}
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="w-full text-base py-6 border-2 hover:scale-105 transition-all"
                  size="lg"
                  asChild
                >
                  <a href={getWhatsappLink(plan.name)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Tirar dúvidas no WhatsApp
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <div className="inline-block glass-card px-8 py-6 rounded-2xl shadow-[var(--shadow-card)]">
            <p className="text-lg font-semibold text-foreground/80">
              💳 Parcelamento em até 2x sem juros • ⚡ Entrega em 7 dias • ✓ Garantia de satisfação
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
