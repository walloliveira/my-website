import "@mdi/font/css/materialdesignicons.css";
import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "../main.scss";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#E8EAF6",
    surface: "#5C6BC0",
    primary: "#3F51B5",
    "primary-darken-1": "#3949AB",
    secondary: "#7986CB",
    "secondary-darken-1": "#424242",
    error: "#A7FFEB",
    info: "#C5CAE9",
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
