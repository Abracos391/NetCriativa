import { Card, CardContent } from "@/components/ui/card";
import { Award, TrendingUp, Users, Clock } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumente suas Vendas em até 340%",
      description: "Landing pages otimizadas convertem visitantes em clientes pagantes. Nossos clientes reportam aumento médio de 340% em conversões.",
      color: "text-primary",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/de00188b-aa08-432e-9ce1-85b923bedf6c.jpg"
    },
    {
      icon: Award,
      title: "Ganhe Credibilidade Instantânea",
      description: "Design profissional transmite confiança. Clientes preferem comprar de negócios com presença digital sólida e profissional.",
      color: "text-secondary",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/d3d74318-5fb5-4ff4-b004-6e91be63917d.jpg"
    },
    {
      icon: Users,
      title: "Destaque-se da Concorrência",
      description: "Enquanto seus concorrentes ainda dependem de redes sociais, você terá uma máquina de vendas própria trabalhando 24/7.",
      color: "text-primary",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/1cd11947-5df8-48a1-a140-101a1f7ef792.jpg"
    },
    {
      icon: Clock,
      title: "Venda Enquanto Você Dorme",
      description: "Sua landing page trabalha 24 horas por dia, 7 dias por semana. Capture leads e feche vendas mesmo quando você está offline.",
      color: "text-secondary",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/086923cf-910f-4aaf-b072-054345b16598.jpg"
    }
  ];

  return (
    <section className="py-16 xl:py-24 bg-[var(--gradient-section)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl xl:text-6xl font-bold mb-6 max-sm:text-3xl">
            Por que ter uma <span className="gradient-text">Landing Page</span>?
          </h2>
          <p className="text-lg xl:text-xl text-foreground/70 max-w-2xl mx-auto max-sm:text-base">
            Uma landing page profissional é essencial para o sucesso do seu negócio digital
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="glass-card border-2 border-white/50 hover:border-primary/50 transition-all shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:scale-105 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-0">
                  <div className="p-8 flex flex-col justify-center">
                    <div className={`mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20`}>
                      <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                    </div>
                    <h3 className="text-xl xl:text-2xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
                  </div>
                  <div className="relative h-64 xl:h-full">
                    <img 
                      src={benefit.image}
                      alt={benefit.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-scale-in">
          <div className="inline-block px-8 py-4 glass-card rounded-2xl shadow-[var(--shadow-card)]">
            <p className="text-xl font-bold">
              <span className="text-secondary">✓</span> Mais de <span className="gradient-text">300 clientes</span> atendidos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
