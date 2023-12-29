<template>
  <input
    class="h-input"
    type="number"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>

<script lang="ts" setup>
defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
})
defineEmits(['update:modelValue'])
</script>

<style lang="scss">
.h-input {
  border: none;
  outline: none;
  background-color: var(--h-inp-bg-color);
  color: var(--h-inp-color);
  border: 1px solid var(--h-inp-border-color);
  border-radius: 4px;
  text-align: center;
}
.h-input:hover {
  background-color: var(--h-inp-bg-color-hover);
}
.h-input:focus {
  background-color: var(--h-inp-bg-color-focus);
  color: var(--h-inp-color-focus);
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
