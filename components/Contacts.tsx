"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";

export default function Contacts() {
  const { t } = useLanguage();
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  }

  const infoItems = [
    { icon: MapPin, label: t.contacts.addressLabel, value: t.contacts.addressValue, href: undefined },
    { icon: Phone,  label: t.contacts.phoneLabel,   value: t.contacts.phoneValue,   href: `tel:${t.contacts.phoneValue.replace(/\D/g, "")}` },
    { icon: Mail,   label: t.contacts.emailLabel,   value: t.contacts.emailValue,   href: `mailto:${t.contacts.emailValue}` },
  ];

  return (
    <section id="contacts" className="py-24 bg-slate-50 relative">
      <div className="absolute inset-0 pattern-dots opacity-40" />

      <div ref={ref} className="relative z-10 section-wrapper">
        {/* Heading */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="eyebrow">{t.contacts.eyebrow}</span>
          <h2 className="section-heading mt-2">{t.contacts.heading}</h2>
          <div className="accent-line mx-auto" />
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-10 transition-all duration-700 delay-150 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h3 className="font-heading text-xl font-bold text-dark-800 mb-3">
                {t.contacts.companyName}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t.contacts.cta}</p>
            </div>

            <ul className="space-y-5">
              {infoItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary-600 text-white rounded-lg shrink-0 shadow-sm">
                    <Icon size={15} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest mb-0.5 font-semibold">
                      {label}
                    </div>
                    {href ? (
                      <a href={href} className="text-dark-800 font-semibold text-sm hover:text-primary-600 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <span className="text-dark-800 font-semibold text-sm">{value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-200 pt-6 text-sm text-gray-500">
              <p className="font-semibold text-dark-700 mb-2">{t.contacts.hoursTitle}</p>
              <p>{t.contacts.hoursWeekdays}</p>
              <p>{t.contacts.hoursWeekend}</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white border border-gray-100 shadow-md rounded-2xl p-8 md:p-10">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle size={28} className="text-green-600" />
                </div>
                <h3 className="font-heading text-xl font-bold text-dark-800">
                  {t.contacts.successTitle}
                </h3>
                <p className="text-gray-500 text-sm max-w-xs">{t.contacts.successDesc}</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 text-sm text-primary-600 font-semibold hover:underline"
                >
                  {t.contacts.sendAgain}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-heading text-xl font-bold text-dark-800 mb-6">
                  {t.contacts.formTitle}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">
                      {t.contacts.nameLabel}
                    </label>
                    <input
                      required type="text"
                      placeholder={t.contacts.namePlaceholder}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">
                      {t.contacts.companyLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.contacts.companyPlaceholder}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">
                      {t.contacts.phoneFLabel}
                    </label>
                    <input
                      required type="tel"
                      placeholder={t.contacts.phoneFPlaceholder}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">
                      {t.contacts.emailFLabel}
                    </label>
                    <input
                      type="email"
                      placeholder={t.contacts.emailFPlaceholder}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">
                    {t.contacts.productLabel}
                  </label>
                  <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all">
                    <option value="">{t.contacts.productPlaceholder}</option>
                    {t.contacts.productOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">
                    {t.contacts.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t.contacts.messagePlaceholder}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? t.contacts.submittingBtn : t.contacts.submitBtn}
                  {!loading && <Send size={14} />}
                </button>

                <p className="text-xs text-gray-400 text-center">{t.contacts.privacy}</p>
              </form>
            )}
          </div>
        </div>

        {/* Map placeholder */}
        <div className={`mt-12 h-64 bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200 overflow-hidden transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-gray-400 text-sm">{t.contacts.mapPlaceholder}</p>
        </div>
      </div>
    </section>
  );
}
