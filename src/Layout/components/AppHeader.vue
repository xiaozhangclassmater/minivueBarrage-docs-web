<template>
  <div class="top-stage">
    <header-left @clickIcon="iconClickHandle" />
    <header-right @clickIcon="iconClickHandle" />
    <Logo :themeTypeIsDark="themeTypeIsDark" />
  </div>
</template>
<script>
import { docsUrlType, svgNameType } from "@/constant";
import HeaderLeft from "./HeaderLeft.vue";
import HeaderRight from "./HeaderRight.vue";
import Logo from "./Logo.vue";
export default {
  name: "HomeHeader",
  components: { Logo, HeaderRight, HeaderLeft },
  data() {
    return {
      svgNameType,
      docsUrlType,
      themeTypeIsDark: false
    };
  },
  methods: {
    iconClickHandle({ url, type }) {
      console.log("", url, type);
      if (!url) return;
      window.location.href = url;
    }
  }
};
</script>

<style lang='scss' scoped>
.top-stage {
  position: relative;
  user-select: none;
  height: 300px;
}
</style>