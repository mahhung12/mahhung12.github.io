import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./translations/en.json";
import vi from "./translations/vi.json";

// the translations
const resources = {
    en: {
        translation: en,
    },
    vi: {
        translation: vi,
    },
};

i18n.use(initReactI18next).init({
    ns: "translation",
    resources,
    lng: "en",
    returnObjects: true,
    debug: true,

    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
});

export default i18n;
