<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <Breadcrumb />
    </div>

    <div class="tabbar-right">
      <Setting />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>

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
