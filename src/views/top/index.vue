<template>
  <div class="em-con">
    <el-menu
      :default-active="activeIndex"
      class="em-menu"
      mode="horizontal"
      @select="handleSelect"
      :router="router"
    >
      <el-menu-item index="1" route="/index"> 首页 </el-menu-item>
      <el-menu-item index="2" route="/blog"> 记录本 </el-menu-item>
      <el-menu-item index="3" route="/tools"> 工具箱 </el-menu-item>
      <el-menu-item index="4" route="nav"> 导航 </el-menu-item>
      <el-menu-item index="5" route="/editer"> 编辑器 </el-menu-item>
      <!-- <el-menu-item index="5" route="/about"> 关于 </el-menu-item> -->
      <!-- <el-menu-item index="6" route="/user"> 账号 </el-menu-item> -->
      <div class="em-search">
        <el-input
          class="em-search-input"
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input"
        >
        </el-input>
      </div>
      <el-menu-item index="7" route="/login"> 登录 </el-menu-item>
    </el-menu>
    <!-- <TopSearch></TopSearch> -->
  </div>
</template>

<script>
// import TopSearch from "./top-search";
export default {
  name: "",
  components: {
    // TopSearch,
  },
  data() {
    return {
      activeIndex: "1",
      input: "",
      router: true,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang='less' scoped>
//@import url();
.em-con {
  display: flex;
  justify-content: center;
  align-content: center;
  // background-color: #f8f9;
  width: 100%;
}

.em-menu {
  // background-color: #fdbe34;
  color: #f2f7ff;
  padding: auto;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
}
.em-search {
  width: 200px;
}

.em-search-input {
  width: 200px;
}
</style>