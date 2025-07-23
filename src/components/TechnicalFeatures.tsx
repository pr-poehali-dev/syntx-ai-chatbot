import { Card, CardContent } from "@/components/ui/card";

const TechnicalFeatures = () => {
  return (
    <section className="py-20 px-4 bg-white/5">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-8 text-center">
          Технические особенности и <span className="text-ai-blue">доступность</span>
        </h2>
        
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            SyntX сайт предоставляет полный доступ ко всем функциям платформы. SyntX AI сайт регулярно обновляется с добавлением новых возможностей.
          </p>
          <p>
            SyntX официальный сайт является единственным источником достоверной информации о сервисе и его возможностях.
          </p>
          
          <Card className="bg-ai-blue/10 border-ai-blue/30">
            <CardContent className="p-6">
              <p className="text-gray-300">
                <strong className="text-ai-blue">Важно:</strong> Если возникают проблемы с доступом, помните, что SyntX AI может не работать по техническим причинам, но команда поддержки оперативно решает все вопросы.
              </p>
            </CardContent>
          </Card>
          
          <div>
            <h3 className="text-2xl font-montserrat font-bold mb-4 text-ai-purple">Аналоги и конкуренты</h3>
            <p>
              Хотя существуют аналоги SyntX AI и другие сервисы, похожие на SyntX AI, данная платформа выделяется комплексным подходом и удобством использования. SyntX аналоги не предлагают такой же уровень интеграции с популярными мессенджерами и широты функционала.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-montserrat font-bold mb-4 text-ai-blue">Заключение: почему выбирают SyntX AI</h3>
            <p>
              SyntX объединяет в себе мощь современного искусственного интеллекта с простотой использования. Благодаря SyntX AI возможностям пользователи могут решать творческие и бизнес-задачи любой сложности.
            </p>
            <p>
              Гибкая система тарифов, качественная поддержка и постоянное развитие платформы делают SyntX AI оптимальным выбором для работы с нейросетями в 2025 году.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalFeatures;