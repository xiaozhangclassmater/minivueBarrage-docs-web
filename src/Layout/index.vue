<template>
  <div class="Home">
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
// import Data from "/Mock";
export default {
  name: "index",
  components: { AppHeader, AppFooter },
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