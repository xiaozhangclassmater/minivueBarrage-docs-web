<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Barrage :barrages="barrages" isBatchDestory fullScreen ref="barrage"></Barrage>
    <div class="operation">
      <input type="text" v-model="value" @keyup.enter="add()"><br>
      <button @click="add">添加弹幕</button><br>
      <button @click="reset" >重置弹幕</button><br>
      <button @click="pause">暂停弹幕</button><br>
      <button @click="close">关闭弹幕</button><br>
      <button @click="paly">开启弹幕</button><br>
      <div>
        <input type="color" name="" id="" v-model="color" >
        <button @click="changeColor">切换颜色</button>
      </div>
    </div>-->
  </div>
</template>
<script>
// import Barrage from "./components/barrage/index.vue";
// import data from "../Mock/Index.js";
export default {
  components: {
    // Barrage
  },
  data() {
    return {
      // value: "",
      // color: "#000",
      // barrages: data.list
    };
  },
  mounted() {},
  methods: {
    // add(e) {
    //   if (!this.value.trim()) return;
    //   this.$refs.barrage.add({
    //     content: this.value
    //   });
    //   this.value = "";
    // },
    // reset() {
    //   this.$refs.barrage.reset();
    // },
    // pause() {
    //   this.$refs.barrage.pause();
    // },
    // close() {
    //   this.$refs.barrage.close();
    // },
    // paly() {
    //   this.$refs.barrage.play();
    // },
    // changeColor() {
    //   this.$refs.barrage.changeColor(this.color);
    // }
  }
};
</script>
<style lang="scss">
html,
body,
#app,
.top-stage {
  width: 100%;
  height: 100%;
  margin: 0;
  position: relative;
}
</style>
