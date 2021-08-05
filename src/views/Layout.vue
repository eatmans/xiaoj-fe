<template>
  <div class="em-con">
    <top></top>
    <router-view></router-view>
  </div>
</template>

<script>
// import Index from './Index.vue'
import top from './top'
export default {
  name: "Layout",
  components: {
    // Index
    top
  },
  data() {
      return {
        value1: true,
        value2: true
      }
    }

};
</script>
