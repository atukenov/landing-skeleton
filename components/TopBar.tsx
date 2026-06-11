"use client";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TopBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-dark-900 text-gray-400 text-xs py-2 hidden md:block">
      <div className="section-wrapper flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <MapPin size={11} className="text-primary-400" />
          <span>{t.topBar.address}</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`tel:${t.topBar.phone.replace(/\D/g, "")}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone size={11} className="text-primary-400" />
            {t.topBar.phone}
          </a>
          <a
            href={`mailto:${t.topBar.email}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail size={11} className="text-primary-400" />
            {t.topBar.email}
          </a>
        </div>
      </div>
    </div>
  );
}
