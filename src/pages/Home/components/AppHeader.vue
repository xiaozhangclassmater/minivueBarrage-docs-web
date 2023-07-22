<template>
  <div class="top-stage">
    <div class="github-shan">
      <svg-icon icon-class="github" />
    </div>
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
            @click="iconClickHande(item.url)"
          >
            <svg-icon :icon-class="item.svgName" />
          </div>
        </div>
      </div>
    </div>
    <div class="logo" :class="{'logoThrob' : !themeTypeIsDark}">
      <img src="@/assets/logo.png" alt />
    </div>
    <div class="title">MiniVueBarrage</div>
    <div class="desc">一个适用于vue框架的弹幕组件</div>
  </div>
</template>
<script>
import { attributeType, themeType, svgNameType } from "@/constant";
import { setAttribute, getAttribute } from "@/utils";
export default {
  name: "HomeHeader",
  components: {},
  data() {
    return {
      menus: [
        {
          id: 1,
          url: "https://github.com/xiaozhangStuden",
          svgName: svgNameType.GITHUBLOGO
        },
        {
          id: 2,
          url: "https://juejin.cn/user/1922381414934589",
          svgName: svgNameType.JUEJIN
        },
        {
          id: 3,
          url: "",
          svgName: svgNameType.LANG
        }
      ],
      svgNameType,
      themeTypeIsDark: false
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
      this.themeTypeIsDark = !this.themeTypeIsDark;
    },
    iconClickHande(url) {
      if (!url) return;
      window.location.href = url;
    }
  },
  computed: {
    themeSvgClassName() {
      return this.themeTypeIsDark ? themeType.LIGHT : themeType.DARK;
    },
    transformSvg() {
      return this.themeTypeIsDark
        ? { transform: `translateX(100%)` }
        : { transform: `translateX(0%)` };
    }
  }
};
</script>

<style lang='scss' scoped>
.top-stage {
  position: relative;
  user-select: none;
  height: 300px;
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
  .logo {
    margin: 0 auto;
    width: 150px;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .logoThrob {
    animation: logoAnimation 0.5s linear;
  }
  .title,
  .desc {
    display: flex;
    justify-content: center;
    @include theme-color {
      color: getVar("color");
    }
  }
  .title {
    font-size: 30px;
    margin-bottom: 5px;
  }
  .desc {
    font-size: $baseFz;
  }

  @keyframes logoAnimation {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-30px);
    }
    75% {
      transform: translateY(30px);
    }
    100% {
      transform: translateY(0px);
    }
  }
}
</style>