import Vue from 'vue'
import App from './App.vue'
import SocioManifest from "../socio-manifest.json";
import PackageJson from "../package.json";
import {initializeTracingAndLogging} from "@socotec.io/socio-vue-components";

initializeTracingAndLogging(SocioManifest, PackageJson, { useDocumentLoadInstrumentation: true, maxExportBatchSize: 20});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
