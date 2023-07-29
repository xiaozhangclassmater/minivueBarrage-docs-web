<template>
  <div class="header-right">
    <div class="header">
      <div class="container">
        <div class="center"></div>
        <div class="menus">
          <div class="change-theme" @click="changeTheme">
            <span class="span-box" :style="transformSvg">
              <svg-icon :icon-class="themeSvgClassName" />
            </span>
          </div>
          <div
            class="menus-item"
            v-for="item in menus"
            :key="item.id"
            @click="$emit('clickIcon' , { url : item.url , type : item.type})"
          >
            <svg-icon :icon-class="item.svgName" />
          </div>
          <lang-selector />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LangSelector from "@/components/LangSelector/index.vue";
import { attributeType, docsUrlType, svgNameType, themeType } from "@/constant";
import { getAttribute, setAttribute } from "@/utils";
export default {
  name: "HeaderRight",
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  components: {
    LangSelector
  },
  data() {
    return {
      menus: [
        {
          id: 1,
          type: "github",
          url: docsUrlType.GITHUBHOMEURL,
          svgName: svgNameType.GITHUBLOGO
        },
        {
          id: 2,
          type: "juejin",
          url: docsUrlType.JUEJINHOMEURL,
          svgName: svgNameType.JUEJIN
        }
      ],
      docsUrlType
    };
  },
  methods: {
    changeTheme() {
      const currentTheme = getAttribute("html", attributeType.DATA_THEME);
      if (currentTheme === themeType.DARK) {
        setAttribute("html", attributeType.DATA_THEME, themeType.LIGHT);
      } else {
        setAttribute("html", attributeType.DATA_THEME, themeType.DARK);
      }
      this.$emit("input", !this.value);
    }
  },
  computed: {
    themeSvgClassName() {
      return this.value ? themeType.LIGHT : themeType.DARK;
    },
    transformSvg() {
      return this.value
        ? { transform: `translateX(100%)` }
        : { transform: `translateX(0%)` };
    }
  }
};
</script>

<style lang='scss' scoped>
.header-right {
  .header {
    display: flex;
    align-items: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 32px;
    height: 55px;
    .container {
      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      .center {
        flex: 1;
      }
      .menus {
        display: flex;
        align-items: center;
        height: 100%;
        .change-theme {
          display: flex;
          align-items: center;
          width: 40px;
          height: 22px;
          border-radius: 15px;
          box-sizing: $box;
          cursor: $pointer;
          @include theme-color {
            background-color: getVar("btnBgColor");
            border: 1px solid getVar("borderColor");
          }
          .span-box {
            display: flex;
            justify-content: center;
            width: 19px;
            height: 100%;
            padding: 3px;
            box-sizing: $box;
            border-radius: 20px;
            transition: transform 0.2s linear;
            @include theme-color {
              background-color: getVar("themeSvgBgColor");
            }
            .svg-icon {
              @include theme-color {
                color: getVar("themeSvgColor");
              }
            }
          }
        }
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
      }
    }
  }
}
</style>