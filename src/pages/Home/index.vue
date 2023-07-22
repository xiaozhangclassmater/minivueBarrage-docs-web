<template>
  <div class="Home">
    <AppHeader />
    <AppContent />
    <AppFooter />
    <!-- <miniVueBarrage class="barrages-ctn" fullScreen :barrages="barrages" /> -->
  </div>
</template>

<script>
import AppContent from "./components/AppContent.vue";
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
// import Data from "/Mock";
export default {
  name: "index",
  components: { AppHeader, AppContent, AppFooter },
  data() {
    return {
      // barrages: Data.list
    };
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