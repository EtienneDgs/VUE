import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import axios from 'axios'
import store from './store';

require('@/store/subscriber');

Vue.config.productionTip = false

//axios.defaults.baseURL='http://localhost:8000/api/';

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => { //on attend la réponse avant de charger la page, cela évite le changment de menu juste après la requete
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')

});

