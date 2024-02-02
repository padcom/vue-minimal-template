<template>
  <HelloWorld v-model="message" />
  <p class="note">Now, delete me and get to work!</p>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const message = ref('(click to change)')

watch(message, value => { console.log('Changed to', value) })
</script>

<style lang="postcss" scoped>
.note {
  margin-top: 2.5rem;
}
</style>
