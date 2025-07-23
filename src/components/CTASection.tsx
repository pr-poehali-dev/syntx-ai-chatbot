import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-ai-blue/20 to-ai-purple/20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
          Готовы начать работу с <span className="text-ai-blue">SyntX AI</span>?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Присоединяйтесь к тысячам пользователей, которые уже используют SyntX AI для решения творческих и бизнес-задач
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-gradient-to-r from-ai-blue to-ai-purple hover:from-ai-purple hover:to-ai-blue text-lg px-8 py-3" asChild>
            <a href="https://t.me/syntxaibot?start=aff_797685317" target="_blank" rel="noopener noreferrer">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Начать в Telegram
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ai-dark text-lg px-8 py-3" asChild>
            <a href="https://t.me/syntxaibot?start=aff_797685317" target="_blank" rel="noopener noreferrer">
              <Icon name="ExternalLink" size={20} className="mr-2" />
              Официальный сайт
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;