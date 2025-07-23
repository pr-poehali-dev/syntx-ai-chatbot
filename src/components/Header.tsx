import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="border-b border-white/10 backdrop-blur-sm bg-white/5">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-ai-blue to-ai-purple rounded-lg flex items-center justify-center">
            <Icon name="Brain" size={20} />
          </div>
          <span className="text-2xl font-montserrat font-bold">
            SYNTX <span className="text-ai-blue">AI</span>
          </span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-ai-blue transition-colors">Возможности</a>
          <a href="#pricing" className="hover:text-ai-blue transition-colors">Тарифы</a>
          <a href="#reviews" className="hover:text-ai-blue transition-colors">Отзывы</a>
          <a href="#faq" className="hover:text-ai-blue transition-colors">FAQ</a>
        </nav>
        <Button className="bg-gradient-to-r from-ai-blue to-ai-purple hover:from-ai-purple hover:to-ai-blue">
          Начать бесплатно
        </Button>
      </div>
    </header>
  );
};

export default Header;