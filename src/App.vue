<template>
  <Layout></Layout>
</template>

<script lang="ts" setup>
import Layout from '@/layout/index.vue'

import { useFFmpeg } from '@/hooks/useFFmpeg'
const { load } = useFFmpeg()

onMounted(() => {
  load()
})
</script>
