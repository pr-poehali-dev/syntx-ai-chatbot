import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Features = () => {
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

  return (
    <section id="features" className="py-20 px-4 bg-white/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Безграничные возможности <span className="text-ai-blue">SyntX AI</span>
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
  );
};

export default Features;