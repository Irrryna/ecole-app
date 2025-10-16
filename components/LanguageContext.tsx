'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'uk';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.news': 'Actualités',
    'nav.team': 'Equipe',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacts',
    'nav.planning': 'Planning Parental',
    'nav.login': 'Connexion/Inscription',
    'nav.schoolTitle': 'École Ukrainienne à Lyon',
    'nav.schoolSubtitle': 'Saint-Nicolas',
    
    // Sections générales
    'common.readMore': 'Lire plus',
    'common.learnMore': 'En savoir plus',
    'common.contact': 'Nous contacter',
    'common.backToHome': 'Retour à l&apos;accueil',
    
    // Teachers section
    'teachers.title': 'Notre Équipe',
    'teachers.pageTitle': 'Notre Équipe Pédagogique',
    
    // 1. Angelina Nedapak
    'teachers.angelina.name': 'Angelina Nedapak',
    'teachers.angelina.role': 'Вчитель української мови',
    'teachers.angelina.bio': 'Вчителююючи в українській школі Святого Миколая в Ліоні, маю чудову можливість брати участь у вирощуванні українських плодів у Франції. Діти – це маленькі щедрики, і бути дотичною до їхнього творення, вкладати свій внесок у їхній розвиток – для мене велика приємність.',
    
    // 2. Valentina Selve
    'teachers.valentina.name': 'Valentina Selve',
    'teachers.valentina.role': 'Директор, Вчитель української мови',
    'teachers.valentina.bio': 'Мене звати Валентина. Я народилася у Вінниці, здобула вищу освіту у Вінницькому педагогічному університеті. З 2017 року працюю в Українській школі імені Святого Миколая в Ліоні. Моя мета – створювати тепле середовище, де дитячі серця відкриваються й закохуються в усе українське.',
    
    // 3. Volodymyr Pendyei
    'teachers.volodymyr.name': 'Volodymyr Pendyei',
    'teachers.volodymyr.role': 'Духовний наставник',
    'teachers.volodymyr.bio': 'Народився 28 липня 1990 року. Навчався в Українському Католицькому Університеті та Львівській духовній семінарії. З 2022 року служу в парафії святого Атанасія в Ліоні. При школі дбаю про те, щоб любов до Бога і Батьківщини гармонійно розвивалися в наших дітей.',
    
    // 4-6: Profils en attente des fiches complètes
    'teachers.teacher4.name': 'Professeur 4',
    'teachers.teacher4.role': 'Вчитель',
    'teachers.teacher4.bio': 'Membre dévoué de notre équipe pédagogique.',
    
    'teachers.teacher5.name': 'Professeur 5',
    'teachers.teacher5.role': 'Вчитель',
    'teachers.teacher5.bio': 'Membre dévoué de notre équipe pédagogique.',
    
    'teachers.teacher6.name': 'Professeur 6',
    'teachers.teacher6.role': 'Вчитель',
    'teachers.teacher6.bio': 'Membre dévoué de notre équipe pédagogique.',
    
    // 7. Вікторія Гнатик
    'teachers.viktoria.name': 'Вікторія Гнатик',
    'teachers.viktoria.role': 'Вчитель історії України',
    'teachers.viktoria.bio': 'Мене звати Вікторія. У Франції я з 2009 року. Я закінчую Львівську академію управління персоналом за спеціальністю менеджер і саме починаю свій педагогічний шлях. Це мій перший досвід роботи і я сприймаю його як можливість рости разом із дітьми відкривати для себе нові методи навчання та створювати атмосферу кожна дитина відчуває себе важливою. Я люблю дітей за їхню щирість енергійність і допитливість. Вони вміють дивитися на світ по-новому і це надихає мене. Моє завдання – зробити так, щоб уроки історії були для них не сухим набором фактів а захопливою подорожжю в минуле. Мені хочеться щоб кожна дитина на моїх заняттях отримувала не лише знання а й задоволення від процесу навчалася співпраці умінню ставити питання та знаходити відповіді.',
    
    // 8. Наталія Коліпанісцурі
    'teachers.nataliia_k.name': 'Наталія Коліпанісцурі',
    'teachers.nataliia_k.role': 'Асистент вчителя географії України (офлайн)',
    'teachers.nataliia_k.bio': 'З дитинства я мріяла стати вчителем і мати власний дитячий садок саме тому після школи вступила до лінгвістичного факультету Черкаського технологічного університету. З першого курсу я займалася волонтерством і навчала дітей англійської мови у формі гри щоб надихнути їх полюбити іноземні мови. Велика частина мого життя пов&apos;язана з подорожами світом як бортпровідниця. І я буду щаслива допомагати дітям відкривати для себе географію рідної України.',
    
    // 9. Наталія Сюрдареан
    'teachers.nataliia_s.name': 'Наталія Сюрдареан',
    'teachers.nataliia_s.role': 'Скарбник',
    'teachers.nataliia_s.bio': 'Я мама двох чудових хлопців і зараз перебуваю у декреті. За освітою я лінгвіст економіст та менеджер маю три вищі освіти здобуті в Україні та Франції! Моя професійна діяльність пов&apos;язана з управлінням складними ядерними проектами де важливі відповідальність організованість і точність. Ці якості я прагну застосовувати і в роботі в нашій школі. Я приєдналася до команди як скарбник щоб забезпечити прозоре та надійне ведення фінансів. Для мене велика радість бути частиною української школи в Ліоні й робити внесок у розвиток середовища де наші діти можуть вчитися й зростати в українській культурі.',
  },
  uk: {
    // Navigation
    'nav.home': 'Головна',
    'nav.about': 'Про нас',
    'nav.news': 'Новини',
    'nav.team': 'Колектив',
    'nav.blog': 'Блог',
    'nav.contact': 'Контакти',
    'nav.planning': 'Батьківський план',
    'nav.login': 'Вхід/Реєстрація',
    'nav.schoolTitle': 'Українська школа в Ліоні',
    'nav.schoolSubtitle': 'Святий Миколай',
    
    // Sections générales
    'common.readMore': 'Читати далі',
    'common.learnMore': 'Дізнатися більше',
    'common.contact': 'Зв&apos;язатися з нами',
    'common.backToHome': 'Повернутися на головну',
    
    // Teachers section
    'teachers.title': 'Наша Команда',
    'teachers.pageTitle': 'Наша Педагогічна Команда',
    
    // 1. Angelina Nedapak
    'teachers.angelina.name': 'Ангеліна Недапак',
    'teachers.angelina.role': 'Вчитель української мови',
    'teachers.angelina.bio': 'Вчителююючи в українській школі Святого Миколая в Ліоні, маю чудову можливість брати участь у вирощуванні українських плодів у Франції. Діти – це маленькі щедрики, і бути дотичною до їхнього творення, вкладати свій внесок у їхній розвиток – для мене велика приємність.',
    
    // 2. Valentina Selve
    'teachers.valentina.name': 'Валентина Сельве',
    'teachers.valentina.role': 'Директор, Вчитель української мови',
    'teachers.valentina.bio': 'Мене звати Валентина. Я народилася у Вінниці, здобула вищу освіту у Вінницькому педагогічному університеті. З 2017 року працюю в Українській школі імені Святого Миколая в Ліоні. Моя мета – створювати тепле середовище, де дитячі серця відкриваються й закохуються в усе українське.',
    
    // 3. Volodymyr Pendyei
    'teachers.volodymyr.name': 'Володимир Пендзей',
    'teachers.volodymyr.role': 'Духовний наставник',
    'teachers.volodymyr.bio': 'Народився 28 липня 1990 року. Навчався в Українському Католицькому Університеті та Львівській духовній семінарії. З 2022 року служу в парафії святого Атанасія в Ліоні. При школі дбаю про те, щоб любов до Бога і Батьківщини гармонійно розвивалися в наших дітей.',
    
    // 4-6: Profils en attente
    'teachers.teacher4.name': 'Вчитель 4',
    'teachers.teacher4.role': 'Вчитель',
    'teachers.teacher4.bio': 'Відданий член нашої педагогічної команди.',
    
    'teachers.teacher5.name': 'Вчитель 5',
    'teachers.teacher5.role': 'Вчитель',
    'teachers.teacher5.bio': 'Відданий член нашої педагогічної команди.',
    
    'teachers.teacher6.name': 'Вчитель 6',
    'teachers.teacher6.role': 'Вчитель',
    'teachers.teacher6.bio': 'Відданий член нашої педагогічної команди.',
    
    // 7. Вікторія Гнатик
    'teachers.viktoria.name': 'Вікторія Гнатик',
    'teachers.viktoria.role': 'Вчитель історії України',
    'teachers.viktoria.bio': 'Мене звати Вікторія. У Франції я з 2009 року. Я закінчую Львівську академію управління персоналом за спеціальністю менеджер і саме починаю свій педагогічний шлях. Це мій перший досвід роботи і я сприймаю його як можливість рости разом із дітьми відкривати для себе нові методи навчання та створювати атмосферу кожна дитина відчуває себе важливою. Я люблю дітей за їхню щирість енергійність і допитливість. Вони вміють дивитися на світ по-новому і це надихає мене. Моє завдання – зробити так, щоб уроки історії були для них не сухим набором фактів а захопливою подорожжю в минуле. Мені хочеться щоб кожна дитина на моїх заняттях отримувала не лише знання а й задоволення від процесу навчалася співпраці умінню ставити питання та знаходити відповіді.',
    
    // 8. Наталія Коліпанісцурі
    'teachers.nataliia_k.name': 'Наталія Коліпанісцурі',
    'teachers.nataliia_k.role': 'Асистент вчителя географії України (офлайн)',
    'teachers.nataliia_k.bio': 'З дитинства я мріяла стати вчителем і мати власний дитячий садок саме тому після школи вступила до лінгвістичного факультету Черкаського технологічного університету. З першого курсу я займалася волонтерством і навчала дітей англійської мови у формі гри щоб надихнути їх полюбити іноземні мови. Велика частина мого життя пов&apos;язана з подорожами світом як бортпровідниця. І я буду щаслива допомагати дітям відкривати для себе географію рідної України.',
    
    // 9. Наталія Сюрдареан
    'teachers.nataliia_s.name': 'Наталія Сюрдареан',
    'teachers.nataliia_s.role': 'Скарбник',
    'teachers.nataliia_s.bio': 'Я мама двох чудових хлопців і зараз перебуваю у декреті. За освітою я лінгвіст економіст та менеджер маю три вищі освіти здобуті в Україні та Франції! Моя професійна діяльність пов&apos;язана з управлінням складними ядерними проектами де важливі відповідальність організованість і точність. Ці якості я прагну застосовувати і в роботі в нашій школі. Я приєдналася до команди як скарбник щоб забезпечити прозоре та надійне ведення фінансів. Для мене велика радість бути частиною української школи в Ліоні й робити внесок у розвиток середовища де наші діти можуть вчитися й зростати в українській культурі.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}