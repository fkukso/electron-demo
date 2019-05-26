import Vue from 'vue'
import Router from 'vue-router'
import routerConfig from './router/router-config.js'
import App from './App.vue'

import {
  Button,
  Input,
  TabPane,
  Tabs
} from 'element-ui'

Vue.use(Router)

const router = new Router(routerConfig)

// 关闭生产模式下给出的提示
Vue.config.productionTip = false

Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(TabPane.name, TabPane)
Vue.component(Tabs.name, Tabs)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')