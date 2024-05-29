<template>
  <div>
    <h1>我是一级路由展示登录成功以后的页面 {{ userStore.username }}</h1>
    <div ref="htmlContainer"></div>
  </div>
</template>

<script setup lang="ts">
//引入组合式 API函数生命周期
import { ref, onMounted } from 'vue'
import useUserStore from '@/store/modules/user'
import htmlContent from '@/components/HtmlContent/index.vue'

const userStore = useUserStore()
const htmlContainer = ref("")

// 页面加载完成后执行
onMounted(() => {
  console.log('页面加载完成')
  // 获取用户信息
  userStore.userInfo()
  htmlContainer.value.innerHTML = htmlContent
})
</script>

<style scoped lang="scss"></style>
