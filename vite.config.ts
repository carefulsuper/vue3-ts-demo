import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import AutoImport from 'unplugin-vue-components'
// https://vitejs.dev/config/
export default defineConfig({
  // @ts-ignore
  plugins: [vue(),vueJsx(),
    // AutoImport({    imports:['vue']  })
  ],
})
