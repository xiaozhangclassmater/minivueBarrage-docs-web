<template>
  <div class="Home">
    <AppContent />
  </div>
</template>

<script>
import AppContent from "./components/AppContent.vue";
// import Data from "/Mock";
export default {
  name: "index",
  components: { AppContent },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.barrages-ctn {
  width: 800px;
  height: 500px;
  margin-bottom: 35px;
  background-color: aquamarine;
}
</style>