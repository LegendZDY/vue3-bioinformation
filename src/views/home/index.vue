<template>
  <div>
    <h1>我是一级路由展示登录成功以后的页面 {{ userStore.username }}</h1>
  </div>
</template>

<script setup lang="ts">
//引入组合式 API函数生命周期
import { onMounted } from 'vue'
import useUserStore from '@/store/modules/user'

const userStore = useUserStore()

// 页面加载完成后执行
onMounted(() => {
  console.log('页面加载完成')
  // 获取用户信息
  userStore.userInfo()
})
</script>

<style scoped lang="scss"></style>
