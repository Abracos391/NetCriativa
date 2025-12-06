import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import Testimonials from "@/components/landing/Testimonials";
import Plans from "@/components/landing/Plans";
import HowItWorks from "@/components/landing/HowItWorks";
import About from "@/components/landing/About";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import ChatbotWhatsApp from "@/components/landing/ChatbotWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Benefits />
      <Testimonials />
      <Plans />
      <HowItWorks />
      <About />
      <FinalCTA />
      <Footer />
      <ChatbotWhatsApp />
    </div>
  );
};

export default Index;
