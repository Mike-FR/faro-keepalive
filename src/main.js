import Vue from 'vue'
import App from './App.vue'
import PackageJson from "../package.json";
import {initializeTracingAndLogging} from "./monitoring/faro";

initializeTracingAndLogging(PackageJson);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
