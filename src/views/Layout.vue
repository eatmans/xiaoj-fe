<template>
  <div class="em-con">
    <el-container :direction="horizontal">
      <el-header height="">
        <top></top>
      </el-header>
      <el-container :direction="horizontal">
        <el-container :direction="vertical">
          <el-main height="">
          <router-view></router-view>
          </el-main>
          <el-footer height="">
            <!-- Footer content -->
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
    
  </div>
</template>

<script>
// import Index from './Index.vue'
import top from "./top";
export default {
  name: "Layout",
  components: {
    // Index
    top,
  },
  data() {
    return {
      value1: true,
      value2: true,
    };
  },
};
</script>
<style lang="less" scoped>
.em-con {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background: rgb(92, 21, 185);
  width: 100%;
}
.em-main {
  display: flex;
  flex-direction: column;
  background: rgb(247, 247, 247);
  // width: 80%;
}
</style>