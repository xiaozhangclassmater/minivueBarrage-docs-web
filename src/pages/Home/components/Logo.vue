<template>
  <div class="Logo-ctn">
    <div class="logo" :class="{ 'logoThrob': !themeTypeIsDark }">
      <img src="@/assets/logo.png" alt />
    </div>
    <div class="title">MiniVueBarrage</div>
    <div class="desc">{{ $t('Home.pluginDesc') }}</div>
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    themeTypeIsDark: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.Logo-ctn {
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

  .title,.desc {
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
}</style>