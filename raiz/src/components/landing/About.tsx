import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Acessível",
      description: "Preços justos para todos os tamanhos de negócio",
      color: "from-primary/20 to-primary/10"
    },
    {
      icon: Target,
      title: "Profissional",
      description: "Qualidade e design que transmitem credibilidade",
      color: "from-secondary/20 to-secondary/10"
    },
    {
      icon: Zap,
      title: "Rápido",
      description: "Entrega ágil sem comprometer a qualidade",
      color: "from-primary/20 to-primary/10"
    }
  ];

  return (
    <section className="py-16 xl:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-5" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl xl:text-7xl font-bold mb-8 max-sm:text-4xl">
              Sobre a <span className="gradient-text">NetCriativa</span>
            </h2>
            <p className="text-xl xl:text-3xl text-foreground/70 leading-relaxed max-w-4xl mx-auto max-sm:text-lg font-light">
              A NetCriativa foi criada para ajudar pequenos negócios a entrar no digital 
              com baixo investimento e presença profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-20">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="glass-card border-2 border-white/50 hover:border-primary/50 transition-all shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:scale-105 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-10 text-center">
                  <div className={`mb-8 mx-auto inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br ${value.color} group-hover:scale-110 transition-transform`}>
                    <value.icon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-bold text-3xl mb-4">{value.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-lg">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
