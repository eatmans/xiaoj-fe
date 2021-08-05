<template>
  <div class="em-con">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="0">
        
        <router-link to="/index">首页</router-link>
        </el-menu-item>
      <el-menu-item index="1">
         <router-link to="/blog">记录本</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/tools">工具箱</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/nav">导航</router-link>
      </el-menu-item>

      <el-menu-item index="5">
        <router-link to="/about">关于</router-link>
      </el-menu-item>

      <el-menu-item index="6">
        <router-link to="/user"> 账号 </router-link>
      </el-menu-item>
      
      <el-menu-item index="7">
        <router-link to="/login"> 登录 </router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      activeIndex: 1,
    };
  },
};
</script>

<style>
</style>