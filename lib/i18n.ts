export type Locale = "ru" | "kk" | "en";

export const locales: Locale[] = ["ru", "kk", "en"];

export const localeNames: Record<Locale, string> = {
  ru: "RU",
  kk: "KZ",
  en: "EN",
};

// Language-neutral company data
export const company = {
  phone: "+7 771 155 2255",
  phoneHref: "tel:+77711552255",
  email: "armanashakov@caspi-polymer.kz",
};

export type ProductSlug =
  | "ffs"
  | "stretch-hood"
  | "greenhouse"
  | "shrink"
  | "mulch"
  | "technical";

export const productImages: Record<ProductSlug, string> = {
  ffs: "/images/ffs.jpg",
  "stretch-hood": "/images/stretch-hood.jpg",
  greenhouse: "/images/greenhouse.jpg",
  shrink: "/images/shrink.png",
  mulch: "/images/mulch.webp",
  technical: "/images/technical.webp",
};

type Product = {
  slug: ProductSlug;
  name: string;
  tag: string;
  short: string;
  desc: string;
  thickness: string;
  width: string;
  // Last column is always the price; rows omit it and render `priceOnRequest`
  cols: string[];
  rows: { model: string; vals: string[] }[];
};

type Dict = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    products: string;
    production: string;
    quality: string;
    about: string;
    contacts: string;
    requestCta: string;
    menu: string;
    close: string;
  };
  topBar: { address: string; hours: string };
  hero: {
    eyebrow: string;
    headlineA: string;
    headlineHighlight: string;
    headlineB: string;
    sub: string;
    ctaPrimary: string;
    ctaCatalog: string;
    chips: { value: string; label: string }[];
    modelsWord: string;
  };
  figures: { value: string; label: string }[];
  products: {
    eyebrow: string;
    heading: string;
    allLink: string;
    thickness: string;
    width: string;
    priceOnRequest: string;
    requestPrice: string;
    tableTitle: string;
    tabsLabel: string;
    customTitle: string;
    customText: string;
    customCta: string;
    items: Product[];
  };
  industries: {
    eyebrow: string;
    heading: string;
    text: string;
    items: { title: string; text: string; tags: string }[];
  };
  about: {
    eyebrow: string;
    heading: string;
    text: string;
    missionLabel: string;
    mission: string;
    items: { title: string; text: string }[];
  };
  advantages: {
    eyebrow: string;
    heading: string;
    items: { title: string; text: string }[];
  };
  production: {
    eyebrow: string;
    heading: string;
    text: string;
    steps: { title: string; text: string }[];
  };
  partners: { eyebrow: string; heading: string };
  request: {
    eyebrow: string;
    heading: string;
    text: string;
    name: string;
    namePh: string;
    company: string;
    companyPh: string;
    phone: string;
    phonePh: string;
    product: string;
    other: string;
    message: string;
    messagePh: string;
    privacy: string;
    submit: string;
    successTitle: string;
    successText: string;
    sendAgain: string;
    mailSubject: string;
  };
  footer: {
    tagline: string;
    colProducts: string;
    colCompany: string;
    colContacts: string;
    rights: string;
    privacy: string;
  };
  contacts: { address: string; hours: string; weekend: string };
};

