import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Icon
              name="Package"
              size={64}
              className="mx-auto mb-6 text-purple-400"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Доставка брендов
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Доставляем все возможные бренды с гарантией подлинности. Быстро,
            надежно, с проверкой качества каждого товара.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4"
            >
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Заказать доставку
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-purple-400 text-purple-300 hover:bg-purple-800"
            >
              <Icon name="QrCode" size={20} className="mr-2" />
              QR оплата
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <Icon
                name="Shield"
                size={32}
                className="mx-auto mb-4 text-green-400"
              />
              <h3 className="text-lg font-semibold mb-2">100% подлинность</h3>
              <p className="text-gray-400">Проверяем каждый товар</p>
            </div>
            <div className="text-center">
              <Icon
                name="Truck"
                size={32}
                className="mx-auto mb-4 text-blue-400"
              />
              <h3 className="text-lg font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-400">От 7 до 14 дней</p>
            </div>
            <div className="text-center">
              <Icon
                name="CreditCard"
                size={32}
                className="mx-auto mb-4 text-purple-400"
              />
              <h3 className="text-lg font-semibold mb-2">Удобная оплата</h3>
              <p className="text-gray-400">QR-код или перевод</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
