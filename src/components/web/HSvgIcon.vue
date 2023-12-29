<template>
  <svg class="svg-icon">
    <!--use元素在 SVG 文档内取得目标节点，并在别的地方复制它们-->
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  iconClass: {
    type: String,
    require: true,
    default: () => {
      return ''
    },
  },
})
const iconName = computed(() => {
  return `#icon-${props.iconClass}`
})
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
