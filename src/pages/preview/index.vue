<template>
  <div class="preview">
    <miniVueBarrage
      class="barrage-wapper"
      :barrages="barrages"
      isBatchDestory
      fullScreen
      ref="barrage"
    />
    <div class="operation">
      <el-form ref="form" label-width="80px">
        <el-form-item label="弹幕内容" size="small">
          <el-input v-model="value"></el-input>
        </el-form-item>
      </el-form>
      <div class="button-group">
        <el-button type="primary" @click="add">添加弹幕</el-button>

        <el-button type="warning" @click="reset">重置弹幕</el-button>

        <el-button type="info" @click="pause">暂停弹幕</el-button>

        <el-button type="danger" @click="close">关闭弹幕</el-button>

        <el-button type="success" @click="paly">开启弹幕</el-button>
      </div>
      <div class="block">
        <el-color-picker v-model="color"></el-color-picker>
        <el-button @click="changeColor">更改颜色</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { miniVueBarrage } from "minivuebarrage";
import "minivuebarrage/lib/mini-vue-barrage.css";
import data from "../../../Mock";
export default {
  name: "preview",
  components: { miniVueBarrage },
  data() {
    return {
      value: "",
      color: "#000",
      barrages: data.list
    };
  },
  methods: {
    add(e) {
      if (!this.value.trim()) return;
      this.$refs.barrage.add({
        content: this.value
      });
      this.value = "";
    },
    reset() {
      this.$refs.barrage.reset();
    },
    pause() {
      this.$refs.barrage.pause();
    },
    close() {
      this.$refs.barrage.close();
    },
    paly() {
      this.$refs.barrage.play();
    },
    changeColor() {
      this.$refs.barrage.changeColor(this.color);
    }
  }
};
</script>

<style lang='scss' scoped>
.preview {
  .barrage-wapper {
    width: 90vw;
  }
  .operation {
    width: 30%;
    margin: 0 auto;
    margin-top: 30px;
    .button-group {
      margin: 10px 0;
    }
    .block {
      display: flex;
      align-items: center;
    }
  }
}
</style>