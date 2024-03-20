import type { App } from 'vue'

import menu from './menu'
import './styles/base.scss'
import './styles/ui.scss'

const components = [menu]

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  }
}
