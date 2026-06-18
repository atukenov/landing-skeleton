"use client";
import { useEffect } from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";

export type ProductDetail = {
  title: string;
  desc: string;
  image: string;
  badge?: "popular" | "new" | null;
  longDesc: string;
  advantages: string[];
  specs: { label: string; value: string }[];
};

interface ProductModalProps {
  product: ProductDetail;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          aria-label="Закрыть"
        >
          <X size={16} />
        </button>

        {/* Product image */}
        <div className="relative h-56 sm:h-72 overflow-hidden rounded-t-2xl bg-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-accent-400 text-dark-900 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {product.badge === "popular" ? "Популярное" : "Новинка"}
            </span>
          )}
        </div>

        <div className="p-6 md:p-8">
          <h2 className="font-heading text-2xl font-bold text-dark-900 mb-2">{product.title}</h2>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">{product.longDesc}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Advantages */}
            <div>
              <h3 className="font-heading font-semibold text-dark-800 mb-4 text-sm uppercase tracking-widest">
                Преимущества
              </h3>
              <ul className="space-y-2.5">
                {product.advantages.map((adv) => (
                  <li key={adv} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-primary-600 shrink-0 mt-0.5" />
                    {adv}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs */}
            <div>
              <h3 className="font-heading font-semibold text-dark-800 mb-4 text-sm uppercase tracking-widest">
                Технические характеристики
              </h3>
              <dl className="space-y-2">
                {product.specs.map((s) => (
                  <div key={s.label} className="flex justify-between text-sm border-b border-gray-100 pb-2">
                    <dt className="text-gray-500">{s.label}</dt>
                    <dd className="font-semibold text-dark-800 text-right max-w-[55%]">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <a
            href="#contacts"
            onClick={onClose}
            className="btn-primary mt-8 w-full justify-center gap-2"
          >
            Оставить заявку
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
