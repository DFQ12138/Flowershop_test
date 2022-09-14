import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
//import 'element-plus/lib/theme-chalk/index.css'
import 'element-plus/dist/index.css'
const app = createApp(App)
// createApp(App).mount('#app')

app.use(ElementPlus)

app.mount('#app') // 挂载到id为app的元素上
