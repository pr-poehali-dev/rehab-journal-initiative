import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-green-600 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/img/2e127c23-bf12-4744-8cc6-0a8db5571a81.jpg')`
          }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Молодые Аграрии
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90">
              Будущее сельского хозяйства через молодежные инициативы
            </p>
            <div className="flex justify-center space-x-2 mb-8">
              <div className="px-4 py-2 bg-green-500/80 rounded-full text-sm font-medium">
                <Icon name="Sprout" size={16} className="inline mr-2" />
                Экологично
              </div>
              <div className="px-4 py-2 bg-yellow-500/80 rounded-full text-sm font-medium">
                <Icon name="Users" size={16} className="inline mr-2" />
                Молодежь
              </div>
              <div className="px-4 py-2 bg-orange-500/80 rounded-full text-sm font-medium">
                <Icon name="BookOpen" size={16} className="inline mr-2" />
                Образование
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Photo Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
            Наша работа с молодежью
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-cover bg-center" style={{backgroundImage: "url('https://cdn.poehali.dev/files/f1210b6b-c86d-4af6-abe0-01f044f7e672.jpg')"}}>
                <div className="bg-gradient-to-t from-black/60 to-transparent h-full flex items-end">
                  <p className="text-white p-4 font-medium">Групповые занятия</p>
                </div>
              </div>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-cover bg-center" style={{backgroundImage: "url('https://cdn.poehali.dev/files/e9039219-f226-4307-a99b-7dffc764e43a.jpg')"}}>
                <div className="bg-gradient-to-t from-black/60 to-transparent h-full flex items-end">
                  <p className="text-white p-4 font-medium">Арт-терапия</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-cover bg-center" style={{backgroundImage: "url('https://cdn.poehali.dev/files/63fe48d0-3a58-4801-bdfb-30e9ec32fb86.jpg')"}}>
                <div className="bg-gradient-to-t from-black/60 to-transparent h-full flex items-end">
                  <p className="text-white p-4 font-medium">Творческие мастерские</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow md:col-span-2">
              <div className="aspect-video bg-cover bg-center" style={{backgroundImage: "url('https://cdn.poehali.dev/files/d6e45e89-8a5d-4372-9627-4ff191be4671.jpg')"}}>
                <div className="bg-gradient-to-t from-black/60 to-transparent h-full flex items-end">
                  <p className="text-white p-4 font-medium">Совместная деятельность и обучение</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-cover bg-center" style={{backgroundImage: "url('https://cdn.poehali.dev/files/0f3ec026-6ea6-4558-a067-8037d488fa05.jpg')"}}>
                <div className="bg-gradient-to-t from-black/60 to-transparent h-full flex items-end">
                  <p className="text-white p-4 font-medium">Публикации и достижения</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Article */}
        <Card className="shadow-xl border-0 bg-white">
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-green max-w-none">
              <h2 className="text-3xl font-bold text-green-800 mb-8">
                Агропрограмма для молодежи Башкортостана
              </h2>
              
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-lg">
                  В Республике Башкортостан в рамках агропросветительского проекта "Молодые Аграрии" 
                  ежегодно участвуют более 1000 детей, подростков и молодежи, изучающих современные 
                  методы сельского хозяйства. В программе активно используются инновационные подходы 
                  к экологическому образованию, создаются образовательные квесты от лучших специалистов 
                  агросферы Республики Башкортостан, проводятся конкурсы и практические занятия 
                  для популяризации сельскохозяйственных профессий среди молодежи.
                </p>
                
                <p>
                  Особой популярностью пользуются "зеленые вечера", где участники делятся опытом 
                  устойчивого земледелия, рассказывают о новых агротехнологиях и представляют 
                  собственные проекты. Во время одного из мероприятий была выдвинута инициатива 
                  создания молодежного аграрного журнала "Земля и Будущее", где молодые люди 
                  будут авторами статей о современном сельском хозяйстве, экологии и устойчивом 
                  развитии. Журнал планируется издавать ежемесячно и распространять в 
                  сельскохозяйственных колледжах, фермерских хозяйствах и агропредприятиях 
                  республики. Основные темы: органическое земледелие, инновационные технологии 
                  в АПК, успешные истории молодых фермеров.
                </p>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
                  <p className="font-medium text-green-900">
                    По результатам опроса среди участников проекта 93% молодых людей выразили 
                    готовность связать свое будущее с агропромышленным комплексом и поддержали 
                    идею создания профессионального сообщества молодых аграриев.
                  </p>
                </div>
                
                <p>
                  Современная молодежь все чаще интересуется экологическим образом жизни и 
                  устойчивыми методами производства продуктов питания. Согласно исследованиям 
                  Минсельхоза РБ, за последние 5 лет количество молодых предпринимателей в 
                  агросфере выросло на 40%, что свидетельствует о возрастающем интересе к 
                  сельскохозяйственной деятельности среди молодого поколения.
                </p>
                
                <p>
                  В рамках государственной программы развития сельских территорий и поддержки 
                  молодых специалистов в АПК Республики Башкортостан на 2020-2025 годы 
                  проводятся масштабные образовательные мероприятия. По данным исследования, 
                  проведенного Башкирским государственным аграрным университетом совместно с 
                  Министерством сельского хозяйства РБ, изучены перспективы развития молодежного 
                  предпринимательства в сфере АПК и потребности в образовательных программах.
                </p>
                
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
                  <p className="font-medium text-amber-900">
                    Результаты показали, что 67% молодых людей в возрасте 16-25 лет проявляют 
                    активный интерес к современным технологиям в сельском хозяйстве, включая 
                    точное земледелие, дроны для мониторинга полей и биотехнологии.
                  </p>
                </div>
                
                <p>
                  Это возрастная группа, которая формирует будущее аграрной отрасли страны. 
                  Изучая потребности современной молодежи, мы видим растущий запрос на 
                  экологически чистое производство и инновационные решения. Ярким примером 
                  служат молодежные агро-стартапы, которые мы поддерживаем в рамках нашей 
                  программы наставничества - это талантливые, энергичные и амбициозные 
                  молодые люди, готовые менять облик российского сельского хозяйства.
                </p>
                
                <p>
                  Практика показывает, что интеграция образовательных программ с практическими 
                  занятиями в области устойчивого сельского хозяйства повышает мотивацию 
                  участников более чем в два раза. У молодежи отмечается рост предпринимательских 
                  навыков, формируется системное понимание современного АПК, развиваются 
                  компетенции в области экологического менеджмента и цифровых технологий 
                  в сельском хозяйстве.
                </p>
                
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 rounded-r-lg">
                  <p className="font-medium text-emerald-900">
                    Таким образом, проект "Молодые Аграрии" представляет собой комплексную 
                    образовательную программу, направленную на подготовку нового поколения 
                    специалистов АПК, способных внедрять инновационные и экологически 
                    устойчивые решения в сельском хозяйстве Республики Башкортостан.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 mt-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Icon name="Sprout" size={24} className="mr-3 text-green-400" />
                Молодые Аграрии
              </h3>
              <p className="text-green-200 leading-relaxed">
                Развиваем будущее сельского хозяйства через образование, 
                инновации и поддержку молодых специалистов в агропромышленном 
                комплексе Республики Башкортостан.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={16} className="text-green-400" />
                  <span className="text-sm text-green-200">
                    Республика Башкортостан
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-green-400" />
                  <span className="text-sm text-green-200">
                    +7 (347) 123-45-67
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} className="text-green-400" />
                  <span className="text-sm text-green-200">
                    info@molodye-agrarii.ru
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center">
            <p className="text-sm text-green-300">
              © 2024 Молодые Аграрии Башкортостана. Растем вместе с природой.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}