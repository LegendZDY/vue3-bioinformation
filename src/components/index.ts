// 对外暴露的组件
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
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
  },
}
