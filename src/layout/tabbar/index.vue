<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <!-- left content -->
      <el-icon style="margin-right: 10px"><Expand /></el-icon>
      <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="tabbar-right">
      <el-button size="small" icon="Refresh" circle></el-button>
      <el-button size="small" icon="FullScreen" circle></el-button>
      <el-button size="small" icon="Setting" circle></el-button>
      <img src="/logo.png" style="width: 24px; height: 24px; margin: 0 10px" />
      <!-- 退出登录的下拉菜单 -->
      <el-dropdown>
        <span class="el-dropdown-link">
          admin
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(
    to right,
    #e6d3d3,
    rgb(187, 156, 156),
    #b98b8b
  );
  .tabbar-left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .tabbar-right {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
}
</style>
