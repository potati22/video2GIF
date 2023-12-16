<template>
  <el-container class="common-box">
    <el-header class="header-box">
      <MyHeader />
    </el-header>
    <el-container>
      <el-aside class="aside-box">Aside</el-aside>
      <el-container>
        <el-main class="main-box">
          <MyMain />
        </el-main>
        <el-footer class="footer-box">Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import MyHeader from './header/index.vue'
import MyMain from './main/index.vue'
</script>

<style lang="scss" scoped>
.common-box {
  height: 100vh;
}
.header-box {
  border-bottom: 1px solid var(--el-border-color);
  height: 50px;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.aside-box {
  width: 70px;
  border-right: 1px solid var(--el-border-color);
}
.main-box {
  padding: 0;
}
.footer-box {
  border-top: 1px solid var(--el-border-color);
  height: 350px;
}
</style>
