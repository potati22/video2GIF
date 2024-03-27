<template>
  <div v-show="!editoring" class="row">
    <PotButton class="btn start">开始编辑</PotButton>
  </div>
</template>

<script lang="ts" setup>
const editoring = ref(false)
</script>

<style lang="scss" scoped>
.row {
  width: 250px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.btn {
  height: 36px;
}
.start {
  width: 250px;
}
.apply {
  width: 120px;
}
.cancel {
  width: 120px;
  margin-right: 10px;
}
.reset {
  width: 250px;
}
</style>
