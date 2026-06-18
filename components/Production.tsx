"use client";
import { Factory, Layers, FlaskConical, Scissors, ShieldCheck } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    icon: Layers,
    title: "Подготовка сырья",
    desc: "Тщательный отбор сырья от ведущих мировых поставщиков — только высококачественные полимеры.",
  },
  {
    icon: Factory,
    title: "Экструзия",
    desc: "Формирование плёнки заданных параметров (ширина, толщина, плотность) с применением многослойной технологии.",
  },
  {
    icon: Layers,
    title: "Флексографическая печать",
    desc: "По запросу клиента — нанесение логотипов, брендирования и другой информации на плёнку.",
  },
  {
    icon: Scissors,
    title: "Нарезка и формовка",
    desc: "Готовая плёнка нарезается под необходимые размеры и формы (рукав, полурукав, полотно), фасовка и упаковка.",
  },
  {
    icon: ShieldCheck,
    title: "Контроль качества",
    desc: "Многоступенчатый контроль в собственной аттестованной лаборатории: прочность, эластичность, термоусадка, соответствие ГОСТам.",
  },
];

export default function Production() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: gridRef, inView: gridIn } = useInView();
  const { ref: textRef, inView: textIn } = useInView();

  return (
    <section id="production" className="py-24 bg-dark-900 relative overflow-hidden scroll-mt-28">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pattern-grid opacity-10" />

      <div className="relative z-10 section-wrapper">
        {/* Heading */}
        <div
          ref={headRef}
          className={`text-center mb-16 transition-all duration-700 ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="eyebrow text-primary-400">Наш завод</span>
          <h2 className="section-heading mt-2 text-white">Производство</h2>
          <div className="accent-line mx-auto" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Единственный завод по производству полиэтиленовой плёнки в Западном Казахстане.
            Оснащён передовым европейским оборудованием и обеспечивает полный цикл производства
            — от подготовки сырья до выпуска готовой продукции.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — production steps */}
          <div
            ref={gridRef}
            className={`space-y-6 transition-all duration-700 ${gridIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`flex gap-5 transition-all duration-500 ${gridIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: gridIn ? `${i * 0.08}s` : "0s" }}
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary-600/20 border border-primary-600/40 flex items-center justify-center">
                  <step.icon size={20} className="text-primary-400" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white text-sm mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — key facts */}
          <div
            ref={textRef}
            className={`transition-all duration-700 delay-200 ${textIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FlaskConical size={22} className="text-accent-400" />
                  <h3 className="font-heading font-bold text-white">Собственная лаборатория</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Аттестованная лаборатория проводит все необходимые испытания: проверку на прочность,
                  эластичность, термоусадку и другие ключевые параметры. Каждая партия сертифицируется
                  на соответствие ГОСТам и международным стандартам.
                </p>
              </div>

              <div className="border-t border-white/10 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <Factory size={22} className="text-accent-400" />
                  <h3 className="font-heading font-bold text-white">Производственные мощности</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Высокопроизводительные экструзионные линии обеспечивают стабильное качество и
                  высокую точность параметров плёнки. Производственная площадь позволяет выпускать
                  сотни тонн готовой продукции ежемесячно, обеспечивая бесперебойные поставки.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
                {[
                  { value: "500+", label: "тонн / месяц" },
                  { value: "5", label: "линеек продукции" },
                  { value: "100%", label: "контроль качества" },
                  { value: "ЗКО", label: "единственный в регионе" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 rounded-xl p-4">
                    <div className="font-heading text-2xl font-bold text-primary-300">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-0.5 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
