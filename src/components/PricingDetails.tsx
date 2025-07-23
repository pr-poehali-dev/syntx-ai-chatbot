import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const PricingDetails = () => {
  return (
    <section className="py-20 px-4 bg-white/5">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-8 text-center">
          Тарифы и подписка SyntX AI: <span className="text-ai-blue">выгодные предложения</span>
        </h2>
        
        <div className="space-y-8">
          <div className="text-lg text-gray-300 leading-relaxed space-y-4">
            <p>
              SyntX подписка предлагает гибкие тарифные планы для разных потребностей. SyntX тарифы включают базовый план с ограниченным количеством запросов, премиум-подписку с расширенными возможностями и корпоративные решения для бизнеса.
            </p>
            <p>
              SyntX AI тарифы регулярно обновляются с учетом потребностей пользователей. Как оплатить SyntX — через различные платежные системы, включая банковские карты и электронные кошельки.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-ai-blue/10 to-transparent border-ai-blue/30">
              <CardHeader>
                <CardTitle className="text-xl font-montserrat text-ai-blue flex items-center">
                  <Icon name="CreditCard" size={24} className="mr-2" />
                  Промокоды и скидки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  SyntX промокод и SyntX AI промокод позволяют получить скидки на подписку. Актуальные промокоды публикуются в официальных каналах платформы.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-ai-purple/10 to-transparent border-ai-purple/30">
              <CardHeader>
                <CardTitle className="text-xl font-montserrat text-ai-purple flex items-center">
                  <Icon name="Crown" size={24} className="mr-2" />
                  Премиум доступ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  SyntX AI подписка предоставляет доступ ко всем премиум-функциям, включая эксклюзивные модели ИИ. Купить подписку SyntX можно на официальном сайте или через Telegram-бота.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingDetails;