// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from '@/config/axios'
import './config/scroll.css'
import './fonts/style.css'
import { 
  Button ,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
} from 'element-ui';

Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
