import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const plans = [
    {
      name: "Базовый",
      price: "Бесплатно",
      description: "Для знакомства с возможностями SyntX AI",
      features: ["Ограниченное количество запросов", "Базовые функции генерации", "Доступ через Telegram"],
      highlight: false
    },
    {
      name: "Премиум",
      price: "999₽/мес",
      description: "Полный доступ к возможностям нейросети",
      features: ["Неограниченные запросы", "Все премиум-функции", "Эксклюзивные AI-модели", "Приоритетная поддержка"],
      highlight: true
    },
    {
      name: "Корпоративный",
      price: "По запросу",
      description: "Решения для бизнеса любого масштаба",
      features: ["Индивидуальные настройки", "API доступ", "Техническая поддержка 24/7", "Интеграция с вашими системами"],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Тарифы <span className="text-ai-purple">SyntX AI</span> - выберите свой план
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Гибкие тарифные планы для любых потребностей
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.highlight ? 'border-ai-purple shadow-2xl scale-105' : 'border-white/10'} bg-white/5 hover:bg-white/10 transition-all duration-300`}>
              {plan.highlight && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-ai-blue to-ai-purple">
                  Популярный
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-montserrat text-white">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-ai-blue mb-2">{plan.price}</div>
                <CardDescription className="text-gray-400">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Icon name="Check" size={16} className="text-ai-blue mr-3" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
                <Button className={`w-full mt-6 ${plan.highlight ? 'bg-gradient-to-r from-ai-blue to-ai-purple hover:from-ai-purple hover:to-ai-blue' : 'bg-white/10 hover:bg-white/20'}`} asChild>
                  <a href="https://t.me/syntxaibot?start=aff_797685317" target="_blank" rel="noopener noreferrer">
                    {plan.name === 'Корпоративный' ? 'Связаться с нами' : 'Выбрать план'}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;