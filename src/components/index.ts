// 对外暴露的组件
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
//引入element-plus提供全部图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 注册全局组件
const allGlobalComponent = {
  SvgIcon,
  Pagination,
}
export default {
  install(app) {
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key])
    })
    // 注册element-plus提供的全部图标组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
