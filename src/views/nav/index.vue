<!-- 导航页 -->
<template>
  <div class="em-con">
    <div class="em-nav-item">
      <el-card class="em-card" shadow="hover" :body-style="{ padding: '20px' }">
        <div class="em-nav-box">
          <el-image
            class="em-logo-icon"
            src="https://f.start.me/www.google.com"
            fit="fill"
          ></el-image>
          <div class="em-nav-content">
            <span>Google</span>
            <span class="em-nav-miaoshu"></span>
          </div>
        </div>
      </el-card>
    </div>

    <div class="em-nav-item">
      <el-card class="em-card" shadow="hover" :body-style="{ padding: '20px' }">
        <div class="em-nav-box">
          <el-image
            class="em-logo-icon"
            src="https://f.start.me/www.google.com"
            fit="fill"
          ></el-image>
          <div class="em-nav-content">
            <span>Google</span>
            <span class="em-nav-miaoshu"></span>
          </div>
        </div>
      </el-card>
    </div>

    <div class="em-nav-item">
      <el-card class="em-card" shadow="hover" :body-style="{ padding: '20px' }">
        <div class="em-nav-box">
          <el-image
            class="em-logo-icon"
            src="https://f.start.me/www.google.com"
            fit="fill"
          ></el-image>
          <div class="em-nav-content">
            <span>Google</span>
            <span class="em-nav-miaoshu"></span>
          </div>
        </div>
      </el-card>
    </div>

    <div class="em-nav-item">
      <el-card class="em-card" shadow="hover" :body-style="{ padding: '20px' }">
        <div class="em-nav-box">
          <el-image
            class="em-logo-icon"
            src="https://f.start.me/www.google.com"
            fit="fill"
          ></el-image>
          <div class="em-nav-content">
            <span>Google</span>
            <span class="em-nav-miaoshu"></span>
          </div>
        </div>
      </el-card>
    </div>

    <div class="em-nav-item">
      <el-card class="em-card" shadow="hover" :body-style="{ padding: '20px' }">
        <div class="em-nav-box">
          <el-image
            class="em-logo-icon"
            src="https://f.start.me/www.google.com"
            fit="fill"
          ></el-image>
          <div class="em-nav-content">
            <span>Google</span>
            <span class="em-nav-miaoshu"></span>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang='less' scoped>
.em-con {
  // background: url(../../assets/bg.jpg);
  display: flex;
  flex-direction: row;
}
.em-nav-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.em-nav-item {
  display: inline-block;
}
.em-card {
  margin: 20px;
}
.em-logo-icon {
  width: 25px;
  height: 25px;
  padding: 10px;
}

.em-nav-content {
  display: flex;
  flex-direction: column;
}
.em-background {
  width: 100%;
  z-index: 2;
}

.em-nav-miaoshu {
  color: #686868;
}
</style>
