import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      icon: "Image",
      title: "Генерация изображений",
      description: "Создавайте уникальные изображения и нейрофотосессии с помощью передовых AI-алгоритмов"
    },
    {
      icon: "Video",
      title: "Создание видео",
      description: "Производите видеоконтент, анимацию и удаляйте фон на видео одним кликом"
    },
    {
      icon: "Music",
      title: "Музыка и аудио",
      description: "Композируйте музыкальные треки и создавайте аудиоконтент для любых задач"
    },
    {
      icon: "FileText",
      title: "Работа с текстом",
      description: "Генерируйте тексты, переводите и обрабатывайте контент на профессиональном уровне"
    },
    {
      icon: "MessageSquare",
      title: "Telegram бот",
      description: "Весь функционал доступен прямо в Telegram - никаких дополнительных приложений"
    },
    {
      icon: "Zap",
      title: "Быстрая обработка",
      description: "Мгновенная обработка запросов и высокое качество генерируемого контента"
    }
  ];

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

  const faqs = [
    {
      question: "Как начать работу с SyntX AI?",
      answer: "Просто найдите бота @SyntX_AI в Telegram и отправьте команду /start. Новые пользователи получают бесплатный доступ к базовым функциям."
    },
    {
      question: "Какие форматы файлов поддерживает SyntX AI?",
      answer: "SyntX AI работает с изображениями (JPG, PNG, WebP), видео (MP4, AVI, MOV), аудио (MP3, WAV) и текстовыми файлами различных форматов."
    },
    {
      question: "Можно ли использовать SyntX AI для коммерческих целей?",
      answer: "Да, премиум и корпоративные подписки включают лицензию на коммерческое использование созданного контента."
    },
    {
      question: "Как оплатить подписку и есть ли промокоды?",
      answer: "Оплата доступна через банковские карты и электронные кошельки. Актуальные промокоды публикуются в наших официальных каналах."
    }
  ];

  const reviews = [
    {
      name: "Алексей М.",
      text: "SyntX AI кардинально изменил мой рабочий процесс. Качество генерируемых изображений поражает!",
      rating: 5
    },
    {
      name: "Мария К.",
      text: "Удобство работы через Telegram и скорость обработки - именно то, что нужно для современного бизнеса.",
      rating: 5
    },
    {
      name: "Дмитрий В.",
      text: "Использую для создания контента в соцсетях. Нейрофотосессии получаются лучше настоящих съемок!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-ai-dark via-slate-900 to-ai-dark text-white font-open-sans">
      {/* Header */}
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

      {/* Hero Section */}
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

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Безграничные возможности <span className="text-ai-blue">AI</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              SyntX AI объединяет все инструменты искусственного интеллекта в одной платформе
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-ai-blue to-ai-purple rounded-lg flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} size={24} />
                  </div>
                  <CardTitle className="text-white font-montserrat">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Выберите свой <span className="text-ai-purple">тариф</span>
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
                  <Button className={`w-full mt-6 ${plan.highlight ? 'bg-gradient-to-r from-ai-blue to-ai-purple hover:from-ai-purple hover:to-ai-blue' : 'bg-white/10 hover:bg-white/20'}`}>
                    {plan.name === 'Корпоративный' ? 'Связаться с нами' : 'Выбрать план'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Отзывы <span className="text-ai-blue">пользователей</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Узнайте, что говорят о SyntX AI наши клиенты
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white font-montserrat">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Часто задаваемые <span className="text-ai-purple">вопросы</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ответы на самые популярные вопросы о SyntX AI
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-white/10 rounded-lg px-6 bg-white/5">
                  <AccordionTrigger className="text-white font-montserrat hover:text-ai-blue">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-ai-blue/20 to-ai-purple/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Готовы начать работу с <span className="text-ai-blue">SyntX AI</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам пользователей, которые уже используют SyntX AI для решения творческих и бизнес-задач
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-ai-blue to-ai-purple hover:from-ai-purple hover:to-ai-blue text-lg px-8 py-3">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Начать в Telegram
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ai-dark text-lg px-8 py-3">
              <Icon name="ExternalLink" size={20} className="mr-2" />
              Официальный сайт
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;