<template>
  <el-dropdown @command="changeLanguage">
    <div class="menus-item">
      <svg-icon icon-class="lang" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh">中文(zh)</el-dropdown-item>
      <el-dropdown-item command="en">英文(en)</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: "LangSelector",
  components: {},
  data() {
    return {};
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang; // 设置给本地的i18n插件
      // this.$message.success("切换成功");
    }
  }
};
</script>

<style lang='scss' scoped>
.menus-item {
  margin: 0 6px;
  cursor: $pointer;
  .svg-icon {
    width: 25px;
    height: 25px;
    @include theme-color {
      color: getVar("color");
    }
  }
}
</style>