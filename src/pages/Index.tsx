import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      icon: "Bot",
      title: "Автоматизация процессов",
      description: "Чат-боты, RPA, автоматизация рутинных задач",
      features: ["Умные чат-боты", "Роботизация процессов", "Автоматическая обработка"]
    },
    {
      icon: "BarChart3",
      title: "Анализ данных",
      description: "Машинное обучение, прогнозирование, аналитика",
      features: ["Предиктивная аналитика", "Обработка больших данных", "Бизнес-интеллект"]
    },
    {
      icon: "Eye",
      title: "Компьютерное зрение",
      description: "Распознавание изображений, видеоаналитика",
      features: ["Распознавание лиц", "Контроль качества", "Видеоаналитика"]
    },
    {
      icon: "MessageSquare",
      title: "Обработка языка",
      description: "NLP, анализ текста, голосовые технологии",
      features: ["Анализ тональности", "Извлечение сущностей", "Голосовые ассистенты"]
    }
  ];

  const cases = [
    {
      company: "Сбербанк",
      project: "ИИ-аналитика",
      result: "+45% эффективности",
      category: "Финтех"
    },
    {
      company: "X5 Group",
      project: "Прогнозирование спроса",
      result: "-30% складских остатков",
      category: "Ритейл"
    },
    {
      company: "МТС",
      project: "Голосовой помощник",
      result: "+60% удовлетворенности",
      category: "Телеком"
    }
  ];

  const team = [
    {
      name: "Александр Петров",
      role: "CTO & AI Lead",
      experience: "12 лет в ML",
      avatar: "👨‍💻"
    },
    {
      name: "Мария Иванова", 
      role: "Data Scientist",
      experience: "8 лет в аналитике",
      avatar: "👩‍💼"
    },
    {
      name: "Дмитрий Смирнов",
      role: "ML Engineer",
      experience: "6 лет в разработке",
      avatar: "👨‍🔬"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Brain" size={32} className="text-blue-600" />
              <span className="text-xl font-bold text-slate-800">AI Services</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#cases" className="text-slate-600 hover:text-blue-600 transition-colors">Кейсы</a>
              <a href="#team" className="text-slate-600 hover:text-blue-600 transition-colors">Команда</a>
              <a href="#blog" className="text-slate-600 hover:text-blue-600 transition-colors">Блог</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Контакты</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            ИИ-решения для
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> бизнеса</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Автоматизируем процессы, анализируем данные и создаем интеллектуальные системы 
            для роста вашего бизнеса с помощью передовых технологий искусственного интеллекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать проект
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div>
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-slate-600">Проектов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-slate-600">Клиентов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">95%</div>
              <div className="text-slate-600">Успешных внедрений</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-slate-600">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Наши услуги</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Комплексные ИИ-решения для автоматизации и оптимизации бизнес-процессов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon name={service.icon} size={32} className="text-blue-600 group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Tab Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Решения по отраслям</h2>
            <p className="text-xl text-slate-600">Специализированные ИИ-технологии для различных сфер бизнеса</p>
          </div>

          <Tabs defaultValue="fintech" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="fintech">Финтех</TabsTrigger>
              <TabsTrigger value="retail">Ритейл</TabsTrigger>
              <TabsTrigger value="healthcare">Медицина</TabsTrigger>
              <TabsTrigger value="manufacturing">Производство</TabsTrigger>
            </TabsList>
            
            <TabsContent value="fintech" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="CreditCard" size={24} className="mr-2 text-blue-600" />
                    Финансовые технологии
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Скоринг кредитов</h4>
                      <p className="text-slate-600 text-sm">ML-модели для оценки кредитных рисков</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Детекция мошенничества</h4>
                      <p className="text-slate-600 text-sm">Выявление подозрительных транзакций в реальном времени</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Роботы-советники</h4>
                      <p className="text-slate-600 text-sm">Автоматизированное управление портфелями</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="retail" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="ShoppingCart" size={24} className="mr-2 text-blue-600" />
                    Розничная торговля
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Прогнозирование спроса</h4>
                      <p className="text-slate-600 text-sm">Оптимизация закупок и складских запасов</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Персонализация</h4>
                      <p className="text-slate-600 text-sm">Рекомендательные системы для покупателей</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Ценообразование</h4>
                      <p className="text-slate-600 text-sm">Динамические цены на основе спроса</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="healthcare" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Heart" size={24} className="mr-2 text-blue-600" />
                    Здравоохранение
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Диагностика</h4>
                      <p className="text-slate-600 text-sm">ИИ-анализ медицинских изображений</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Поиск лекарств</h4>
                      <p className="text-slate-600 text-sm">Ускорение разработки новых препаратов</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Телемедицина</h4>
                      <p className="text-slate-600 text-sm">Умные системы удаленного мониторинга</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="manufacturing" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Factory" size={24} className="mr-2 text-blue-600" />
                    Производство
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Предиктивное обслуживание</h4>
                      <p className="text-slate-600 text-sm">Прогнозирование поломок оборудования</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Контроль качества</h4>
                      <p className="text-slate-600 text-sm">Автоматическое выявление дефектов</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Оптимизация процессов</h4>
                      <p className="text-slate-600 text-sm">Повышение эффективности производства</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Успешные кейсы</h2>
            <p className="text-xl text-slate-600">Примеры наших проектов с измеримыми результатами</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{case_.company}</CardTitle>
                      <CardDescription>{case_.project}</CardDescription>
                    </div>
                    <Badge variant="secondary">{case_.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600 mb-4">{case_.result}</div>
                  <Button variant="outline" className="w-full">
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Наша команда</h2>
            <p className="text-xl text-slate-600">Эксперты в области искусственного интеллекта</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">{member.experience}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Блог и исследования</h2>
            <p className="text-xl text-slate-600">Последние новости и тренды в мире ИИ</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2">AI Trends</Badge>
                <CardTitle>Будущее генеративного ИИ в бизнесе</CardTitle>
                <CardDescription>15 января 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Как крупные компании используют GPT и другие модели для автоматизации...</p>
                <Button variant="outline">Читать далее</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2">Case Study</Badge>
                <CardTitle>Как мы сократили расходы на 40%</CardTitle>
                <CardDescription>10 января 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Кейс внедрения системы прогнозирования спроса в сети магазинов...</p>
                <Button variant="outline">Читать далее</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2">Tutorial</Badge>
                <CardTitle>Внедрение ИИ: пошаговый план</CardTitle>
                <CardDescription>5 января 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Практическое руководство по интеграции ИИ-решений в существующие процессы...</p>
                <Button variant="outline">Читать далее</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Начните ваш ИИ-проект сегодня</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Свяжитесь с нами для консультации и обсуждения возможностей внедрения ИИ в ваш бизнес
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="mr-3 text-blue-400" />
                  <span>info@aiservices.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="mr-3 text-blue-400" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={20} className="mr-3 text-blue-400" />
                  <span>Москва, ул. Тверская, 15</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Следите за нами</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="border-slate-600 hover:bg-slate-700">
                    <Icon name="Linkedin" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="border-slate-600 hover:bg-slate-700">
                    <Icon name="Twitter" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="border-slate-600 hover:bg-slate-700">
                    <Icon name="Github" size={20} />
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-slate-700 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-white">Получить консультацию</CardTitle>
                  <CardDescription className="text-slate-300">
                    Заполните форму, и мы свяжемся с вами в течение 24 часов
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Имя</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-md text-white placeholder-slate-400"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">Компания</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-md text-white placeholder-slate-400"
                        placeholder="Название компании"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-md text-white placeholder-slate-400"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">Сообщение</label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-md text-white placeholder-slate-400"
                      placeholder="Расскажите о вашем проекте..."
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Brain" size={24} className="text-blue-400" />
                <span className="text-xl font-bold text-white">AI Services</span>
              </div>
              <p className="text-sm">
                Превращаем данные в интеллектуальные решения для вашего бизнеса
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Машинное обучение</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Компьютерное зрение</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">NLP</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Автоматизация</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Компания</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Кейсы</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Поддержка</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 AI Services. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;