const ru: Dict = {
  meta: {
    title: "Caspi Polymer — завод полиэтиленовых плёнок в Атырау",
    description:
      "Единственный завод полиэтиленовой плёнки в Западном Казахстане: FFS, стретч-худ, парниковая, термоусадочная, мульчирующая и техническая плёнка. 500+ тонн в месяц.",
  },
  nav: {
    home: "Главная",
    products: "Продукция",
    production: "Производство",
    quality: "Качество",
    about: "О компании",
    contacts: "Контакты",
    requestCta: "Запросить КП",
    menu: "Открыть меню",
    close: "Закрыть меню",
  },
  topBar: {
    address: "Атырау, ул. Жалантос батыр, 9",
    hours: "Пн–Пт, 09:00–18:00",
  },
  hero: {
    eyebrow: "Завод полиэтиленовых плёнок · Атырау",
    headlineA: "Плёнка ",
    headlineHighlight: "нового поколения",
    headlineB: " для агро, стройки и упаковки",
    sub: "Единственный завод по производству полиэтиленовой плёнки в Западном Казахстане. Полный цикл — от подготовки сырья до готовой продукции.",
    ctaPrimary: "Получить расчёт",
    ctaCatalog: "Каталог",
    chips: [
      { value: "500+", label: "тонн в месяц" },
      { value: "20–250", label: "мкм, диапазон толщин" },
    ],
    modelsWord: "модели",
  },
  figures: [
    { value: "500+", label: "тонн плёнки в месяц — объём для крупных и регулярных поставок" },
    { value: "20–250", label: "мкм — диапазон толщин под любую задачу" },
    { value: "100%", label: "автоматический контроль качества на линии" },
    { value: "100%", label: "перерабатываемая плёнка из первичного полиэтилена" },
  ],
  products: {
    eyebrow: "Продукция",
    heading: "Ассортимент плёнок",
    allLink: "Все характеристики и модели",
    thickness: "Толщина",
    width: "Ширина",
    priceOnRequest: "По запросу",
    requestPrice: "Запросить цену",
    tableTitle: "Модели и характеристики",
    tabsLabel: "Тип плёнки",
    customTitle: "Нужна нестандартная плёнка?",
    customText: "Изготовим по вашему ТЗ: ширина, толщина, материал и намотка.",
    customCta: "Отправить ТЗ",
    items: [
      {
        slug: "ffs",
        name: "FFS-плёнка",
        tag: "Для фасовки сыпучих",
        short: "Рукав для автоматической фасовки сыпучих продуктов в мешки.",
        desc: "Плёнка-рукав с фальцами для автоматических линий Form-Fill-Seal: мешки для цемента, сухих смесей, удобрений и полимеров.",
        thickness: "50–250 мкм",
        width: "400–1100 мм",
        cols: ["Модель", "Ширина, мм", "Толщина, мкм", "Фальцы", "Материал", "Цена"],
        rows: [
          { model: "FFS-Standard", vals: ["450–550", "50–160", "Есть", "ПЭ белый"] },
          { model: "FFS-Pro", vals: ["500–600", "140–180", "Есть", "ПЭ / ПП"] },
          { model: "FFS-Heavy", vals: ["550–650", "160–250", "Есть", "ПЭ усиленный"] },
          { model: "FFS-Custom", vals: ["По ТЗ", "По ТЗ", "По ТЗ", "ПЭ / ПП"] },
        ],
      },
      {
        slug: "stretch-hood",
        name: "Стретч-худ",
        tag: "Защита паллет",
        short: "Колпак для паллет: от лёгких грузов до кирпича и смесей.",
        desc: "Эластичный колпак для автоматической упаковки паллет: фиксирует груз и защищает от влаги и пыли при хранении и перевозке.",
        thickness: "50–250 мкм",
        width: "700–2000 мм",
        cols: ["Модель", "Ширина, мм", "Толщина, мкм", "Назначение", "Материал", "Цена"],
        rows: [
          { model: "Hood-Light", vals: ["1200–1500", "80", "Лёгкие грузы", "ПЭ"] },
          { model: "Hood-Strong", vals: ["1500–1800", "100", "Кирпич, смеси", "ПЭ"] },
          { model: "Hood-Heavy", vals: ["1800–2000", "120", "Тяжёлые грузы", "ПЭ"] },
          { model: "Hood-Extra", vals: ["2000", "150", "Макс. защита", "ПЭ"] },
        ],
      },
      {
        slug: "greenhouse",
        name: "Парниковая",
        tag: "Агросектор",
        short: "Укрывная плёнка для теплиц со сроком службы до 5 сезонов.",
        desc: "Многослойная морозостойкая плёнка (UV + EVA) для теплиц и парников. Линейка AGRO рассчитана на срок службы до 5 сезонов.",
        thickness: "50–200 мкм",
        width: "2–3,5 м",
        cols: ["Модель", "Ширина, мм", "Толщина, мкм", "Намотка", "Срок службы", "Цена"],
        rows: [
          { model: "AGRO-Standard", vals: ["3000", "120", "100 м", "до 3–4 сезонов"] },
          { model: "AGRO-Pro", vals: ["4000", "150", "50 / 100 м", "до 4–5 сезонов"] },
          { model: "AGRO-Premium", vals: ["4000", "180", "50 м", "до 5 сезонов"] },
          { model: "AGRO-Arctic", vals: ["4000", "200", "50 м", "до 5 сезонов"] },
        ],
      },
      {
        slug: "shrink",
        name: "Термоусадочная",
        tag: "Групповая упаковка",
        short: "Групповая упаковка: полотно, полурукав и рукав.",
        desc: "Плёнка для надёжной термоусадочной упаковки напитков, штучных товаров и паллет. Выпускается полотном, полурукавом и рукавом.",
        thickness: "40–180 мкм",
        width: "500–2000 мм",
        cols: ["Модель", "Форма", "Ширина, мм", "Толщина, мкм", "Цена"],
        rows: [
          { model: "Termo-S", vals: ["Полотно", "500–800", "40–60"] },
          { model: "Termo-M", vals: ["Полурукав", "1000–1500", "80–100"] },
          { model: "Termo-L", vals: ["Рукав", "1500–2000", "120–150"] },
          { model: "Termo-XL", vals: ["Полурукав", "2000", "180"] },
        ],
      },
      {
        slug: "mulch",
        name: "Мульчирующая",
        tag: "Агросектор",
        short: "Защита почвы и повышение урожайности.",
        desc: "Плёнка для мульчирования: сохраняет влагу, подавляет сорняки и повышает урожайность в открытом грунте.",
        thickness: "30–80 мкм",
        width: "1000–2000 мм",
        cols: ["Модель", "Цвет", "Ширина, мм", "Толщина, мкм", "Цена"],
        rows: [
          { model: "Mulch-Black", vals: ["Чёрная", "1000–1200", "30"] },
          { model: "Mulch-Silver", vals: ["Чёрно-серебристая", "1200–1500", "40"] },
          { model: "Mulch-Pro", vals: ["Чёрная", "1500–2000", "60"] },
          { model: "Mulch-Wide", vals: ["Чёрная", "2000", "80"] },
        ],
      },
      {
        slug: "technical",
        name: "Техническая (ПВД)",
        tag: "Стройка и склад",
        short: "Универсальная плёнка для технических и строительных нужд.",
        desc: "Универсальная полиэтиленовая плёнка высокого давления для укрытия, гидро- и пароизоляции, строительных и складских работ.",
        thickness: "100–200 мкм",
        width: "3000–4000 мм",
        cols: ["Модель", "Разворот, мм", "Толщина, мкм", "Цена"],
        rows: [
          { model: "Tech-100", vals: ["3000", "100"] },
          { model: "Tech-150", vals: ["4000", "150"] },
          { model: "Tech-200", vals: ["4000", "200"] },
        ],
      },
    ],
  },
  industries: {
    eyebrow: "Отрасли",
    heading: "Решения для вашей отрасли",
    text: "Поставляем сельскохозяйственным, строительным и упаковочным компаниям Казахстана и СНГ.",
    items: [
      { title: "Агросектор", text: "Парниковая и мульчирующая плёнка, упаковка удобрений и кормов.", tags: "Парниковая · Мульча · FFS" },
      { title: "Строительство", text: "Мешки для цемента и сухих смесей, защита паллет с кирпичом, техническая плёнка.", tags: "FFS · Стретч-худ · ПВД" },
      { title: "Упаковка", text: "Групповая термоусадочная упаковка напитков и товаров, транспортная упаковка.", tags: "Термоусадочная · Стретч-худ" },
    ],
  },
  about: {
    eyebrow: "О компании",
    heading: "Полимерные решения любой сложности",
    text: "Завод оснащён передовым европейским оборудованием и обеспечивает полный цикл производства — от подготовки сырья до выпуска готовой продукции.",
    missionLabel: "Наша миссия",
    mission: "Производство плёнки с использованием передовых технологий и максимальной пользой для клиентов.",
    items: [
      { title: "Собственное производство", text: "Новое оборудование и плёнка из 100% первичного полиэтилена." },
      { title: "Собственная лаборатория", text: "Каждая партия проходит проверку качества перед отгрузкой клиенту." },
      { title: "Сертифицированная продукция", text: "Соответствие ГОСТ и ТУ, строгий контроль на каждом этапе." },
    ],
  },
  advantages: {
    eyebrow: "Сервис",
    heading: "Работать с нами удобно",
    items: [
      { title: "Собственный автопарк", text: "Быстрая и надёжная доставка по Западному Казахстану." },
      { title: "Индивидуальный подход", text: "Подбираем ширину и толщину точно под задачу клиента." },
      { title: "Поставки в срок", text: "Контроль остатков сырья и планирование — без срывов сроков." },
      { title: "Гибкая оплата", text: "Удобные условия для постоянных клиентов, отсрочка на крупные объёмы." },
    ],
  },
  production: {
    eyebrow: "Производство",
    heading: "Полный цикл на одной площадке",
    text: "Единственный завод полиэтиленовой плёнки в Западном Казахстане на европейском оборудовании.",
    steps: [
      { title: "Подготовка сырья", text: "Отбор первичного полиэтилена от ведущих поставщиков, входной контроль." },
      { title: "Экструзия", text: "Многослойная плёнка заданной ширины и толщины — от 20 до 250 мкм." },
      { title: "Флексопечать", text: "По запросу — логотип, брендирование и маркировка на плёнке." },
      { title: "Нарезка и формовка", text: "Рукав, полурукав или полотно под нужный размер, намотка и упаковка." },
      { title: "Контроль качества", text: "Автоматический контроль на линии и испытания каждой партии в лаборатории." },
    ],
  },
  partners: { eyebrow: "Клиенты", heading: "Нам доверяют" },
  request: {
    eyebrow: "Коммерческое предложение",
    heading: "Рассчитаем плёнку под ваше ТЗ",
    text: "Цены на все модели — по запросу. Укажите тип плёнки и объём, и менеджер подготовит предложение.",
    name: "Имя",
    namePh: "Как к вам обращаться",
    company: "Компания",
    companyPh: "Название компании",
    phone: "Телефон",
    phonePh: "+7",
    product: "Тип плёнки",
    other: "Другое",
    message: "Объём и параметры",
    messagePh: "Например: FFS-Pro, 560 мм, 150 мкм, 20 т/мес",
    privacy: "Нажимая кнопку, вы соглашаетесь на обработку персональных данных",
    submit: "Отправить заявку",
    successTitle: "Заявка готова к отправке",
    successText: "Мы открыли письмо в вашей почтовой программе — отправьте его, и менеджер свяжется с вами в течение рабочего дня.",
    sendAgain: "Новая заявка",
    mailSubject: "Заявка с сайта",
  },
  footer: {
    tagline: "Завод полиэтиленовых плёнок в Западном Казахстане",
    colProducts: "Продукция",
    colCompany: "Компания",
    colContacts: "Контакты",
    rights: "Caspi Polymer",
    privacy: "Политика конфиденциальности",
  },
  contacts: {
    address: "Республика Казахстан, г. Атырау, ул. Жалантос батыр, 9, 060003",
    hours: "Пн–Пт: 09:00–18:00",
    weekend: "Сб–Вс: выходной",
  },
};

