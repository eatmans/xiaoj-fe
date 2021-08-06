<!-- 编辑页 -->
<template>
  <div class="em-con">
    <MarkdownPro v-model="mdbook" />
  </div>
</template>

<script>
import { MarkdownPro } from "vue-meditor";
export default {
  name: "",
  components: {
    MarkdownPro,
  },
  data() {
    return {
      mdbook: "# Hello XiaoJ",
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
</style>
