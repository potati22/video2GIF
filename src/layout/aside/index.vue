<template>
  <div class="menu">
    <div
      v-for="item in menu"
      :key="item.id"
      :class="['menu-item', { chosen: chosen === item.path }]"
      @click="to(item.path)"
    >
      <HSvgIcon :icon-class="item.icon" />
      <span>{{ item.title }}</span>
    </div>
  </div>
  <div class="placeholder"></div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const chosen = ref('')

watch(
  () => route.path,
  (path) => {
    chosen.value = path
  },
)

const menu = [
  {
    id: 1,
    icon: 'record',
    title: '录制',
    path: '/record',
  },
  {
    id: 2,
    icon: 'cut',
    title: '裁剪',
    path: '/cut',
  },
  {
    id: 3,
    icon: 'download',
    title: '保存',
    path: '/download',
  },
]

function to(path: string) {
  router.replace(path)
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: column;
}
.menu-item {
  width: 69px;
  height: 70px;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid var(--el-border-color);
  cursor: pointer;
  span {
    margin-top: 5px;
  }
}
.chosen {
  background-color: var(--el-bg-color);
  color: var(--my-color);
  border-color: var(--el-bg-color);
}
.placeholder {
  flex: 1;
  border-right: 1px solid var(--el-border-color);
}
</style>
