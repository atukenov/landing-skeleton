"use client";
import { FormEvent, useState } from "react";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { company } from "@/lib/i18n";
import Reveal from "./Reveal";

export default function RequestForm() {
  const { t } = useLanguage();
  const { request } = t;
  const [sent, setSent] = useState(false);

  // No backend yet: compose the request as an email in the visitor's mail app.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const company_ = get("company");
    const subject = `${request.mailSubject}: ${get("name")}${company_ ? ` (${company_})` : ""}`;
    const body = [
      `${request.name}: ${get("name")}`,
      `${request.company}: ${company_}`,
      `${request.phone}: ${get("phone")}`,
      `${request.product}: ${get("product")}`,
      `${request.message}: ${get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="request" aria-labelledby="request-title" className="section">
      <div className="mx-auto w-full max-w-site px-4 sm:px-8">
        <Reveal className="grid grid-cols-1 gap-12 rounded-[28px] bg-ink px-6 py-10 text-white sm:px-10 lg:grid-cols-2 lg:gap-20 lg:rounded-[32px] lg:px-16 lg:py-[72px]">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-amber sm:text-sm">
              {request.eyebrow}
            </span>
            <h2 id="request-title" className="h-section lg:text-5xl">{request.heading}</h2>
            <p className="text-[17px] leading-relaxed text-muted-dark">{request.text}</p>
            <div className="flex flex-col gap-3.5 pt-4">
              <a href={company.phoneHref} className="font-display text-2xl hover:text-amber sm:text-[28px]">
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="break-all text-lg font-semibold text-amber hover:underline">
                {company.email}
              </a>
            </div>
          </div>

          {sent ? (
            <div className="flex flex-col items-start justify-center gap-5" role="status">
              <CheckCircle size={48} className="text-amber" aria-hidden="true" />
              <h3 className="font-display text-2xl font-medium">{request.successTitle}</h3>
              <p className="text-base leading-relaxed text-muted-dark">{request.successText}</p>
              <button type="button" onClick={() => setSent(false)} className="btn-primary">
                {request.sendAgain}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="field">
                  {request.name} *
                  <input name="name" required autoComplete="name" placeholder={request.namePh} className="field-input" />
                </label>
                <label className="field">
                  {request.company}
                  <input name="company" autoComplete="organization" placeholder={request.companyPh} className="field-input" />
                </label>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="field">
                  {request.phone} *
                  <input name="phone" type="tel" required autoComplete="tel" placeholder={request.phonePh} className="field-input" />
                </label>
                <label className="field">
                  {request.product}
                  <select name="product" className="field-input">
                    {t.products.items.map((p) => (
                      <option key={p.slug}>{p.name}</option>
                    ))}
                    <option>{request.other}</option>
                  </select>
                </label>
              </div>
              <label className="field">
                {request.message}
                <textarea
                  name="message"
                  rows={4}
                  placeholder={request.messagePh}
                  className="field-input h-auto resize-none py-4"
                />
              </label>
              <div className="flex flex-col justify-between gap-5 pt-2 sm:flex-row sm:items-center">
                <span className="max-w-[300px] text-[13px] leading-normal text-[#9ea3ab]">{request.privacy}</span>
                <button type="submit" className="btn-primary h-14 px-8">
                  {request.submit}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
