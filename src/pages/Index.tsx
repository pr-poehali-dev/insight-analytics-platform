import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-secondary">
              Alfa Insight
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Продукт', 'Кейсы', 'Цены'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button 
              size="lg" 
              className="hidden md:inline-flex"
              onClick={() => scrollToSection('заявка')}
            >
              Заказать презентацию
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-white via-accent/30 to-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-secondary leading-[1.1]">
              Данные превращаются<br />в <span className="text-primary">решения</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Платформа аналитики на основе банковских транзакций, ОФД, операторов связи и других источников
            </p>
            <Button 
              size="lg" 
              className="text-lg px-10 py-7"
              onClick={() => scrollToSection('заявка')}
            >
              Заказать презентацию для моего бизнеса
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6 bg-secondary text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            300+ компаний выросли<br />во всех индустриях
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: '+40%', label: 'Средний рост продаж', desc: 'после подключения платформы' },
              { value: '100+', label: 'Источников данных', desc: 'банки, ОФД, связь, геоданные' },
              { value: '50+', label: 'Индустрий', desc: 'от HoReCa до промышленности' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3">{stat.value}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-white/70">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools - 8 в одной платформе */}
      <section id="продукт" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
              8 инструментов в одной платформе
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Всё необходимое для анализа рынка и клиентов — без сложной интеграции
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Users', title: 'Сегментация клиентов', desc: 'По поведению и финансам' },
              { icon: 'TrendingUp', title: 'Прогнозы спроса', desc: 'ИИ-модели по категориям' },
              { icon: 'Target', title: 'Доля кошелька', desc: 'Где ваш клиент тратит' },
              { icon: 'Map', title: 'Геоаналитика', desc: 'Тепловые карты трафика' },
              { icon: 'PieChart', title: 'Анализ конкурентов', desc: 'Реальные доли рынка' },
              { icon: 'Zap', title: 'Отток и лояльность', desc: 'Причины ухода клиентов' },
              { icon: 'BarChart', title: 'Жизненные события', desc: 'Рождение, переезд, покупки' },
              { icon: 'Package', title: 'Каналы сбыта', desc: 'Эффективность партнёров' },
            ].map((tool, idx) => (
              <Card key={idx} className="p-6 hover-scale group cursor-pointer border-2 transition-all hover:border-primary">
                <Icon name={tool.icon as any} className="text-primary mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-lg font-bold mb-2 text-secondary">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-6 bg-accent/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
              Готовые решения<br />для вашей индустрии
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Без долгой кастомной разработки — запускаемся за 1-3 месяца
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: 'UtensilsCrossed',
                title: 'Общепит (HoReCa)',
                points: ['Средний чек и портрет гостя', 'Доля в ресторанном кошельке', 'Причины оттока клиентов'],
              },
              {
                icon: 'ShoppingCart',
                title: 'Розничная торговля',
                points: ['Прогнозы спроса', 'Тепловая карта лояльности', 'Эффективность промо-акций'],
              },
              {
                icon: 'Package',
                title: 'Продукты питания и FMCG',
                points: ['Паттерны покупок', 'Реакция на новые товары', 'Анализ корзин'],
              },
              {
                icon: 'Car',
                title: 'Автобизнес',
                points: ['Когорты покупателей авто', 'Эффективные точки касания', 'Потенциал апселла'],
              },
              {
                icon: 'HeartPulse',
                title: 'Медицина и фармацевтика',
                points: ['Жизненные события (рождение ребёнка)', 'Кластеры потребителей', 'Сезонность спроса'],
              },
              {
                icon: 'Building2',
                title: 'B2B и промышленность',
                points: ['Прозрачность конечного спроса', 'Управление дилерской сетью', 'Планирование производства'],
              },
            ].map((industry, idx) => (
              <Card key={idx} className="p-6 md:p-8 hover-scale group cursor-pointer border-2 transition-all hover:border-primary">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <Icon name={industry.icon as any} className="text-primary" size={36} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-secondary">{industry.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      {industry.points.map((point, pIdx) => (
                        <div key={pIdx} className="bg-accent/50 px-4 py-2 rounded-full text-sm text-secondary">
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
              Как мы начинаем работать
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '1',
                title: 'Знакомство',
                time: '2-3 встречи',
                desc: 'Разбираем ваши бизнес-вопросы, показываем модули Alfa Insight, определяем приоритеты',
              },
              {
                num: '2',
                title: 'Пилот',
                time: '1-3 месяца',
                desc: 'Подключаем вашу компанию, готовим 1-2 ключевых дашборда, тестируем внутри команды',
              },
              {
                num: '3',
                title: 'Регулярный сервис',
                time: 'Долгосрочно',
                desc: 'Ежемесячные/квартальные обновления аналитики, индивидуальные исследования по запросу',
              },
            ].map((step, idx) => (
              <Card key={idx} className="p-8 relative overflow-hidden group border-2">
                <div className="absolute top-4 right-4 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  {step.num}
                </div>
                <div className="relative">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-secondary">{step.title}</h3>
                  <p className="text-primary font-semibold mb-3">{step.time}</p>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Support */}
      <section className="py-20 px-6 bg-secondary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Надёжность и безопасность
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Ваши данные защищены на уровне банка
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Shield',
                title: 'Банковская инфраструктура',
                desc: 'Работаем на серверах Alfa-Bank с максимальными стандартами защиты',
              },
              {
                icon: 'Lock',
                title: 'Обезличенные данные',
                desc: 'Вся информация агрегирована и полностью анонимизирована',
              },
              {
                icon: 'Users',
                title: 'Команда экспертов',
                desc: 'Персональный менеджер, обучение команды, техподдержка 24/7',
              },
            ].map((item, idx) => (
              <Card key={idx} className="bg-white/5 backdrop-blur border-white/10 p-8 text-center">
                <Icon name={item.icon as any} className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/80">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="заявка" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
              Заказать презентацию
            </h2>
            <p className="text-xl text-muted-foreground">
              Покажем платформу и расскажем,<br />как она решит ваши бизнес-задачи
            </p>
          </div>

          <Card className="p-8 md:p-12 border-2">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-secondary mb-2">
                  Имя *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Иван Иванов"
                  className="h-12 text-base"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-secondary mb-2">
                  Компания *
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="ООО «Компания»"
                  className="h-12 text-base"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-secondary mb-2">
                  Телефон *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="h-12 text-base"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-secondary mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="h-12 text-base"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-lg py-6"
              >
                Заказать презентацию
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Alfa Insight</h3>
              <p className="text-white/70">
                Платформа аналитики для роста бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#продукт" className="hover:text-white transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отрасли</a></li>
                <li><a href="#цены" className="hover:text-white transition-colors">Цены</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#кейсы" className="hover:text-white transition-colors">Кейсы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>&copy; 2024 Alfa Insight. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
