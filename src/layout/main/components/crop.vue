<template>
  <div class="crop-box">
    <div class="scale-point tl"></div>
    <div class="scale-point tm"></div>
    <div class="scale-point tr"></div>
    <div class="scale-point cl"></div>
    <div class="scale-point cr"></div>
    <div class="scale-point bl"></div>
    <div class="scale-point bm"></div>
    <div class="scale-point br"></div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  cropTop: {
    type: Number,
    default: 0,
  },
  cropLeft: {
    type: Number,
    default: 0,
  },
})
</script>

<style lang="scss" scoped>
.crop-box {
  box-sizing: content-box;
  border: 1px solid var(--my-color);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(1, 1, 1, 0.8);
  clip-path: polygon(20px 20px, 100px 20px, 100px 100px, 20px 100px);
}

.scale-point {
  position: absolute;
  width: 8px;
  height: 8px;
  border: 1px solid var(--my-color);
  transform: translate(-50%, -50%);
}
.tl,
.tm,
.tr {
  top: 20px;
}
.cl,
.cr {
  top: 50%;
}
.bl,
.bm,
.br {
  top: 100%;
}
.tl,
.cl,
.bl {
  left: 0px;
}
.tm,
.bm {
  left: 50%;
}
.tr,
.cr,
.br {
  left: 100%;
}
</style>
