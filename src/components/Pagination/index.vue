<template>
  <!-- 引入svg -->
  <!-- svg:图标外层容器节点，内部需要与use标签配合使用 -->
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
//接受父组件传递的name参数
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  color: {
    type: String,
    default: '#333',
  },
  width: {
    type: String,
    default: '30px',
  },
  height: {
    type: String,
    default: '30px',
  },
})
</script>
