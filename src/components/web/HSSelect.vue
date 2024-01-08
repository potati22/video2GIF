<template>
  <div class="h-s-select">
    <div
      v-for="item in data"
      :key="item.id"
      :class="['item', selected === item.id ? 'selected' : '']"
      @click="pick(item.id)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'

interface iSSelectData {
  id: number
  name: string
}

defineProps({
  data: {
    type: Array as PropType<iSSelectData[]>,
    default: () => [],
  },
})

const emit = defineEmits(['select'])

const selected = ref()

function pick(id: number) {
  selected.value = id
  emit('select', id)
}
</script>

<style lang="scss">
.h-s-select {
  display: flex;
  align-items: center;
}

.item {
  width: 40px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  padding: 0 12px;
  margin: 5px;
  background-color: var(--h-btn-bg-color);
  color: var(--h-btn-color);
  border-radius: 4px;
  cursor: pointer;
}

.item:hover {
  background-color: var(--h-btn-bg-color-hover);
}

.selected {
  background-color: var(--h-inp-bg-color-focus);
  color: var(--h-inp-color);
}

.item:focus {
  background-color: var(--h-inp-bg-color-focus);
  color: var(--h-inp-color);
}
</style>
