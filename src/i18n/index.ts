import { createI18n } from 'vue-i18n'
import { default as en } from './locales/en'
import { default as de } from './locales/de'
import { default as pl } from './locales/pl'

function getAgentLocale(defaultLocale = 'en') {
  return globalThis.navigator?.language.split('-')[0] || defaultLocale
}

export default createI18n<false>({
  legacy: false,
  locale: getAgentLocale(),
  fallbackLocale: 'en',
  messages: { en, de, pl },
})
