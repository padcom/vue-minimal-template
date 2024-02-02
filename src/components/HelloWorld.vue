<template>
  <h1 @click="message = 'Changed!'">Hello, world! {{ message }}</h1>
</template>

<script lang="ts" setup>
import { defineModel } from 'vue'

const message = defineModel<string>({ type: String, default: 'from HelloWorld.vue' })
</script>

<style lang="postcss" scoped>
h1 {
  font-size: 1.875rem;
  line-height: 2.25rem;
  cursor: pointer;
}
</style>
