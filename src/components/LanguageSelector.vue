<template>
  <select v-model="locale">
    <option v-for="value in availableLocales" :key="value" :value>
      {{ t(`language-${value}`) }}
    </option>
  </select>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t, availableLocales, locale } = useI18n()
</script>