const kk: Dict = {
  meta: {
    title: "Caspi Polymer — Атыраудағы полиэтилен пленка зауыты",
    description:
      "Батыс Қазақстандағы жалғыз полиэтилен пленка зауыты: FFS, стретч-худ, жылыжай, термошөгетін, мульчалаушы және техникалық пленка. Айына 500+ тонна.",
  },
  nav: {
    home: "Басты бет",
    products: "Өнімдер",
    production: "Өндіріс",
    quality: "Сапа",
    about: "Компания туралы",
    contacts: "Байланыс",
    requestCta: "КҰ сұрату",
    menu: "Мәзірді ашу",
    close: "Мәзірді жабу",
  },
  topBar: {
    address: "Атырау, Жалантос батыр к., 9",
    hours: "Дс–Жм, 09:00–18:00",
  },
  hero: {
    eyebrow: "Полиэтилен пленка зауыты · Атырау",
    headlineA: "Агро, құрылыс пен қаптамаға арналған ",
    headlineHighlight: "жаңа буын",
    headlineB: " пленкасы",
    sub: "Батыс Қазақстандағы полиэтилен пленка шығаратын жалғыз зауыт. Толық цикл — шикізатты дайындаудан дайын өнімге дейін.",
    ctaPrimary: "Есеп алу",
    ctaCatalog: "Каталог",
    chips: [
      { value: "500+", label: "тонна / ай" },
      { value: "20–250", label: "мкм, қалыңдық" },
    ],
    modelsWord: "модель",
  },
  figures: [
    { value: "500+", label: "тонна пленка айына — ірі және тұрақты жеткізілімдерге арналған көлем" },
    { value: "20–250", label: "мкм — кез келген міндетке арналған қалыңдық диапазоны" },
    { value: "100%", label: "желідегі автоматты сапа бақылауы" },
    { value: "100%", label: "бастапқы полиэтиленнен жасалған қайта өңделетін пленка" },
  ],
  products: {
    eyebrow: "Өнімдер",
    heading: "Пленкалар ассортименті",
    allLink: "Барлық сипаттамалар мен модельдер",
    thickness: "Қалыңдығы",
    width: "Ені",
    priceOnRequest: "Сұрау бойынша",
    requestPrice: "Бағасын сұрату",
    tableTitle: "Модельдер мен сипаттамалар",
    tabsLabel: "Пленка түрі",
    customTitle: "Стандартты емес пленка керек пе?",
    customText: "Сіздің ТТ бойынша жасаймыз: ені, қалыңдығы, материалы және орамы.",
    customCta: "ТТ жіберу",
    items: [
      {
        slug: "ffs",
        name: "FFS пленкасы",
        tag: "Сусымалы өнімдерге",
        short: "Сусымалы өнімдерді қаптарға автоматты буып-түюге арналған жең.",
        desc: "Form-Fill-Seal автоматты желілеріне арналған қатпарлы жең-пленка: цемент, құрғақ қоспалар, тыңайтқыштар және полимерлер үшін қаптар.",
        thickness: "50–250 мкм",
        width: "400–1100 мм",
        cols: ["Модель", "Ені, мм", "Қалыңдығы, мкм", "Қатпарлар", "Материал", "Бағасы"],
        rows: [
          { model: "FFS-Standard", vals: ["450–550", "50–160", "Бар", "Ақ ПЭ"] },
          { model: "FFS-Pro", vals: ["500–600", "140–180", "Бар", "ПЭ / ПП"] },
          { model: "FFS-Heavy", vals: ["550–650", "160–250", "Бар", "Күшейтілген ПЭ"] },
          { model: "FFS-Custom", vals: ["ТТ бойынша", "ТТ бойынша", "ТТ бойынша", "ПЭ / ПП"] },
        ],
      },
      {
        slug: "stretch-hood",
        name: "Стретч-худ",
        tag: "Паллет қорғанысы",
        short: "Паллеттерге арналған қалпақ: жеңіл жүктен кірпіш пен қоспаларға дейін.",
        desc: "Паллеттерді автоматты қаптауға арналған серпімді қалпақ: жүкті бекітеді, сақтау мен тасымалдау кезінде ылғал мен шаңнан қорғайды.",
        thickness: "50–250 мкм",
        width: "700–2000 мм",
        cols: ["Модель", "Ені, мм", "Қалыңдығы, мкм", "Мақсаты", "Материал", "Бағасы"],
        rows: [
          { model: "Hood-Light", vals: ["1200–1500", "80", "Жеңіл жүктер", "ПЭ"] },
          { model: "Hood-Strong", vals: ["1500–1800", "100", "Кірпіш, қоспалар", "ПЭ"] },
          { model: "Hood-Heavy", vals: ["1800–2000", "120", "Ауыр жүктер", "ПЭ"] },
          { model: "Hood-Extra", vals: ["2000", "150", "Макс. қорғаныс", "ПЭ"] },
        ],
      },
      {
        slug: "greenhouse",
        name: "Жылыжай",
        tag: "Агросектор",
        short: "Жылыжайларға арналған жабын пленка, 5 маусымға дейін қызмет етеді.",
        desc: "Жылыжайлар мен парниктерге арналған көпқабатты аязға төзімді пленка (UV + EVA). AGRO желісі 5 маусымға дейін қызмет етуге есептелген.",
        thickness: "50–200 мкм",
        width: "2–3,5 м",
        cols: ["Модель", "Ені, мм", "Қалыңдығы, мкм", "Орамы", "Қызмет мерзімі", "Бағасы"],
        rows: [
          { model: "AGRO-Standard", vals: ["3000", "120", "100 м", "3–4 маусымға дейін"] },
          { model: "AGRO-Pro", vals: ["4000", "150", "50 / 100 м", "4–5 маусымға дейін"] },
          { model: "AGRO-Premium", vals: ["4000", "180", "50 м", "5 маусымға дейін"] },
          { model: "AGRO-Arctic", vals: ["4000", "200", "50 м", "5 маусымға дейін"] },
        ],
      },
      {
        slug: "shrink",
        name: "Термошөгетін",
        tag: "Топтық қаптама",
        short: "Топтық қаптама: полотно, жартылай жең және жең.",
        desc: "Сусындарды, даналы тауарлар мен паллеттерді сенімді термошөгетін қаптауға арналған пленка. Полотно, жартылай жең және жең түрінде шығарылады.",
        thickness: "40–180 мкм",
        width: "500–2000 мм",
        cols: ["Модель", "Пішіні", "Ені, мм", "Қалыңдығы, мкм", "Бағасы"],
        rows: [
          { model: "Termo-S", vals: ["Полотно", "500–800", "40–60"] },
          { model: "Termo-M", vals: ["Жартылай жең", "1000–1500", "80–100"] },
          { model: "Termo-L", vals: ["Жең", "1500–2000", "120–150"] },
          { model: "Termo-XL", vals: ["Жартылай жең", "2000", "180"] },
        ],
      },
      {
        slug: "mulch",
        name: "Мульчалаушы",
        tag: "Агросектор",
        short: "Топырақты қорғау және өнімділікті арттыру.",
        desc: "Мульчалауға арналған пленка: ылғалды сақтайды, арамшөпті басады және ашық топырақтағы өнімділікті арттырады.",
        thickness: "30–80 мкм",
        width: "1000–2000 мм",
        cols: ["Модель", "Түсі", "Ені, мм", "Қалыңдығы, мкм", "Бағасы"],
        rows: [
          { model: "Mulch-Black", vals: ["Қара", "1000–1200", "30"] },
          { model: "Mulch-Silver", vals: ["Қара-күміс", "1200–1500", "40"] },
          { model: "Mulch-Pro", vals: ["Қара", "1500–2000", "60"] },
          { model: "Mulch-Wide", vals: ["Қара", "2000", "80"] },
        ],
      },
      {
        slug: "technical",
        name: "Техникалық (ЖҚП)",
        tag: "Құрылыс және қойма",
        short: "Техникалық және құрылыс қажеттіліктеріне арналған әмбебап пленка.",
        desc: "Жабуға, гидро- және бу оқшаулауға, құрылыс және қойма жұмыстарына арналған әмбебап жоғары қысымды полиэтилен пленкасы.",
        thickness: "100–200 мкм",
        width: "3000–4000 мм",
        cols: ["Модель", "Жайылған ені, мм", "Қалыңдығы, мкм", "Бағасы"],
        rows: [
          { model: "Tech-100", vals: ["3000", "100"] },
          { model: "Tech-150", vals: ["4000", "150"] },
          { model: "Tech-200", vals: ["4000", "200"] },
        ],
      },
    ],
  },
  industries: {
    eyebrow: "Салалар",
    heading: "Сіздің салаңызға арналған шешімдер",
    text: "Қазақстан мен ТМД-ның ауыл шаруашылығы, құрылыс және қаптама компанияларына жеткіземіз.",
    items: [
      { title: "Агросектор", text: "Жылыжай және мульчалаушы пленка, тыңайтқыш пен жем қаптамасы.", tags: "Жылыжай · Мульча · FFS" },
      { title: "Құрылыс", text: "Цемент пен құрғақ қоспаларға арналған қаптар, кірпіш паллеттерін қорғау, техникалық пленка.", tags: "FFS · Стретч-худ · ЖҚП" },
      { title: "Қаптама", text: "Сусындар мен тауарлардың топтық термошөгетін қаптамасы, көлік қаптамасы.", tags: "Термошөгетін · Стретч-худ" },
    ],
  },
  about: {
    eyebrow: "Компания туралы",
    heading: "Кез келген күрделіліктегі полимер шешімдері",
    text: "Зауыт озық еуропалық жабдықпен жарақталған және толық өндірістік циклді қамтамасыз етеді — шикізатты дайындаудан дайын өнімді шығаруға дейін.",
    missionLabel: "Біздің миссиямыз",
    mission: "Озық технологияларды пайдаланып, клиенттерге барынша пайда әкелетін пленка өндіру.",
    items: [
      { title: "Өз өндірісіміз", text: "Жаңа жабдық және 100% бастапқы полиэтиленнен жасалған пленка." },
      { title: "Өз зертханамыз", text: "Әр партия клиентке жөнелтілер алдында сапа тексеруінен өтеді." },
      { title: "Сертификатталған өнім", text: "ГОСТ пен ТШ-ға сәйкестік, әр кезеңде қатаң бақылау." },
    ],
  },
  advantages: {
    eyebrow: "Сервис",
    heading: "Бізбен жұмыс істеу ыңғайлы",
    items: [
      { title: "Өз автопаркіміз", text: "Батыс Қазақстан бойынша жылдам әрі сенімді жеткізу." },
      { title: "Жеке тәсіл", text: "Ені мен қалыңдығын клиенттің міндетіне дәл сәйкес таңдаймыз." },
      { title: "Уақытылы жеткізу", text: "Шикізат қалдығын бақылау және жоспарлау — мерзім бұзылмайды." },
      { title: "Икемді төлем", text: "Тұрақты клиенттерге ыңғайлы шарттар, ірі көлемдерге кейінге қалдыру." },
    ],
  },
  production: {
    eyebrow: "Өндіріс",
    heading: "Бір алаңда толық цикл",
    text: "Батыс Қазақстандағы еуропалық жабдықпен жұмыс істейтін жалғыз полиэтилен пленка зауыты.",
    steps: [
      { title: "Шикізатты дайындау", text: "Жетекші жеткізушілерден бастапқы полиэтилен, кіріс бақылауы." },
      { title: "Экструзия", text: "Берілген ені мен қалыңдығы бар көпқабатты пленка — 20-дан 250 мкм-ге дейін." },
      { title: "Флексобасылым", text: "Сұрау бойынша — пленкаға логотип, брендинг және таңбалау." },
      { title: "Кесу және пішіндеу", text: "Қажетті өлшемдегі жең, жартылай жең немесе полотно, орау және қаптау." },
      { title: "Сапа бақылауы", text: "Желідегі автоматты бақылау және әр партияны зертханада сынау." },
    ],
  },
  partners: { eyebrow: "Клиенттер", heading: "Бізге сенеді" },
  request: {
    eyebrow: "Коммерциялық ұсыныс",
    heading: "Сіздің ТТ бойынша пленканы есептейміз",
    text: "Барлық модельдердің бағасы — сұрау бойынша. Пленка түрі мен көлемін көрсетіңіз, менеджер ұсыныс дайындайды.",
    name: "Аты",
    namePh: "Сізге қалай жүгінеміз",
    company: "Компания",
    companyPh: "Компания атауы",
    phone: "Телефон",
    phonePh: "+7",
    product: "Пленка түрі",
    other: "Басқа",
    message: "Көлемі мен параметрлері",
    messagePh: "Мысалы: FFS-Pro, 560 мм, 150 мкм, 20 т/ай",
    privacy: "Батырманы басу арқылы сіз дербес деректерді өңдеуге келісім бересіз",
    submit: "Өтінім жіберу",
    successTitle: "Өтінім жіберуге дайын",
    successText: "Пошта бағдарламаңызда хат ашылды — оны жіберіңіз, менеджер жұмыс күні ішінде хабарласады.",
    sendAgain: "Жаңа өтінім",
    mailSubject: "Сайттан өтінім",
  },
  footer: {
    tagline: "Батыс Қазақстандағы полиэтилен пленка зауыты",
    colProducts: "Өнімдер",
    colCompany: "Компания",
    colContacts: "Байланыс",
    rights: "Caspi Polymer",
    privacy: "Құпиялылық саясаты",
  },
  contacts: {
    address: "Қазақстан Республикасы, Атырау қ., Жалантос батыр к., 9, 060003",
    hours: "Дс–Жм: 09:00–18:00",
    weekend: "Сб–Жс: демалыс",
  },
};

