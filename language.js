(() => {
  'use strict';

  const translations = {
    mk: {
  "skip": "Кон содржината",
  "navRestaurants": "За ресторани",
  "navWorkers": "За работници",
  "navIdea": "Идејата",
  "register": "Регистрација",
  "heroEyebrow": "<span class=\"mini-spark\" aria-hidden=\"true\">✳</span> ПОЛЕСНО ДО ВИСТИНСКИТЕ ЛУЃЕ",
  "heroTitle": "Добри луѓе.<br><span>Одлични смени.</span>",
  "heroIntro": "Ресторани што бараат персонал.<br>Луѓе што бараат работа во ресторан.<br><strong>Shifty ги поврзува.</strong>",
  "needStaff": "Барам персонал",
  "lookingForWork": "Барам работа",
  "heroNote": "За луѓето што стојат зад секоја добра услуга.",
  "stripTitle": "Две страни на иста маса.",
  "stripRestaurants": "Ресторани на кои им треба помош.",
  "stripWorkers": "Луѓе подготвени да помогнат.",
  "audienceEyebrow": "ПРОНАЈДЕТЕ ГО СВОЕТО МЕСТО",
  "audienceTitle": "Вашата следна можност<br>почнува тука.",
  "audienceIntro": "Без разлика дали водите ресторан или барате работа во него, за вас има место во Shifty.",
  "restaurantEyebrow": "ЗА РЕСТОРАНИ",
  "restaurantTitle": "За полн ресторан<br>е потребен добар тим.",
  "restaurantIntro": "Вие грижете се за гостите. Shifty ве поврзува со луѓе што бараат работа во ресторан, за полесно да најдете помош кога ви е потребна.",
  "restaurantBenefit1": "Најдете персонал за вашиот ресторан",
  "restaurantBenefit2": "Добијте помош кога му е потребна на тимот",
  "restaurantBenefit3": "Посветете се на добрата услуга",
  "restaurantAction": "Имам ресторан",
  "workerEyebrow": "ЗА РАБОТНИЦИ",
  "workerTitle": "Вашите вештини.<br>Вашата следна смена.",
  "workerIntro": "Барате работа во ресторан? Shifty ве поврзува со ресторани на кои им требаат луѓе како вас. Вашата следна можност почнува со нов контакт.",
  "workerBenefit1": "Поврзете се со ресторани што бараат персонал",
  "workerBenefit2": "Искористете ги своите угостителски вештини",
  "workerBenefit3": "Пронајдете го своето место во тимот",
  "registrationEyebrow": "ДА ГИ ПОВРЗЕМЕ ВИСТИНСКИТЕ ЛУЃЕ",
  "registrationTitle": "Нов почеток.<br>Смена по ваша мерка.",
  "registrationIntro": "Изберете ја вашата улога и пополнете краток прашалник за да започнете со Shifty.",
  "registerRestaurant": "Регистрирајте ресторан",
  "registerWorker": "Регистрирајте се за работа",
  "restaurantFormNote": "Краток прашалник за ресторани",
  "workerFormNote": "Краток прашалник за работници",
  "formLanguageNote": "Прашалниците се на македонски јазик.",
  "ideaEyebrow": "ИДЕЈАТА Е ЕДНОСТАВНА",
  "ideaTitle": "Помалку барање.<br>Повеќе поврзување.",
  "ideaIntro": "На ресторан му треба персонал. Некој бара работа. Потребен им е само начин да се пронајдат.",
  "ideaBody": "Токму затоа постои Shifty. За полесно поврзување на луѓето што ги водат рестораните со луѓето што ги одржуваат во движење.",
  "restaurants": "Ресторани",
  "workers": "Работници",
  "faqEyebrow": "ДОБРО Е ДА СЕ ЗНАЕ",
  "faqTitle": "Неколку кратки<br>одговори.",
  "faqQuestion1": "Што е Shifty?<span aria-hidden=\"true\">+</span>",
  "faqAnswer1": "Shifty е платформа што ги поврзува рестораните што бараат персонал со луѓето што бараат работа во ресторан.",
  "faqQuestion2": "За кого е наменета?<span aria-hidden=\"true\">+</span>",
  "faqAnswer2": "За двете страни на ресторанскиот тим: сопственици и менаџери на кои им треба персонал и луѓе што сакаат да работат во ресторани.",
  "faqQuestion3": "Како да се регистрирам?<span aria-hidden=\"true\">+</span>",
  "faqAnswer3": "Изберете го копчето за регистрација на ресторан или за работа, а потоа пополнете го и испратете го соодветниот прашалник.",
  "tagline": "Добри луѓе. Одлични смени."
}
  };
  const copy = {
    en: {
      title: 'Shifty — Good people. Great shifts.',
      description: 'Shifty brings restaurants looking for staff together with people looking for restaurant work. Good people. Great shifts.',
      socialDescription: 'Looking for restaurant staff? Looking for restaurant work? Meet Shifty. We bring both sides to the same table.',
      home: 'Shifty home',
      navigation: 'Main navigation',
      footerNavigation: 'Footer navigation',
      language: 'Language',
      connection: 'connected through Shifty to'
    },
    mk: {
      title: 'Shifty — Добри луѓе. Одлични смени.',
      description: 'Shifty ги поврзува рестораните што бараат персонал со луѓето што бараат работа во ресторан. Добри луѓе. Одлични смени.',
      socialDescription: 'Барате персонал за ресторан? Барате работа во ресторан? Запознајте го Shifty. Ги поврзуваме двете страни на истата маса.',
      home: 'Почетна страница на Shifty',
      navigation: 'Главна навигација',
      footerNavigation: 'Навигација во подножјето',
      language: 'Јазик',
      connection: 'поврзани преку Shifty со'
    }
  };
  const content = [...document.querySelectorAll('[data-i18n]')];
  const buttons = [...document.querySelectorAll('[data-language]')];
  const english = new Map(content.map(element => [element, element.innerHTML]));
  const storageKey = 'shifty-language';
  const supported = language => language === 'mk' || language === 'en';

  function setLanguage(language, { remember = false } = {}) {
    if (!supported(language)) return;
    const text = copy[language];
    document.documentElement.lang = language;
    content.forEach(element => {
      const key = element.dataset.i18n;
      // Only fixed, site-authored translations are inserted as HTML.
      element.innerHTML = language === 'en' ? english.get(element) : translations.mk[key];
    });
    buttons.forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    document.title = text.title;
    document.querySelector('meta[name="description"]').content = text.description;
    document.querySelector('meta[property="og:title"]').content = text.title;
    document.querySelector('meta[property="og:description"]').content = text.socialDescription;
    document.querySelectorAll('.wordmark').forEach(element => element.setAttribute('aria-label', text.home));
    document.querySelector('.site-header nav').setAttribute('aria-label', text.navigation);
    document.querySelector('.site-footer nav').setAttribute('aria-label', text.footerNavigation);
    document.querySelector('.language-switch').setAttribute('aria-label', text.language);
    document.querySelector('.connection img').alt = text.connection;
    if (remember) {
      try { localStorage.setItem(storageKey, language); } catch { /* Switching works without storage. */ }
    }
  }

  buttons.forEach(button => button.addEventListener('click', () => {
    setLanguage(button.dataset.language, { remember: true });
  }));

  let saved;
  try { saved = localStorage.getItem(storageKey); } catch { /* Use the browser preference. */ }
  const initial = supported(saved) ? saved : navigator.language.toLowerCase().startsWith('mk') ? 'mk' : 'en';
  setLanguage(initial);
})();
