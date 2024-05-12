<template>
  <div class="login_container">
    <el-form>
      <el-row>
        <el-col :span="12" :xs="0">占位的位置</el-col>
        <el-col :span="12" :xs="24">
          <el-form class="login_form">
            <h1>Hello</h1>
            <h2>欢迎登录</h2>
            <el-form-item>
              <el-input :prefix-icon="User" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="login_btn" type="primary" size="default" @click="Login">登录</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
//收集账号与密码的数据
import { reactive } from 'vue';
let loginForm = reactive({
  username: 'admin',
  password: '111111'
});
//登录按钮回调
const Login = () => {
  //点击登录按钮后要干什么
  //1. 通知仓库发登录请求
}


</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
    h1{
        font-size: 40px;
        color: #fff;
    };
    h2{
        font-size: 20px;
        color: #fff;
        margin: 20px 0px;
    }
    .login_btn{
        width: 100%;
    }
  }
}
</style>
