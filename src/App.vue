<template>
  <HelloWorld />
  <p class="note">{{ t('Now, delete me and get to work!') }}</p>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import HelloWorld from './components/HelloWorld.vue'

const { t } = useI18n()
</script>

<style lang="postcss" scoped>
.note {
  margin-top: 2.5rem;
}
</style>
