<!-- 首页 -->
<template>
  <div class="em-con">
    <div class="em-slogo">
      <p class="em-slogo-p">灵魂的思考<br />从未脱离记忆的图像</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
  data() {
    return {
      bgurl:
        "https://img.zcool.cn/community/011e3461097e1311013f47208b5baf.jpg@1280w_1l_2o_100sh.jpg",
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang='less' scoped>
.em-slogo {
  font-family: TaikoMagicGB;
}

.em-slogo-p {
  color: #e40017;
  font-size: 80px;
  // background-color: #fff;
}
</style>
