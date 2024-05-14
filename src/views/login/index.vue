<template>
  <div class="login_container">
    <el-form>
      <el-row>
        <el-col :span="12" :xs="0">占位的位置</el-col>
        <el-col :span="12" :xs="24">
          <el-form
            class="login_form"
            :model="loginForm"
            :rules="rules"
            ref="loginForms"
          >
            <h1>Hello</h1>
            <h2>欢迎登录</h2>
            <el-form-item prop="username">
              <el-input
                :prefix-icon="User"
                v-model="loginForm.username"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                :prefix-icon="Lock"
                v-model="loginForm.password"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                :loading="loading"
                class="login_btn"
                type="primary"
                size="default"
                @click="Login"
              >
                登录
              </el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
//收集账号与密码的数据
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
//引用获取当前时间的函数
import { getTime } from '@/utils/time'
//引用用户相关的小仓库
import useUserStore from '@/store/modules/user'

let userStore = useUserStore()
//获取el-form组件
let loginForms = ref()
//获取路由器
let $router = useRouter()
//定义loading状态
const loading = ref(false)

//收集账号与密码的数据
let loginForm = reactive({
  username: 'admin',
  password: '111111',
})
//登录按钮回调
const Login = async () => {
  //获取表单验证结果
  await loginForms.value.validate()

  //设置loading状态
  loading.value = true
  //点击登录按钮后要干什么
  //1. 通知仓库发登录请求
  //2. 请求成功后跳转到主页
  //3. 请求失败后提示错误信息
  try {
    //保证登录成功
    await userStore.userLogin(loginForm)
    //跳转到主页
    $router.push('/')
    //提示成功信息
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `HI, ${getTime()}好`,
    })
    //设置loading状态
    loading.value = false
  } catch (error) {
    //登录失败
    loading.value = false
    //提示错误信息
    ElMessage.error(error.message)
  }
}

//自定义验证用户名的函数
const validateUsername = (rule, value, callback) => {
  //rule为校验规则，value为输入的值，callback为回调函数
  //用户名不能包含特殊字符
  const reg = /^[a-zA-Z0-9]+$/
  if (!reg.test(value)) {
    callback(new Error('用户名不能包含特殊字符'))
  } else {
    callback()
  }
}

const validatePassword = (rule, value, callback) => {
  //rule为校验规则，value为输入的值，callback为回调函数
  //用户名不能包含特殊字符
  const reg = /^[a-zA-Z0-9]+$/
  if (!reg.test(value)) {
    callback(new Error('用户名不能包含特殊字符'))
  } else {
    callback()
  }
}


//定义表单校验需要配置对象
const rules = {
  username: [
    // { required: true, message: '请输入用户名', trigger: 'blur' },
    // {
    //   min: 3,
    //   max: 10,
    //   message: '用户名长度在 3 到 10 个字符',
    //   trigger: 'blur',
    // },
    { trigger: 'change', validator: validateUsername },
  ],
  password: [
    // { required: true, message: '请输入密码', trigger: 'blur' },
    // { min: 6, max: 16, message: '密码长度在 6 到 16 个字符', trigger: 'blur' },
    { trigger: 'change', validator: validatePassword },
  ],
  
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
    h1 {
      font-size: 40px;
      color: #fff;
    }
    h2 {
      font-size: 20px;
      color: #fff;
      margin: 20px 0px;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
