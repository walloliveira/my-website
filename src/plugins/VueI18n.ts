import { createI18n } from "vue-i18n";
import enUs from "../locales/en-US.json";
import ptBr from "../locales/pt-BR.json";

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

export default i18n;
