<template>
  <div class="barrage-item start ordinaryOperate"  :class="[options ? options.className : '' , isPause ? 'pausedAnimation' : '']" ref="item" :style="bindStyle"
    @click="handleClickBarrage(item.url)" @animationend='destroyBarrageItem(item)'
    >
    <!-- <icon :options="options.children" v-if="options.children"></icon> -->
    <VueSvg v-if="isMyBarrage"/>
    {{ item.content }}
  </div>
</template>

<script>
import icon from './icon.vue'
import VueSvg from './VueSvg.vue'
import { BarrageType } from '../constant'
export default {
  components: { icon ,VueSvg },
  props: {
    item: {
      type: Object,
      default: () => { }
    },
    options: {
      type: Object,
      default: () => ({})
    },
  },
  
  data() {
    return {
      isPause : false
    }
  },
  mounted() {
    this.$emit('save' ,this.$refs.item.clientWidth || 0)
  },
  methods: {
    destroyBarrageItem(item) {
      this.$emit('destory', item)
    },
    handleClickBarrage(href) {
      this.isPause = !this.isPause
    },

  },
  computed: {
    isMyBarrage () {
      return this.item.type === BarrageType.MYBARRAGE
    },
    bindBraageItemStyle() {
      const { delay, top, color , args} = this.item
      return {
        '--runTime': delay,
        '--offsetWidth' : `-${args.offsetWidth}`,
        top,
        color,
      }
    },
    bindStyle() {
      return {
        ...this.bindBraageItemStyle,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.barrage-item {
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  height: 0.26rem;
  white-space: nowrap;
  line-height: 0.26rem;
  border-radius: 0.17rem;
  padding: 0 0.1rem;
  box-sizing: border-box;
  margin-top: 0.12rem;
  font-size: 0.12rem;
  color: #fff;
  letter-spacing: 0;
  font-weight: 400;
  animation: BraageRunningAnimation var(--runTime) linear;
}
.pausedAnimation{
  animation-play-state: paused !important;
}
// 普通运营样式
.ordinaryOperate {
  background-image: linear-gradient(95deg, rgba(48, 108, 255, .2) 0%, rgba(165, 207, 255, .2) 100%);
}

.start {
  transform: translateX(110%)
}

@keyframes BraageRunningAnimation {
  0% {
    transform: translateX(110%)
  }

  100% {
    transform: translateX(var(--offsetWidth))
  }

}
</style>