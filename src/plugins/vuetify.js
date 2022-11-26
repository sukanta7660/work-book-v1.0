import { lightTheme } from '@/config/theme';
import VuetifyNumberInput from '@jzolago/vuetify-number-input';
import '@mdi/font/css/materialdesignicons.css';
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

Vue.use(VuetifyNumberInput);

const opts = {
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    dark: false,
    default: 'light',
    options: {
      customProperties: true,
      variations: false
    },
    
    themes: {
      light: {
        ...lightTheme
      }
    }
  },
};

export default new Vuetify(opts);
