<template>
  <el-container class="common-box">
    <el-header class="header-box">
      <MyHeader />
    </el-header>
    <el-container>
      <el-aside class="aside-box">
        <MyAside />
      </el-aside>
      <el-container class="right-box">
        <el-main class="main-box">
          <MyMain />
        </el-main>
        <el-footer
          class="footer-box"
          :style="{ '--heigth': footerHeight + 'px' }"
          ><MyFooter @change-footer-height="changeFooterHeight"
        /></el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import MyHeader from './header/index.vue'
import MyAside from './aside/index.vue'
import MyMain from './main/index.vue'
import MyFooter from './footer/index.vue'

const footerHeight = ref(250)

function changeFooterHeight(h: number) {
  footerHeight.value = h
}
</script>

<style lang="scss" scoped>
.el-container {
  background-color: var(--pot-bg-color-page);
}
.common-box {
  width: 100%;
  height: 100vh;
}
.header-box {
  border-bottom: 1px solid var(--pot-border-color);
  height: 50px;
  padding: 0;
  flex-direction: row;
  align-items: center;
}
.aside-box {
  width: 70px;
  display: flex;
  flex-direction: column;
}
.right-box {
  display: flex;
  flex-direction: column;
}
.main-box {
  padding: 0;
  flex-grow: 1;
}
.footer-box {
  position: relative;
  height: var(--heigth);
  min-height: 250px;
  padding: 0;
}
</style>
