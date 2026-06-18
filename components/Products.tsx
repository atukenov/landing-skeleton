"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";
import ProductModal, { ProductDetail } from "./ProductModal";

const productImages: Record<number, string> = {
  0: "/парниковая пленка.jpg",
  1: "/стретч-худ.jpg",
  2: "/Термоусадочная пленка.png",
  3: "/мульчирующая пленка.webp",
  4: "/техническая пленка.webp",
};

const productDetails: ProductDetail[] = [
  {
    title: "Парниковая плёнка (UV + EVA)",
    desc: "Многослойная, морозостойкая, срок службы до 5 сезонов.",
    image: "/парниковая пленка.jpg",
    badge: "popular",
    longDesc:
      "Парниковая плёнка производства Caspi Polymer — это высококачественный полиэтиленовый материал, созданный специально для укрытия теплиц, парников и сезонных укрытий. Благодаря использованию премиального сырья EVA и надёжного УФ-стабилизатора плёнка обеспечивает отличную светопропускную способность, долговечность и устойчивость к климатическим воздействиям.",
    advantages: [
      "Высококачественное сырьё EVA + УФ-стабилизатор для прочности и долговечности",
      "Высокая светопропускная способность — до 90%",
      "УФ-стабилизация — устойчивость к солнечным лучам в течение нескольких сезонов",
      "Прочность и эластичность: выдерживает ветер, град и механические повреждения",
      "Терморегуляция: сохраняет тепло ночью, предотвращает перегрев днём",
    ],
    specs: [
      { label: "Сырьё", value: "Полиэтилен + EVA + УФ-стабилизатор" },
      { label: "Толщина", value: "80–200 мкм" },
      { label: "Ширина", value: "до 12 метров" },
      { label: "Срок службы", value: "1–3 сезона (до 5 с УФ)" },
      { label: "Типы поставки", value: "Рукав, полурукав, полотно" },
    ],
  },
  {
    title: "Стретч-худ (Stretch Hood)",
    desc: "Для автоматической упаковки паллет.",
    image: "/стретч-худ.jpg",
    badge: null,
    longDesc:
      "Стретч-худ от Caspi Polymer — многослойная эластичная термоусадочная плёнка премиум-класса, предназначенная для автоматической упаковки паллет методом обтягивания сверху. Обеспечивает полную герметизацию груза и высокую скорость упаковки на автоматических линиях.",
    advantages: [
      "Полная герметизация груза со всех сторон, включая верх",
      "Высокая скорость упаковки на автоматических линиях",
      "Плотная фиксация без дополнительных крепёжных материалов",
      "Экономия материала за счёт высокой степени растяжения",
      "Высокая стойкость к проколам и разрывам",
    ],
    specs: [
      { label: "Тип плёнки", value: "Многослойная эластичная (Stretch Hood)" },
      { label: "Толщина", value: "80–120 мкм" },
      { label: "Степень растяжения", value: "до 300%" },
      { label: "Типы поставки", value: "Рулоны для автоматических машин" },
      { label: "Совместимость", value: "Большинство автоматических упаковочных машин" },
    ],
  },
  {
    title: "Термоусадочная плёнка",
    desc: "Для надёжной термоусадочной упаковки грузов и паллет",
    image: "/Термоусадочная пленка.png",
    badge: null,
    longDesc:
      "Термоусадочная плёнка Caspi Polymer — надёжный полиэтиленовый упаковочный материал, который при нагревании плотно обтягивает груз, обеспечивая отличную защиту и фиксацию. Производится с высокими показателями прочности и усадки.",
    advantages: [
      "Высокая прочность и устойчивость к проколам",
      "Отличная герметичность после термоусадки",
      "Плотная фиксация паллеты, предотвращает смещение грузов",
      "Возможность штабелирования упакованных паллет",
      "Универсальность: пищевые, строительные, промышленные товары",
    ],
    specs: [
      { label: "Тип плёнки", value: "Термоусадочная полиэтиленовая" },
      { label: "Толщина", value: "60–150 мкм" },
      { label: "Соответствие", value: "ГОСТ 25951-83" },
      { label: "Типы поставки", value: "Рукав, полурукав, полотно" },
      { label: "Степень усадки", value: "Высокая" },
    ],
  },
  {
    title: "Мульчирующая плёнка",
    desc: "Для защиты почвы и повышения урожайности в сельском хозяйстве.",
    image: "/мульчирующая пленка.webp",
    badge: null,
    longDesc:
      "Мульчирующая плёнка Caspi Polymer — высококачественный полиэтиленовый материал для покрытия почвы в сельском хозяйстве. Эффективно подавляет рост сорняков, сохраняет влагу в грунте и создаёт оптимальный температурный режим для корневой системы растений.",
    advantages: [
      "Эффективная борьба с сорняками — блокирует доступ света к почве",
      "Сохранение влаги — снижает потребность в поливе",
      "Регулирование температуры грунта — прогрев почвы весной",
      "Защита плодов от гниения при контакте с землёй",
      "Стабильное качество и долговечность",
    ],
    specs: [
      { label: "Цвет", value: "Чёрный, чёрно-серебристый" },
      { label: "Толщина", value: "30–80 мкм" },
      { label: "Ширина", value: "1000–2000 мм" },
      { label: "Типы поставки", value: "Рулоны" },
    ],
  },
  {
    title: "Техническая плёнка (ПВД)",
    desc: "Универсальная полиэтиленовая плёнка для технических и строительных нужд.",
    image: "/техническая пленка.webp",
    badge: null,
    longDesc:
      "Техническая плёнка Caspi Polymer — универсальный полиэтиленовый материал широкого применения для строительства, сельского хозяйства и промышленности. Изготовлена из первичного полиэтилена низкого давления (ПВД) с высокими показателями прочности и долговечности.",
    advantages: [
      "Высокая прочность на разрыв и прокол",
      "Устойчивость к влаге, химикатам и механическим воздействиям",
      "Широкий диапазон применения: строительство, с/х, промышленность",
      "Гибкость и эластичность при низких температурах",
      "100% первичное сырьё — стабильное качество",
    ],
    specs: [
      { label: "Материал", value: "Полиэтилен низкого давления (ПВД)" },
      { label: "Толщина", value: "100–200 мкм" },
      { label: "Ширина (разворот)", value: "3000–4000 мм" },
      { label: "Типы поставки", value: "Рулоны" },
    ],
  },
];

