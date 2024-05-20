<template>
  <div>
    <!-- 路由组件出口的位置 -->
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <!-- 根据路由组件渲染不同的组件 -->
        <component :is="Component" v-if="!flag" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
//拿到仓库中关于刷新的状态
import useLayOutSettingStore from '@/store/modules/setting'
const layOutSettingStore = useLayOutSettingStore()

//控制当前组件是否销毁重建
import { ref, watch, nextTick } from 'vue'
const flag = ref(false)

//监听仓库内部的数据变化，如果变化则刷新页面
watch(() => layOutSettingStore.refresh, () => {
  //刷新页面
  flag.value =!flag.value
  nextTick(() => {
    flag.value =!flag.value
  })
})

</script>

<script lang="ts">
export default {
  name: 'Main',
}
</script>

<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s;
}
.fade-enter-to {
  opacity: 1;
}
</style>
