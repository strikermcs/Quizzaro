import { createI18n } from 'vue-i18n'
import enUS from './locales/en/enUs.json'
import uaUA from './locales/ua/uaUa.json'

type MessageSchema = typeof enUS

const i18n = createI18n<[MessageSchema], 'US' | 'UA'>({
    legacy: false,
    locale: 'UA',
    fallbackLocale: 'US',
    messages: {
        'US': enUS,
        'UA': uaUA
    }
})

export default i18n