export default function Products() {
  const { t } = useLanguage();
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: gridRef, inView: gridIn } = useInView();
  const [activeProduct, setActiveProduct] = useState<ProductDetail | null>(null);

  return (
    <section id="products" className="py-24 bg-white relative scroll-mt-28">
      <div className="absolute inset-0 pattern-grid" />

      <div className="relative z-10 section-wrapper">
        {/* Heading row */}
        <div
          ref={headRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 transition-all duration-700 ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div>
            <span className="eyebrow">{t.products.eyebrow}</span>
            <h2 className="section-heading mt-2">{t.products.heading}</h2>
            <div className="accent-line" />
          </div>
          <a href="#contacts" className="btn-outline self-start md:self-auto shrink-0">
            {t.products.requestCatalog}
          </a>
        </div>

        {/* Cards grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {t.products.categories.map((cat, i) => (
            <div
              key={cat.title}
              onClick={() => setActiveProduct(productDetails[i])}
              className={`group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col ${gridIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: gridIn ? `${i * 0.08}s` : "0s" }}
            >
              {/* Product image */}
              <div className="relative h-44 overflow-hidden shrink-0 bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={productImages[i]}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-all duration-300" />
                {cat.badge && (
                  <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 uppercase tracking-wide rounded ${
                    cat.badge === "popular"
                      ? "bg-accent-500 text-white"
                      : "bg-primary-600 text-white"
                  }`}>
                    {t.products.badges[cat.badge]}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading text-lg font-bold text-dark-800 group-hover:text-primary-600 transition-colors leading-snug">
                  {cat.title}
                </h3>
                <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                  {cat.desc}
                </p>

                {/* Product items */}
                <div className="mt-4 border-t border-gray-100 pt-4 space-y-2 flex-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                    {t.products.modelsLabel}
                  </p>
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-start gap-2 text-xs">
                      <span className="font-semibold text-dark-700 shrink-0 min-w-[6rem]">{item.name}</span>
                      <span className="text-gray-400">{item.specs.join(' · ')}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-1.5 text-primary-600 text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                  {t.products.more}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProduct && (
        <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />
      )}
    </section>
  );
}