const en: Dict = {
  meta: {
    title: "Caspi Polymer — polyethylene film plant in Atyrau",
    description:
      "The only polyethylene film plant in Western Kazakhstan: FFS, stretch hood, greenhouse, shrink, mulch and technical film. 500+ tonnes per month.",
  },
  nav: {
    home: "Home",
    products: "Products",
    production: "Production",
    quality: "Quality",
    about: "About",
    contacts: "Contacts",
    requestCta: "Request a quote",
    menu: "Open menu",
    close: "Close menu",
  },
  topBar: {
    address: "Atyrau, 9 Zhalantos Batyr St.",
    hours: "Mon–Fri, 09:00–18:00",
  },
  hero: {
    eyebrow: "Polyethylene film plant · Atyrau",
    headlineA: "",
    headlineHighlight: "Next-generation",
    headlineB: " film for agriculture, construction and packaging",
    sub: "The only polyethylene film plant in Western Kazakhstan. Full cycle — from raw material preparation to finished rolls.",
    ctaPrimary: "Get a quote",
    ctaCatalog: "Catalog",
    chips: [
      { value: "500+", label: "tonnes per month" },
      { value: "20–250", label: "µm thickness range" },
    ],
    modelsWord: "models",
  },
  figures: [
    { value: "500+", label: "tonnes of film per month — capacity for large, regular supply" },
    { value: "20–250", label: "µm — a thickness range for any application" },
    { value: "100%", label: "automatic in-line quality control" },
    { value: "100%", label: "recyclable film made from virgin polyethylene" },
  ],
  products: {
    eyebrow: "Products",
    heading: "Our film range",
    allLink: "All specifications and models",
    thickness: "Thickness",
    width: "Width",
    priceOnRequest: "On request",
    requestPrice: "Request a price",
    tableTitle: "Models and specifications",
    tabsLabel: "Film type",
    customTitle: "Need a non-standard film?",
    customText: "We produce to your spec: width, thickness, material and roll length.",
    customCta: "Send your spec",
    items: [
      {
        slug: "ffs",
        name: "FFS film",
        tag: "For bulk goods",
        short: "Tubular film for automatic bagging of bulk products.",
        desc: "Gusseted tubular film for automatic Form-Fill-Seal lines: bags for cement, dry mixes, fertilisers and polymers.",
        thickness: "50–250 µm",
        width: "400–1100 mm",
        cols: ["Model", "Width, mm", "Thickness, µm", "Gussets", "Material", "Price"],
        rows: [
          { model: "FFS-Standard", vals: ["450–550", "50–160", "Yes", "White PE"] },
          { model: "FFS-Pro", vals: ["500–600", "140–180", "Yes", "PE / PP"] },
          { model: "FFS-Heavy", vals: ["550–650", "160–250", "Yes", "Reinforced PE"] },
          { model: "FFS-Custom", vals: ["To spec", "To spec", "To spec", "PE / PP"] },
        ],
      },
      {
        slug: "stretch-hood",
        name: "Stretch hood",
        tag: "Pallet protection",
        short: "Pallet hoods from light loads to bricks and dry mixes.",
        desc: "Elastic hood for automatic pallet wrapping: secures the load and protects it from moisture and dust in storage and transit.",
        thickness: "50–250 µm",
        width: "700–2000 mm",
        cols: ["Model", "Width, mm", "Thickness, µm", "Use", "Material", "Price"],
        rows: [
          { model: "Hood-Light", vals: ["1200–1500", "80", "Light loads", "PE"] },
          { model: "Hood-Strong", vals: ["1500–1800", "100", "Bricks, mixes", "PE"] },
          { model: "Hood-Heavy", vals: ["1800–2000", "120", "Heavy loads", "PE"] },
          { model: "Hood-Extra", vals: ["2000", "150", "Max protection", "PE"] },
        ],
      },
      {
        slug: "greenhouse",
        name: "Greenhouse",
        tag: "Agriculture",
        short: "Greenhouse cover film lasting up to 5 seasons.",
        desc: "Multi-layer frost-resistant film (UV + EVA) for greenhouses and hotbeds. The AGRO line is rated for up to 5 seasons.",
        thickness: "50–200 µm",
        width: "2–3.5 m",
        cols: ["Model", "Width, mm", "Thickness, µm", "Roll length", "Service life", "Price"],
        rows: [
          { model: "AGRO-Standard", vals: ["3000", "120", "100 m", "up to 3–4 seasons"] },
          { model: "AGRO-Pro", vals: ["4000", "150", "50 / 100 m", "up to 4–5 seasons"] },
          { model: "AGRO-Premium", vals: ["4000", "180", "50 m", "up to 5 seasons"] },
          { model: "AGRO-Arctic", vals: ["4000", "200", "50 m", "up to 5 seasons"] },
        ],
      },
      {
        slug: "shrink",
        name: "Shrink film",
        tag: "Multipack packaging",
        short: "Multipack packaging: sheet, half-sleeve and sleeve.",
        desc: "Film for reliable heat-shrink packaging of drinks, unit goods and pallets. Available as sheet, half-sleeve and sleeve.",
        thickness: "40–180 µm",
        width: "500–2000 mm",
        cols: ["Model", "Form", "Width, mm", "Thickness, µm", "Price"],
        rows: [
          { model: "Termo-S", vals: ["Sheet", "500–800", "40–60"] },
          { model: "Termo-M", vals: ["Half-sleeve", "1000–1500", "80–100"] },
          { model: "Termo-L", vals: ["Sleeve", "1500–2000", "120–150"] },
          { model: "Termo-XL", vals: ["Half-sleeve", "2000", "180"] },
        ],
      },
      {
        slug: "mulch",
        name: "Mulch film",
        tag: "Agriculture",
        short: "Soil protection and higher crop yields.",
        desc: "Mulching film that retains moisture, suppresses weeds and raises yields in open-field growing.",
        thickness: "30–80 µm",
        width: "1000–2000 mm",
        cols: ["Model", "Colour", "Width, mm", "Thickness, µm", "Price"],
        rows: [
          { model: "Mulch-Black", vals: ["Black", "1000–1200", "30"] },
          { model: "Mulch-Silver", vals: ["Black-silver", "1200–1500", "40"] },
          { model: "Mulch-Pro", vals: ["Black", "1500–2000", "60"] },
          { model: "Mulch-Wide", vals: ["Black", "2000", "80"] },
        ],
      },
      {
        slug: "technical",
        name: "Technical (LDPE)",
        tag: "Construction & storage",
        short: "Versatile film for technical and construction needs.",
        desc: "Versatile low-density polyethylene film for covering, damp- and vapour-proofing, construction and warehouse work.",
        thickness: "100–200 µm",
        width: "3000–4000 mm",
        cols: ["Model", "Unfolded width, mm", "Thickness, µm", "Price"],
        rows: [
          { model: "Tech-100", vals: ["3000", "100"] },
          { model: "Tech-150", vals: ["4000", "150"] },
          { model: "Tech-200", vals: ["4000", "200"] },
        ],
      },
    ],
  },
  industries: {
    eyebrow: "Industries",
    heading: "Solutions for your industry",
    text: "We supply agricultural, construction and packaging companies across Kazakhstan and the CIS.",
    items: [
      { title: "Agriculture", text: "Greenhouse and mulch film, packaging for fertilisers and feed.", tags: "Greenhouse · Mulch · FFS" },
      { title: "Construction", text: "Bags for cement and dry mixes, brick pallet protection, technical film.", tags: "FFS · Stretch hood · LDPE" },
      { title: "Packaging", text: "Heat-shrink multipacks for drinks and goods, transport packaging.", tags: "Shrink · Stretch hood" },
    ],
  },
  about: {
    eyebrow: "About us",
    heading: "Polymer solutions of any complexity",
    text: "The plant runs advanced European equipment and covers the full production cycle — from raw material preparation to finished product.",
    missionLabel: "Our mission",
    mission: "Producing film with advanced technology and maximum value for our clients.",
    items: [
      { title: "Own production", text: "New equipment and film made from 100% virgin polyethylene." },
      { title: "Own laboratory", text: "Every batch is quality-tested before it ships to the client." },
      { title: "Certified products", text: "Compliant with GOST and technical specs, strict control at every stage." },
    ],
  },
  advantages: {
    eyebrow: "Service",
    heading: "Easy to work with",
    items: [
      { title: "Own fleet", text: "Fast, reliable delivery across Western Kazakhstan." },
      { title: "Tailored approach", text: "Width and thickness matched exactly to your task." },
      { title: "On-time supply", text: "Raw material stock control and planning — no missed deadlines." },
      { title: "Flexible payment", text: "Convenient terms for regular clients, deferred payment on large volumes." },
    ],
  },
  production: {
    eyebrow: "Production",
    heading: "Full cycle on one site",
    text: "The only polyethylene film plant in Western Kazakhstan, running European equipment.",
    steps: [
      { title: "Raw materials", text: "Virgin polyethylene from leading suppliers, incoming inspection." },
      { title: "Extrusion", text: "Multi-layer film at the set width and thickness — from 20 to 250 µm." },
      { title: "Flexo printing", text: "On request — logos, branding and labelling printed on the film." },
      { title: "Cutting & forming", text: "Sleeve, half-sleeve or sheet cut to size, wound and packed." },
      { title: "Quality control", text: "Automatic in-line control and lab testing of every batch." },
    ],
  },
  partners: { eyebrow: "Clients", heading: "Trusted by" },
  request: {
    eyebrow: "Commercial offer",
    heading: "We'll price film to your spec",
    text: "All prices are on request. Tell us the film type and volume, and a manager will prepare an offer.",
    name: "Name",
    namePh: "How should we address you",
    company: "Company",
    companyPh: "Company name",
    phone: "Phone",
    phonePh: "+7",
    product: "Film type",
    other: "Other",
    message: "Volume and parameters",
    messagePh: "E.g. FFS-Pro, 560 mm, 150 µm, 20 t/month",
    privacy: "By clicking the button you consent to the processing of personal data",
    submit: "Send request",
    successTitle: "Your request is ready to send",
    successText: "We opened an email in your mail app — send it and a manager will contact you within one business day.",
    sendAgain: "New request",
    mailSubject: "Website request",
  },
  footer: {
    tagline: "Polyethylene film plant in Western Kazakhstan",
    colProducts: "Products",
    colCompany: "Company",
    colContacts: "Contacts",
    rights: "Caspi Polymer",
    privacy: "Privacy policy",
  },
  contacts: {
    address: "Republic of Kazakhstan, Atyrau, 9 Zhalantos Batyr St., 060003",
    hours: "Mon–Fri: 09:00–18:00",
    weekend: "Sat–Sun: closed",
  },
};

export const translations: Record<Locale, Dict> = { ru, kk, en };
export type T = Dict;
