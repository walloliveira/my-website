import { createI18n } from "vue-i18n";
import enUs from "../locales/en-US.json";
import ptBr from "../locales/pt-BR.json";
import BrazilImg from "../assets/brazil-country.png";
import UsImg from "../assets/us-country.png";

const parseToObject = (obj: object) => JSON.parse(JSON.stringify(obj));

const i18n = createI18n({
  locale: "pt-BR",
  legacy: false,
  messages: {
    "en-US": enUs.messages,
    "pt-BR": ptBr.messages,
  },
  datetimeFormats: {
    "en-US": parseToObject(enUs.datetimeFormats),
    "pt-BR": parseToObject(ptBr.datetimeFormats),
  },
});

const countriesImg: { [key: string]: string } = {
  "en-US": UsImg,
  "pt-BR": BrazilImg,
};

const localesDescription: { [key: string]: string } = {
  "en-US": "English",
  "pt-BR": "Portugues",
};

export const getLocaleImg = (locale: string) => countriesImg[locale];
export const getLocaleDescription = (locale: string) =>
  localesDescription[locale];

export default i18n;
