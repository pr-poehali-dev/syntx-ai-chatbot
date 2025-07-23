import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Reviews = () => {
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
    <section id="reviews" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Отзывы <span className="text-ai-blue">пользователей</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Узнайте, что говорят о SyntX AI наши клиенты
          </p>
          
          <div className="mt-8 space-y-4 max-w-3xl mx-auto text-left">
            <p className="text-gray-300">
              SyntX отзывы подтверждают высокое качество сервиса и удобство использования. SyntX AI отзывы особенно отмечают:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-400">
              <li className="flex items-center">
                <Icon name="CheckCircle" size={16} className="text-ai-blue mr-2" />
                Высокое качество генерируемого контента
              </li>
              <li className="flex items-center">
                <Icon name="CheckCircle" size={16} className="text-ai-blue mr-2" />
                Быстрая скорость обработки запросов
              </li>
              <li className="flex items-center">
                <Icon name="CheckCircle" size={16} className="text-ai-blue mr-2" />
                Удобный интерфейс и интеграция с Telegram
              </li>
              <li className="flex items-center">
                <Icon name="CheckCircle" size={16} className="text-ai-blue mr-2" />
                Адекватная ценовая политика
              </li>
            </ul>
            <p className="text-gray-400 text-sm">
              SyntX AI отзывы реальные от пользователей подчеркивают стабильность работы сервиса и качество технической поддержки. Отзывы о боте SyntX высоко оценивают удобство работы через Telegram.
            </p>
          </div>
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
  );
};

export default Reviews;