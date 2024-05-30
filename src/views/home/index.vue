<template>
  <div class="home-container">
    <iframe src="_book/index.html" ref="iframe" width="50%" height="100px"></iframe>
  </div>
</template>

<script setup lang="ts">
//引入组合式 API函数生命周期
import { ref, onMounted } from 'vue'
import useUserStore from '@/store/modules/user'

const userStore = useUserStore()
const htmlContainer = ref('')

// 页面加载完成后执行
onMounted(() => {
  console.log('页面加载完成')
  // 获取用户信息
  userStore.userInfo()
})
</script>

<style scoped lang="scss">
.home-container {
  height: 100px;
  width: 100%;
}
</style>
