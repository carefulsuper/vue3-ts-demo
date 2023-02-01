import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

const Mit = mitt()
const app=createApp(App)
//TypeScript注册
// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示
declare module "vue" {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit
    }
}

app.mount('#app')
//Vue3挂载全局API
app.config.globalProperties.$Bus = Mit
