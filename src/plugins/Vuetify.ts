import "@mdi/font/css/materialdesignicons.css";
import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "../main.scss";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#E0F2F1",
    surface: "#E0F2F1",
    primary: "#009688",
    "primary-darken-1": "#00897B",
    secondary: "#B2DFDB",
    "secondary-darken-1": "#00796B",
    error: "#A7FFEB",
    info: "#4DB6AC",
    success: "#00695C",
    warning: "#64FFDA",
    gold: "#FFD700",
    silver: "#BDBDBD",
    bronze: "#8D6E63",
  },
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: { myCustomLightTheme },
  },

  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

export default vuetify;
