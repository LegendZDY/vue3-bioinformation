<template>
  <div>
    <!-- 使用 v-html 指令将 HTML 文件内容插入到组件中 -->
    <div v-html="htmlContent"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios  from 'axios';

const htmlContent = ref(''); // 存储 HTML 文件的内容

onMounted(() => {
  // 在组件挂载后，使用 AJAX 或其他方式加载 HTML 文件的内容
  loadHTMLFile();
});

function loadHTMLFile() {
  // 使用 AJAX 或其他方式加载 HTML 文件的内容
  // 并将内容赋值给 htmlContent
  // 例如，使用 axios 发送 AJAX 请求：
  axios.get('@/assets/_book/index.html')
    .then(response => {
      htmlContent.value = response.data;
    })
    .catch(error => {
      console.error('加载 HTML 文件失败：', error);
    });
}

</script>
