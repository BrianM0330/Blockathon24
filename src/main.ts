import Vue from 'vue'
import App from './App.vue'

import './assets/main.css'
import Highcharts from "highcharts";
import Treemap from 'highcharts/modules/treemap'
import HighchartsVue from "highcharts-vue";

Treemap(Highcharts)
Vue.use(HighchartsVue)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
