import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import Tasks from './tasks/store'




Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      Tasks
    }

  })


export default store