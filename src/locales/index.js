import { es } from "./es";
import { en } from "./en";

export const translations = {
    es,
    en,
};

export function getTranslation(language) {
    return translations[language] || translations.es;
}
