import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FreeAccess = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-8 text-center">
          SyntX бесплатно: <span className="text-ai-blue">как получить доступ без оплаты</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-ai-blue/10 to-transparent border-ai-blue/30">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat text-ai-blue">SyntX AI Бесплатно</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                SyntX бесплатно доступен всем новым пользователям с базовым набором функций. SyntX AI бесплатно можно использовать для ознакомления с возможностями платформы.
              </p>
              <Button className="w-full bg-ai-blue hover:bg-ai-blue/80">
                Начать бесплатно
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-ai-purple/10 to-transparent border-ai-purple/30">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat text-ai-purple">SyntX AL Бесплатно</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                SyntX AL бесплатно предлагает ограниченный, но функциональный набор инструментов для создания контента. Это отличный способ протестировать сервис перед покупкой полной подписки.
              </p>
              <Button className="w-full bg-ai-purple hover:bg-ai-purple/80">
                Попробовать AL
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FreeAccess;