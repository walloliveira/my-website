import { createI18n } from "vue-i18n";
import enUs from "../locales/en-US.json";
import ptBr from "../locales/pt-BR.json";

const i18n = createI18n({
  locale: "pt-BR",
  legacy: false,
  messages: {
    "en-US": enUs,
    "pt-BR": ptBr,
  },
});

export default i18n;
