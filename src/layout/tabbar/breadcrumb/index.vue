<template>
  <!-- left content -->
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item>权限管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref } from 'vue'
//定义一个响应式数据控制图标的显示
const fold = ref(false)
//点击图标的方法
const changeIcon = () => {
  fold.value = !fold.value
}
</script>

<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>

<style scoped lang="scss"></style>
