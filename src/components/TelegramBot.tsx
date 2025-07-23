import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TelegramBot = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-8 text-center">
          SyntX AI бот в Telegram: <span className="text-ai-purple">возможности и преимущества</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Телеграм бот SyntX — это революционный способ взаимодействия с искусственным интеллектом. SyntX AI бот предоставляет полный функционал платформы прямо в мессенджере:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="CheckCircle" size={20} className="text-ai-blue mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Генерация изображений и нейрофотосессия в SyntX</span>
              </li>
              <li className="flex items-start">
                <Icon name="CheckCircle" size={20} className="text-ai-blue mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Создание видеоконтента и анимации</span>
              </li>
              <li className="flex items-start">
                <Icon name="CheckCircle" size={20} className="text-ai-blue mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Работа с текстами и переводы</span>
              </li>
              <li className="flex items-start">
                <Icon name="CheckCircle" size={20} className="text-ai-blue mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">SyntX AI удалить фон на видео и другие инструменты обработки</span>
              </li>
            </ul>
            
            <p className="text-gray-400">
              Как пользоваться SyntX AI через Telegram бот интуитивно понятно даже новичкам. Достаточно написать команду или отправить файл, и чат бот SyntX мгновенно обработает запрос.
            </p>
            
            <Card className="bg-ai-blue/10 border-ai-blue/30">
              <CardContent className="p-6">
                <p className="text-gray-300">
                  <strong className="text-ai-blue">SyntX AL бот в Telegram</strong> представляет собой облегченную версию с базовым функционалом, идеальную для начинающих пользователей. Подробные инструкции доступны в документации платформы.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-80 bg-gradient-to-br from-ai-blue/20 to-ai-purple/20 rounded-3xl p-6 border border-white/10">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-ai-blue to-ai-purple rounded-full flex items-center justify-center mx-auto">
                    <Icon name="MessageSquare" size={32} />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl">Telegram Bot</h3>
                  <p className="text-sm text-gray-400">Все возможности AI прямо в мессенджере</p>
                  <Button className="w-full bg-gradient-to-r from-ai-blue to-ai-purple hover:from-ai-purple hover:to-ai-blue" asChild>
                    <a href="https://t.me/syntxaibot?start=aff_797685317" target="_blank" rel="noopener noreferrer">
                      Запустить бота
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramBot;