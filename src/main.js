import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
//设置请求的根路径 

//3.1:引入axios库(VueResource)
import axios from "axios";
//要求axios每次必须携带cookie去服务端
// axios.defaults.withCredentials=true;
Vue.prototype.$axios=axios;

//4:引入vue-resource库
// import VueResource from "vue-resource";
// Vue.use(VueResource);

// //6:配置Vue-resource常见属性
// //6.1:设置请求的服务器根目录
// Vue.http.options.root = "http://wyyapi.applinzi.com/";
// //6.2:全局设置post 时候表单的数据组织格式为 application/x-www-form-urlencoded
// //将提交数据进行转码操作
// Vue.http.options.emulateJSON = true;
// //6.3:跨域访问保存session值选项
// Vue.http.options.withCredentials= true;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
