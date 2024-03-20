import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import menu from './menu'
import './styles/base.scss'
import './styles/ui.scss'

const components = [menu]

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
}
