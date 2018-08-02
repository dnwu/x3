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
  Breadcrumb,
  BreadcrumbItem,
  Input,
  Form,
  FormItem,
  Table,
  TableColumn,
  Pagination,
  Dialog,
  MessageBox,
  Radio,
  RadioGroup,
  Select,
  Option,
  Tree,
} from 'element-ui';

Vue.prototype.axios = axios
Vue.prototype.$confirm = MessageBox
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Select)
Vue.use(Option)
Vue.use(Tree)
// Vue.use(MessageBox)
// Vue.use(Message)
// Vue.use(Notification)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
