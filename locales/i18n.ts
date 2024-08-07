import { I18n } from "i18n-js";
// import { getLocales } from "expo-localization";
import en from './en';

// export const deviceLanguage = getLocales()?.[0]?.languageCode ?? "en";
export const deviceLanguage = "en";

export const i18n = new I18n({
  en
});

i18n.defaultLocale = deviceLanguage;

i18n.locale = deviceLanguage;

