import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Learning = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-8 text-center">
          Обучение и инструкции <span className="text-ai-blue">SyntX AI</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-ai-blue/10 to-transparent border-ai-blue/30">
            <CardHeader>
              <CardTitle className="text-xl font-montserrat text-ai-blue flex items-center">
                <Icon name="BookOpen" size={24} className="mr-2" />
                Обучающие материалы
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                Обучение SyntX доступно через официальную документацию и видеоуроки. SyntX уроки охватывают все аспекты работы с платформой — от базовых функций до продвинутых техник.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Пошаговые инструкции по использованию</li>
                <li>• Примеры промптов для лучших результатов</li>
                <li>• SyntX AI инструкция по настройке и оптимизации</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-ai-purple/10 to-transparent border-ai-purple/30">
            <CardHeader>
              <CardTitle className="text-xl font-montserrat text-ai-purple flex items-center">
                <Icon name="Database" size={24} className="mr-2" />
                База знаний
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                SyntX AI база знаний содержит ответы на частые вопросы и детальные руководства по всем функциям платформы.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-8">
          <h3 className="text-2xl font-montserrat font-bold text-center text-ai-purple">
            Специальные возможности: фотосессии и видео
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-ai-blue to-ai-purple rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Camera" size={24} />
                </div>
                <CardTitle className="text-white font-montserrat">Нейрофотосессия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">
                  Фотосессия в SyntX открывает новые горизонты для создания уникального визуального контента. Создавайте профессиональные портреты без физической съемки.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-ai-blue to-ai-purple rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Video" size={24} />
                </div>
                <CardTitle className="text-white font-montserrat">Видео функционал</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">
                  SyntX видео функционал включает создание анимации, монтаж и эффекты. Используйте передовые алгоритмы для видеообработки.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-ai-blue to-ai-purple rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Image" size={24} />
                </div>
                <CardTitle className="text-white font-montserrat">Создание изображений</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm">
                  Делать свои фото в SyntX можно как с нуля, так и на основе загруженных изображений. Реалистичные результаты гарантированы.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;