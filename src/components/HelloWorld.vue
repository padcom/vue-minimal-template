<template>
  <div class="hello-world" @click="console.log('Here!')">
    <LanguageSelector />
    <h1>{{ t('hello-world') }} {{ message }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import LanguageSelector from './LanguageSelector.vue'

defineProps({
  message: { type: String, default: 'from HelloWorld.vue' },
})

const { t } = useI18n()
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
