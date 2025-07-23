import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
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

  return (
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
  );
};

export default FAQ;