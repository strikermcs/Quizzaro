import { createI18n } from 'vue-i18n'
import enUS from './locales/en/enUs.json'
import uaUA from './locales/ua/uaUa.json'

type MessageSchema = typeof enUS

const i18n = createI18n<[MessageSchema], 'en-US' | 'ua-UA'>({
    legacy: false,
    locale: 'ua-UA',
    fallbackLocale: 'en-US',
    messages: {
        'en-US': enUS,
        'ua-UA': uaUA
    }
})

export default i18n