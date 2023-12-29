<template>
  <button class="h-button">
    <slot></slot>
  </button>
</template>

<style lang="scss">
.h-button {
  border: none;
  border-radius: 4px;
  background-color: var(--h-btn-bg-color);
  color: var(--h-btn-color);
  cursor: pointer;
}
.h-button:hover {
  background-color: var(--h-btn-bg-color-hover);
}
</style>
