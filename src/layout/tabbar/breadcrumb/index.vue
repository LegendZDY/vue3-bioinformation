<template>
  <!-- left content -->
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="LayOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight">
    <!-- 面包屑动态展示路由名字 -->
    <el-breadcrumb-item
      v-for="(item, index) in route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="{ path: item.path }"
    >
      <!-- 图标 -->
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>

      <!-- 面包展示匹配到的路由名字 -->
      <span style="margin: 0px 2px">{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
//定义一个响应式数据控制图标的显示
// const fold = ref(false)
//改为使用pina的仓库实现祖孙组件通信
import useLayOutSettingStore from '@/store/modules/setting'
const LayOutSettingStore = useLayOutSettingStore()
//点击图标的方法
const changeIcon = () => {
  LayOutSettingStore.fold = !LayOutSettingStore.fold
}

import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>

<style scoped lang="scss"></style>
