import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <Badge className="mb-6 bg-white/10 text-ai-blue">
            <Icon name="Sparkles" size={16} className="mr-2" />
            Революция в AI-технологиях
          </Badge>
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 bg-gradient-to-r from-white via-ai-blue to-ai-purple bg-clip-text text-transparent animate-gradient-shift bg-300% leading-tight">
            SyntX AI
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300 max-w-3xl mx-auto">
            Универсальная нейросеть для творчества и бизнеса
          </p>
          <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto">
            Создавайте изображения, видео, музыку и тексты с помощью передовых AI-технологий. 
            Весь функционал доступен прямо в Telegram.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-ai-blue to-ai-purple hover:from-ai-purple hover:to-ai-blue text-lg px-8 py-3">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Попробовать в Telegram
            </Button>
            <Button size="lg" variant="outline" className="border-ai-blue text-ai-blue hover:bg-ai-blue hover:text-white text-lg px-8 py-3">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>
        </div>
        <div className="mt-16 relative">
          <img 
            src="/img/efa04ecb-51f1-4ce8-905e-799c93197db4.jpg" 
            alt="SyntX AI Neural Network" 
            className="rounded-2xl shadow-2xl mx-auto max-w-4xl w-full border border-white/10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ai-dark/50 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;