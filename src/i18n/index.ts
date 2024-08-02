import spanish from "@resume";
import english from "@resume_en";
import i18n_en from "./en.json";
import i18n_es from "./es.json";

export const LANG = {
  SPANISH: {
    locale: "es",
    name: "Español"
  },
  ENGLISH: {
    locale: "en",
    name: "English"
  }
}

export const getTranslatedResume = ({ locale = "es" } : { locale: string | undefined }) => {
  if (locale === LANG.ENGLISH.locale) return english;
  if (locale === LANG.SPANISH.locale) return spanish;
  return spanish;
}

export const getI18N = ({ locale = "es" } : { locale: string | undefined }) => {
  if (locale === LANG.ENGLISH.locale) return i18n_en;
  if (locale === LANG.SPANISH.locale) return i18n_es;
  return i18n_es;
}