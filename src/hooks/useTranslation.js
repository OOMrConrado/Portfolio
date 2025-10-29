"use client";
import { useLanguage } from "../context/LanguageContext";
import { getTranslation } from "../locales";

export function useTranslation() {
    const { language } = useLanguage();
    const t = getTranslation(language);

    return { t, language };
}
