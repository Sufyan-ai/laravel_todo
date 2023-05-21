import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css';
// import '@mdi/font/css/materialdesignicons.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

Vue.use(Vuetify)

const opts  = {
    icons: {
      iconfont: 'mdiSvg' || 'md' || 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    theme: {
      themes: {
        light: {
          greytoolbar: '#f6f6f6',
          dashboardBackground: '#f5f5f9',
          drawerBackground: '#19222E',
          btnIcon: '#000',
          dealerBackground: '#fafafa',
          dealerDrawerBackground: '#ffffff',
          filezoneBackground: '#eeeeee',
          dealerYourCollections: '#ffffff',
        },
        dark: {
          dashboardBackground: '#121212',
          drawerBackground: '#121212',
          btnIcon: '#fff',
          dealerBackground: '#1a1a1e',
          dealerDrawerBackground: '#292931',
          filezoneBackground: '#292931',
          dealerYourCollections: '#292931',
        },
      },
    },
  }

  export default new Vuetify(opts)
