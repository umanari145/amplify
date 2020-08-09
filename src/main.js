import Vue from 'vue'
import App from './App.vue'

import awsconfig from './aws-exports';
import Amplify, * as AmplifyModules from 'aws-amplify';
import {AmplifyPlugin}  from 'aws-amplify-vue';
import store from "./store/index.js"
import router from "./router.js"

Amplify.configure(awsconfig);
Vue.use(AmplifyPlugin, AmplifyModules);

Vue.config.productionTip = false;

new Vue({
  router,
  store,  
  render: h => h(App)
}).$mount('#app')
