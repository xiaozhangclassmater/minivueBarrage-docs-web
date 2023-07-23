<template>
  <div class="header-left">
    <div class="github-shan" @click="$emit('clickIcon' , {url : docsUrlType.GITHUBHOMEURL})">
      <svg-icon icon-class="github" />
    </div>
  </div>
</template>

<script>
import { docsUrlType } from "@/constant";
export default {
  name: "HeaderLeft",
  components: {},
  data() {
    return {
      docsUrlType
    };
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.header-left {
  .github-shan {
    position: absolute;
    left: 0;
    top: -1px;
    cursor: $pointer;
    transform: rotate(-90deg);
    .svg-icon {
      width: 100px;
      height: 100px;
      @include theme-color {
        color: getVar("githubLeftColor");
        fill: getVar("color");
        @include transitions(all, 0.5s);
      }
    }
  }
}
</style>