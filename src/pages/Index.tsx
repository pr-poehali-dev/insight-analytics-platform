import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-secondary">
              Alfa Insight
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Главная', 'Возможности', 'Решения', 'О платформе', 'Отрасли', 'Контакты'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item === 'Главная' ? 'home' : item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === (item === 'Главная' ? 'home' : item.toLowerCase())
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button size="lg" className="hidden md:inline-flex">
              Связаться с нами
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-secondary leading-tight">
              Данные превращаются
              <br />
              <span className="text-primary">в решения</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Интеллектуальная аналитическая платформа, которая превращает мощные массивы данных 
              в понятные инсайты и готовые сценарии для роста
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Попробовать платформу
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Смотреть демо
              </Button>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: 'Database', title: '100+ источников данных', desc: 'Банковские транзакции, ОФД, операторы связи' },
              { icon: 'TrendingUp', title: 'Рост на 40%', desc: 'Средний прирост эффективности маркетинга' },
              { icon: 'Zap', title: 'Мгновенные инсайты', desc: 'Анализ в реальном времени без задержек' },
            ].map((stat, idx) => (
              <Card key={idx} className="p-6 hover-scale cursor-pointer border-2">
                <Icon name={stat.icon as any} className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
                <p className="text-muted-foreground">{stat.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What is Alfa Insight */}
      <section className="py-20 bg-accent/50 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
                Что такое Alfa Insight
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы объединяем и анализируем уникальные данные: банковские транзакции и эмиссию, 
                информацию операторов фискальных данных (ОФД), агрегированные данные операторов связи, 
                геоданные, а также внешние рыночные исследования.
              </p>
              <p className="text-lg text-secondary font-semibold mb-8">
                Вы видите своё положение на рынке, клиентов и конкурентов в цифрах, а не догадках — 
                с рекомендациями, куда двигать маркетинг, продукт и продажи.
              </p>
              <Button size="lg">
                Узнать больше
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '100+', label: 'Источников данных' },
                { value: '50+', label: 'Отраслей' },
                { value: '1000+', label: 'Компаний' },
                { value: '24/7', label: 'Мониторинг' },
              ].map((item, idx) => (
                <Card key={idx} className="p-6 text-center hover-scale">
                  <div className="text-4xl font-bold text-primary mb-2">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="возможности" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
              Преимущества платформы
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Alfa Insight закрывает ключевой дефицит бизнеса — доступ к понятной, 
              регулярной и глубокой аналитике рынка и клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Layers',
                title: 'Уникальные отраслевые решения',
                desc: 'Готовые модели и метрики под конкретные отрасли: общепит, ритейл, медицина, авто, beauty — без долгой кастомной разработки',
              },
              {
                icon: 'Search',
                title: 'Поиск инсайтов под ваш бизнес',
                desc: 'Сервис помогает найти ответы: почему упал поток, где вы теряете клиентов, какие сегменты недоиспользованы',
              },
              {
                icon: 'Database',
                title: 'Широта многомерных данных',
                desc: 'Все слои транзакций, данные ОФД, операторов связи и множеством других источников. Всего более 100 источников данных',
              },
              {
                icon: 'BarChart',
                title: 'Ключевые показатели простыми словами',
                desc: 'Дашборды и отчёты без «аналитического жаргона»: понятные выводы для генерального директора, коммерческого директора',
              },
              {
                icon: 'Brain',
                title: 'ИИ-модели и современные методы',
                desc: 'Применяем машинное обучение и продвинутую статистику для более точных прогнозов и сегментации клиентов',
              },
              {
                icon: 'Target',
                title: 'Управляемый маркетинг',
                desc: 'Где и на какие сегменты давить, какие каналы работают, а какие — нет. Сокращение ручной аналитики',
              },
            ].map((benefit, idx) => (
              <Card key={idx} className="p-8 hover-scale group cursor-pointer border-2 transition-all hover:border-primary">
                <Icon name={benefit.icon as any} className="text-primary mb-4 group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-xl font-bold mb-3 text-secondary">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section id="решения" className="py-20 bg-secondary text-white px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Возможности платформы
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Детализированная аналитика для ключевых отраслей, сочетающая 
              операционные и стратегические данные
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                icon: 'TrendingUp',
                title: 'Анализ рынка и игроков',
                features: [
                  'Доля в выручке и «кошельке» клиента в вашей категории',
                  'Сравнение динамики с рынком и ближайшими конкурентами',
                  'Разбивка по регионам, городам и форматам точек/каналов',
                ],
              },
              {
                icon: 'Users',
                title: 'Цифровой двойник клиента',
                features: [
                  'Детальный портрет: кто покупает, стадия жизни, уровень потребления',
                  'Как покупает: частота, средний чек, каналы (онлайн/оффлайн)',
                  'Динамическая сегментация клиентской базы в компании и на рынке',
                  'Карта лояльности с точным коэффициентом возвращаемости (Retention Rate)',
                ],
              },
              {
                icon: 'LineChart',
                title: 'Прогнозы и сценарное моделирование',
                features: [
                  'Прогнозы спроса, рынка, влияния внешних факторов',
                  'Как изменится выручка при изменении цен, ассортимента или формата',
                  'Оценка эффекта от открытия/закрытия точек в конкретных локациях',
                ],
              },
              {
                icon: 'Map',
                title: 'Геоаналитика для точных прогнозов',
                features: [
                  'Разбивка вашей доли и динамики по городам/районам',
                  'Выявление «точек роста» и «зон риска» по географии',
                  'Анализ плотности конкурентов вокруг ваших локаций',
                ],
              },
            ].map((section, idx) => (
              <Card key={idx} className="bg-white/5 backdrop-blur border-white/10 p-8 hover-scale">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary/20 p-4 rounded-lg">
                      <Icon name={section.icon as any} className="text-primary" size={40} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                          <span className="text-white/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Teaser */}
      <section id="о платформе" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
              Что вы получаете
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Полный контроль над вашим бизнесом через призму данных
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: 'Eye',
                title: 'Видимость рынка и конкурентов',
                desc: 'Понимание своей доли и динамики относительно отрасли',
                color: 'bg-blue-500',
              },
              {
                icon: 'UserCheck',
                title: 'Чёткий портрет клиента',
                desc: 'Кто покупает, какой у него «кошелёк», какие ещё бренды присутствуют',
                color: 'bg-green-500',
              },
              {
                icon: 'Target',
                title: 'Управляемый маркетинг',
                desc: 'Где и на какие сегменты давить, какие каналы работают, а какие — нет',
                color: 'bg-purple-500',
              },
              {
                icon: 'Package',
                title: 'Управление ассортиментом и ценой',
                desc: 'Какие категории развивать, какие — чистить, где вы недозарабатываете',
                color: 'bg-orange-500',
              },
              {
                icon: 'Zap',
                title: 'Сокращение ручной аналитики',
                desc: 'Команда перестаёт «таскать данные по Excel» и фокусируется на действиях',
                color: 'bg-red-500',
              },
              {
                icon: 'Award',
                title: 'Обоснованные решения',
                desc: 'От ежедневного управления продажами до долгосрочного стратегического планирования',
                color: 'bg-indigo-500',
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-8 hover-scale group cursor-pointer border-2 transition-all hover:border-primary">
                <div className={`${item.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={item.icon as any} className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-secondary">{item.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Value Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
              Ценность для вашей отрасли
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Специализированные решения для ключевых индустрий
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: 'UtensilsCrossed',
                title: 'Общепит (HoReCa)',
                desc: 'Анализ среднего чека, портрет гостя, доля в его «ресторанном» кошельке, оценка причин оттока',
              },
              {
                icon: 'ShoppingCart',
                title: 'Розничная торговля',
                desc: 'Точные прогнозы спроса, «тепловая карта» лояльности, эффективность промо-акций',
              },
              {
                icon: 'Package',
                title: 'Продукты питания и FMCG',
                desc: 'Понимание паттернов покупок, реакция на новые товары, анализ корзин',
              },
              {
                icon: 'HeartPulse',
                title: 'Медицина и фармацевтика',
                desc: 'Анализ жизненных событий (например, рождение ребенка), формирование кластеров потребителей на основании его потребления',
              },
              {
                icon: 'Car',
                title: 'Автобизнес',
                desc: 'Выявление когорт клиентов, купивших автомобиль, определение наиболее эффективных точек касания',
              },
              {
                icon: 'Home',
                title: 'Товары для дома и ремонта',
                desc: 'Поиск новосёлов и тех, кто закрыл ипотеку — ваших будущих клиентов',
              },
              {
                icon: 'Laptop',
                title: 'Электроника и бытовая техника',
                desc: 'Привязка покупок к жизненным циклам (переезд, обновление семьи)',
              },
              {
                icon: 'Plane',
                title: 'Туризм и авиаперевозки',
                desc: 'Выявление когорт покупателей с сформированным паттерном поведения или возросшей платежеспособностью',
              },
              {
                icon: 'CreditCard',
                title: 'Финансовые услуги',
                desc: 'Глубокая поведенческая аналитика для оценки склонности к услуге',
              },
            ].map((industry, idx) => (
              <Card key={idx} className="p-6 hover-scale group cursor-pointer border-2 transition-all hover:border-primary">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary/10 p-4 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon name={industry.icon as any} className="text-primary" size={32} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-secondary">{industry.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{industry.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-secondary/90 text-white px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Особое решение для B2B и промышленности
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Alfa Insight помогает принимать решения на основе данных о рыночной активности 
              и финансовом состоянии контрагентов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: 'TrendingUp',
                title: 'Прозрачность конечного спроса',
                points: [
                  'Видимость потребления по регионам и форматам точек',
                  'Оценка реальных продаж категории на уровне конечного покупателя',
                  'Анализ работы каналов сбыта',
                ],
              },
              {
                icon: 'Users',
                title: 'Управление дилерской сетью',
                points: [
                  'Сравнение активности и эффективности партнёров',
                  'Выявление «белых пятен»: где спрос есть и требуется усиление',
                  'Основания для перераспределения бюджетов',
                ],
              },
              {
                icon: 'Package',
                title: 'Планирование производства',
                points: [
                  'Прогноз спроса по категориям, регионам и сезонам',
                  'Снижение излишков и дефицитов',
                  'Поддержка решений по запуску/снятию SKU',
                ],
              },
              {
                icon: 'Target',
                title: 'Оценка позиций бренда',
                points: [
                  'Доля бренда в кошельке клиента по категории',
                  'Переключаемость между брендами',
                  'Анализ эффективности BTL-активностей и промо',
                ],
              },
              {
                icon: 'Search',
                title: 'Выявление новых точек роста',
                points: [
                  'Находим скрытые связи между отраслями',
                  'Предсказываем будущий спрос на основе трендов',
                  'Определяем перспективные сегменты и регионы',
                ],
              },
              {
                icon: 'Map',
                title: 'Геоаналитика для логистики',
                points: [
                  'Оптимальные локации для складов и производства',
                  'Данные о концентрации бизнесов-потребителей',
                  'Анализ транспортных потоков и доступности',
                ],
              },
            ].map((section, idx) => (
              <Card key={idx} className="bg-white/5 backdrop-blur border-white/10 p-8 hover-scale">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Icon name={section.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                      <span className="text-white/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="отрасли" className="py-20 bg-accent/50 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
              Отраслевые решения
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Готовые модели и метрики под конкретные индустрии
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: 'UtensilsCrossed', label: 'Общепит' },
              { icon: 'ShoppingCart', label: 'Ритейл' },
              { icon: 'HeartPulse', label: 'Медицина' },
              { icon: 'Car', label: 'Авто' },
              { icon: 'Sparkles', label: 'Beauty' },
              { icon: 'Dumbbell', label: 'Фитнес' },
              { icon: 'GraduationCap', label: 'Образование' },
              { icon: 'Home', label: 'Недвижимость' },
            ].map((industry, idx) => (
              <Card key={idx} className="p-6 text-center hover-scale cursor-pointer group border-2 transition-all hover:border-primary">
                <Icon name={industry.icon as any} className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" size={48} />
                <p className="font-semibold text-secondary">{industry.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
              Как мы начинаем работать
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Простой процесс внедрения от первой встречи до регулярной работы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '1',
                title: 'Знакомство и скрининг',
                subtitle: '2-3 встречи',
                points: [
                  'Разбираем ваши бизнес-вопросы',
                  'Показываем, какие модули Alfa Insight могут их закрыть',
                  'Определяем приоритеты и KPI',
                ],
              },
              {
                number: '2',
                title: 'Пилот',
                subtitle: '1-3 месяца',
                points: [
                  'Подключаем вашу компанию к платформе',
                  'Готовим 1-2 ключевых отчёта и дашборда',
                  'Тестируем использование внутри команды',
                ],
              },
              {
                number: '3',
                title: 'Регулярный сервис',
                subtitle: 'Долгосрочно',
                points: [
                  'Ежемесячные/квартальные обновления аналитики',
                  'Индивидуальные исследования по запросу',
                  'Доступ через платформу и API (с 3Q26)',
                ],
              },
            ].map((step, idx) => (
              <Card key={idx} className="p-8 hover-scale relative overflow-hidden group border-2 transition-all hover:border-primary">
                <div className="absolute top-0 right-0 text-[120px] font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  {step.number}
                </div>
                <div className="relative">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-secondary">{step.title}</h3>
                  <p className="text-primary font-semibold mb-4">{step.subtitle}</p>
                  <ul className="space-y-3">
                    {step.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3">
                        <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={18} />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="контакты" className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Оставьте заявку
            </h2>
            <p className="text-xl text-white/90">
              Запланируйте демонстрацию платформы и узнайте, как Alfa Insight 
              может трансформировать ваш бизнес
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-white/95 backdrop-blur">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-secondary mb-2">
                  Имя
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Введите ваше имя"
                  className="h-12 text-base"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-secondary mb-2">
                  Компания
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Название вашей компании"
                  className="h-12 text-base"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-secondary mb-2">
                    Телефон
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
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="h-12 text-base"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-lg py-6 bg-primary hover:bg-primary/90 text-white"
              >
                <Icon name="Send" className="mr-2" size={20} />
                Заказать презентацию для моего бизнеса
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
                Интеллектуальная аналитическая платформа для роста бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Решения</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отрасли</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
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