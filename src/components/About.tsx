import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              О нашем сервисе
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы — надежный посредник между вами и мировыми брендами,
              обеспечивающий безопасную доставку оригинальных товаров
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Icon name="Globe" size={48} className="text-purple-600 mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Как мы работаем
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    Принимаем заказ и оплату
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    Выкупаем товар у официальных продавцов
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    Проверяем подлинность и качество
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-green-500 mr-3"
                    />
                    Отправляем вам с трек-номером
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-2xl text-white">
                <Icon name="Award" size={48} className="text-purple-200 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">
                  Почему выбирают нас
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Icon
                      name="Star"
                      size={20}
                      className="text-yellow-400 mr-3"
                    />
                    Опыт работы более 3 лет
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Star"
                      size={20}
                      className="text-yellow-400 mr-3"
                    />
                    Более 5000 довольных клиентов
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Star"
                      size={20}
                      className="text-yellow-400 mr-3"
                    />
                    Гарантия возврата при подделке
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Star"
                      size={20}
                      className="text-yellow-400 mr-3"
                    />
                    Страховка каждой посылки
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
