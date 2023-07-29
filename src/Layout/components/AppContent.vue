<template>
  <div class="AppContent">
    <div class="content">
      <h1 class="title content-Title">{{$t('Home.pluginDescTitle')}}</h1>
      <div class="button-group">
        <a target="_blank" @click="quickStart">{{$t('Home.quickStartBtn')}}</a>
        <a target="_blank" @click="lookDocument" class="fan">{{$t('Home.viewDocumentBtn')}}</a>
      </div>
      <div class="desc-container">
        <div class="desc-item">
          <h2>{{$t('Home.AdvantageOneTitle')}}</h2>
          <p>{{$t('Home.AdvantageOnecontent')}}</p>
        </div>
        <div class="desc-item">
          <h2>{{$t('Home.AdvantageTwoTitle')}}</h2>
          <p>{{$t('Home.AdvantageTwoContent')}}</p>
        </div>
        <div class="desc-item">
          <h2>{{$t('Home.AdvantageThreeTitle')}}</h2>
          <p>{{$t('Home.AdvantageThreeContent')}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { docsUrlType } from "../../../constant";
export default {
  name: "AppContent",
  components: {},
  data() {
    return {};
  },
  methods: {
    quickStart() {
      window.location.href = docsUrlType.GITHUB;
    },
    lookDocument() {
      window.location.href = docsUrlType.PRESS_DOCS;
    }
  }
};
</script>

<style lang='scss' scoped>
.AppContent {
  @include theme-color {
    color: getVar("color");
  }
  overflow: hidden;
  .content {
    margin-top: 40px;
    text-align: center;
    padding-bottom: 40px;
    /* font-size: ; */
    .title {
      font-size: 30px;
      @include theme-color {
        background: getVar("customColor");
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .button-group {
      a {
        position: relative;
        height: 50px;
        border-radius: 50px;
        width: auto;
        margin: 1em 0;
        letter-spacing: 0.1em;
        min-width: 8em;
        text-align: center;
        margin-right: 1em;
        display: inline-block;
        font-size: 1.2em;
        line-height: 2.7em;
        font-weight: 100;
        padding: 0 15px;
        box-sizing: border-box;
        @include theme-color {
          border: 1px solid getVar("borderColor");
        }
        cursor: $pointer;
        text-decoration: none;
        &:first-child {
          transition: border 0.8s;
          @include theme-color {
            color: $white;
            background: getVar("bgColor");
            border: 1px solid getVar("borderColor");
          }
        }
      }
    }
    .desc-container {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
      justify-content: space-evenly;
      width: 60%;
      margin: 0 auto;
      margin-top: 100px;
      padding-top: 15px;
      @include theme-color {
        /* border-top: 1px solid getVar("borderColor"); */
      }
      .desc-item {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        padding: 5px 10px;
        h2 {
          font-weight: normal;
          @include theme-color {
            background: getVar("customColor");
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
        p {
          /* color: $textcolor; */
        }
      }
    }
  }
}
</style>