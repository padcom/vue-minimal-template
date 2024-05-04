<template>
  <div class="hello-world">
    <h1>Hello, world! {{ message }}</h1>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  message: { type: String, default: 'from HelloWorld.vue' },
})
</script>

<style lang="postcss" scoped>
.hello-world {
  h1 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    background-color: lightgoldenrodyellow;
  }
}
</style>
