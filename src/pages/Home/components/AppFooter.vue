<template>
  <div class="AppFooter">
    <div class="Licensed">
      MIT Licensed | Copyright @ 2023 xiaozhangStuden (
      <a
        :href="docsUrlType.GITHUBHOMEURL"
        class="homePage"
      >Homepage</a>)
    </div>
  </div>
</template>

<script>
import { docsUrlType } from "@/constant/index";
export default {
  name: "AppFooter",
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
.AppFooter {
  .Licensed {
    width: 60%;
    text-align: center;
    margin: 0 auto;

    padding: 30px 0px;
    @include theme-color {
      color: getVar("color");
      border-top: 1px solid getVar("borderColor");
    }
    .homePage {
      @include theme-color {
        background: getVar("customColor");
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}
</style>