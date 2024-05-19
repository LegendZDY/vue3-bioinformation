//小仓库：layout组件相关配置仓库
import { defineStore } from 'pinia'

const useLayOutSettingStore = defineStore('layoutSetting', {
  state: () => {
    return {
      fold: false, //侧边栏是否收起
    }
  },
})

export default useLayOutSettingStore
