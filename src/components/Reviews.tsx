import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      name: "Алексей М.",
      rating: 5,
      text: "Заказывал кроссовки Jordan 1. Пришли быстро, оригинал 100%. Упаковка супер! Буду заказывать еще.",
      date: "2 недели назад",
    },
    {
      name: "Мария К.",
      rating: 5,
      text: "Отличный сервис! Заказала сумку Louis Vuitton, проверили подлинность, все четко. Рекомендую!",
      date: "1 месяц назад",
    },
    {
      name: "Дмитрий П.",
      rating: 5,
      text: "Уже третий раз заказываю через них. Supreme худи пришел за 10 дней, все супер. Лучший сервис!",
      date: "3 недели назад",
    },
    {
      name: "Анна Л.",
      rating: 5,
      text: "Долго искала оригинальные кроссовки Yeezy. Здесь нашла и получила быстро. Спасибо большое!",
      date: "1 неделя назад",
    },
    {
      name: "Максим Р.",
      rating: 5,
      text: "Заказывал куртку Stone Island. Качество проверки на высоте, доставка быстрая. Очень доволен!",
      date: "2 месяца назад",
    },
    {
      name: "Елена С.",
      rating: 5,
      text: "Первый раз заказывала через посредника, переживала. Но все прошло отлично! Буду заказывать еще.",
      date: "3 недели назад",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Более 5000 довольных клиентов уже получили свои любимые бренды
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">
                      {review.name}
                    </h4>
                    <div className="flex space-x-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-purple-600 text-white p-8 rounded-2xl max-w-2xl mx-auto">
              <Icon
                name="Users"
                size={48}
                className="mx-auto mb-4 text-purple-200"
              />
              <h3 className="text-2xl font-semibold mb-4">
                Присоединяйтесь к нам!
              </h3>
              <p className="text-purple-100 mb-4">
                Станьте частью нашего сообщества довольных клиентов
              </p>
              <div className="flex justify-center space-x-8 text-center">
                <div>
                  <div className="text-3xl font-bold">5000+</div>
                  <div className="text-purple-200">Клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">4.9</div>
                  <div className="text-purple-200">Рейтинг</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">3</div>
                  <div className="text-purple-200">Года опыта</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
