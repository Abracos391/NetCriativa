import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Proprietário - Mendes Advocacia",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/f1e3c8a9-4b2d-4e8f-9a1c-2d3e4f5a6b7c.jpg",
      text: "Depois da landing page da NetCriativa, meus agendamentos de consultas aumentaram 340%. O investimento se pagou na primeira semana!",
      result: "+340% em agendamentos"
    },
    {
      name: "Ana Paula Silva",
      role: "CEO - Silva Estética",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/a2b3c4d5-6e7f-8a9b-0c1d-2e3f4a5b6c7d.jpg",
      text: "Profissionalismo do início ao fim. A página ficou linda e os clientes não param de elogiar. Já recuperei o investimento 5x!",
      result: "ROI de 500%"
    },
    {
      name: "Roberto Almeida",
      role: "Fundador - Almeida Consultoria",
      image: "https://miaoda-site-img.s3cdn.medo.dev/images/b3c4d5e6-7f8a-9b0c-1d2e-3f4a5b6c7d8e.jpg",
      text: "A NetCriativa entendeu exatamente o que eu precisava. Em 7 dias estava no ar e gerando leads qualificados. Recomendo!",
      result: "+120 leads/mês"
    }
  ];

  return (
    <section className="py-16 xl:py-24 bg-[var(--gradient-section)] relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl xl:text-7xl font-bold mb-8 max-sm:text-4xl">
            Resultados <span className="gradient-text">Reais</span> de Clientes Reais
          </h2>
          <p className="text-xl xl:text-2xl text-foreground/70 max-w-3xl mx-auto max-sm:text-lg leading-relaxed">
            Veja como transformamos negócios com landing pages de alta conversão
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass-card border-2 border-white/50 hover:border-primary/50 transition-all shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="h-12 w-12 text-primary/30" />
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <p className="text-foreground/80 leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </p>
                
                <div className="inline-block glass-card px-4 py-2 rounded-full mb-6">
                  <p className="text-sm font-bold text-secondary">
                    {testimonial.result}
                  </p>
                </div>
                
                <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
