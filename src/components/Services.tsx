import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const brands = [
    "Nike",
    "Adidas",
    "Jordan",
    "Supreme",
    "Off-White",
    "Balenciaga",
    "Gucci",
    "Louis Vuitton",
    "Stone Island",
    "Fear of God",
    "Yeezy",
    "Dior",
  ];

  const services = [
    {
      icon: "Package",
      title: "Доставка всех брендов",
      description: "Кроссовки, одежда, аксессуары от топовых мировых брендов",
    },
    {
      icon: "SearchCheck",
      title: "Проверка подлинности",
      description:
        "Каждый товар проходит экспертную проверку на оригинальность",
    },
    {
      icon: "Shield",
      title: "Упаковка премиум",
      description:
        "Бережная упаковка с защитой от повреждений при транспортировке",
    },
    {
      icon: "Clock",
      title: "Сроки доставки",
      description: "7-14 дней с момента заказа до получения в пункте выдачи",
    },
    {
      icon: "QrCode",
      title: "QR оплата",
      description: "Удобная оплата по QR-коду или банковским переводом",
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      description: "На связи в любое время для решения ваших вопросов",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг для доставки брендовых товаров с гарантией
              качества
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="text-center">
                  <Icon
                    name={service.icon as any}
                    size={48}
                    className="mx-auto mb-4 text-purple-600"
                  />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900">
              Доставляем товары брендов
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="font-semibold text-gray-800">{brand}</span>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 text-gray-600">
              И многие другие бренды по вашему запросу
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
