<template>
  <el-button
    size="small"
    icon="Refresh"
    circle
    @click="updateRefresh"
  ></el-button>
  <el-button
    size="small"
    icon="FullScreen"
    circle
    @click="fullScreen"
  ></el-button>
  <el-button size="small" icon="Setting" circle></el-button>
  <img
    :src="userStore.avatar"
    style="width: 24px; height: 24px; margin: 0 10px; border-radius: 50%"
  />
  <!-- 退出登录的下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import useLayOutSettingStore from '@/store/modules/setting'
const layOutSettingStore = useLayOutSettingStore()
//刷新按钮点击回调函数
const updateRefresh = () => {
  layOutSettingStore.refresh = !layOutSettingStore.refresh
}
//获取用户相关的小仓库信息
import useUserStore from '@/store/modules/user'
const userStore = useUserStore()

//全屏按钮点击回调函数
const fullScreen = () => {
  //DOM对象一个属性：可以用来判断当前是否处于全屏状态，如果是，则返回true，否则返回null
  let full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

//退出登录的回调函数
const logout = () => {
  //第一件事：需要向后端发送请求，告诉后端我要退出登录
  //第二件事：清除本地的用户信息
  //第三件事：跳转到登录页面
  //第四件事：提示用户退出登录成功
  alert('退出登录成功')
}
</script>

<script lang="ts">
export default {
  name: 'Setting',
}
</script>

<style scoped lang="scss"></style>
