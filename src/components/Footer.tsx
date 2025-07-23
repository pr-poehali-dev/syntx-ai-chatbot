import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12 px-4 bg-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-ai-blue to-ai-purple rounded-lg flex items-center justify-center">
                <Icon name="Brain" size={20} />
              </div>
              <span className="text-2xl font-montserrat font-bold">
                SYNTX <span className="text-ai-blue">AI</span>
              </span>
            </div>
            <p className="text-gray-400">
              Универсальная нейросеть для творчества и бизнеса
            </p>
          </div>
          <div>
            <h3 className="font-montserrat font-semibold mb-4 text-white">Продукт</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-ai-blue transition-colors">Возможности</a></li>
              <li><a href="#" className="hover:text-ai-blue transition-colors">Тарифы</a></li>
              <li><a href="#" className="hover:text-ai-blue transition-colors">API</a></li>
              <li><a href="#" className="hover:text-ai-blue transition-colors">Документация</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-montserrat font-semibold mb-4 text-white">Поддержка</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-ai-blue transition-colors">Помощь</a></li>
              <li><a href="#" className="hover:text-ai-blue transition-colors">Обучение</a></li>
              <li><a href="#" className="hover:text-ai-blue transition-colors">Сообщество</a></li>
              <li><a href="#" className="hover:text-ai-blue transition-colors">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-montserrat font-semibold mb-4 text-white">Следите за нами</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-ai-blue transition-colors">
                <Icon name="MessageSquare" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ai-blue transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ai-blue transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SyntX AI. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;