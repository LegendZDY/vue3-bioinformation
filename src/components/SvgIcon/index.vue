<template>
  <!-- 引入svg -->
  <!-- svg:图标外层容器节点，内部需要与use标签配合使用 -->
  <svg style="width: 30px; height: 30px">
    <use xlink:href="prefix + name"></use>
  </svg>
</template>

<script lang="ts" setup>
//接受父组件传递的name参数
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: {
    type: String,
    default: 'phone',
  },
})
</script>
