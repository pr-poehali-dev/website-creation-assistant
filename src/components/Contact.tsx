import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Контакты и оплата
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Свяжитесь с нами удобным способом или оплатите заказ по QR-коду
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Контактная информация */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="MessageCircle"
                      size={24}
                      className="mr-3 text-purple-600"
                    />
                    Как сделать заказ
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">
                      1
                    </span>
                    <p className="text-gray-600">
                      Пришлите ссылку на товар в мессенджер
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">
                      2
                    </span>
                    <p className="text-gray-600">
                      Получите расчет стоимости с доставкой
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">
                      3
                    </span>
                    <p className="text-gray-600">Оплатите заказ по QR-коду</p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">
                      4
                    </span>
                    <p className="text-gray-600">
                      Получите товар через 7-14 дней
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="Clock"
                      size={24}
                      className="mr-3 text-purple-600"
                    />
                    Время работы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">
                    Понедельник - Воскресенье
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    08:00 - 22:00 МСК
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Отвечаем в течение 15 минут
                  </p>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  <Icon name="Send" size={20} className="mr-2" />
                  Telegram
                </Button>
                <a
                  href="https://wa.me/79999999999?text=Здравствуйте! Хочу сделать заказ через ваш сервис. Можете помочь?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" className="w-full">
                    <Icon name="MessageSquare" size={20} className="mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* QR код для оплаты */}
            <div className="flex justify-center">
              <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center">
                    <Icon
                      name="QrCode"
                      size={24}
                      className="mr-3 text-purple-600"
                    />
                    QR для оплаты
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  {/* QR код placeholder */}
                  <div className="bg-gray-100 p-8 rounded-2xl">
                    <div className="w-48 h-48 mx-auto bg-white rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                      <div className="text-center">
                        <Icon
                          name="QrCode"
                          size={64}
                          className="mx-auto mb-2 text-gray-400"
                        />
                        <p className="text-sm text-gray-500">
                          QR код для оплаты
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-gray-600">
                      Отсканируйте QR-код для быстрой оплаты
                    </p>
                    <div className="text-sm text-gray-500">
                      <p>Принимаем: СБП, карты, электронные кошельки</p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-center text-green-700">
                      <Icon name="Shield" size={20} className="mr-2" />
                      <span className="font-semibold">Безопасная оплата</span>
                    </div>
                    <p className="text-sm text-green-600 mt-1">
                      Ваши данные защищены
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
