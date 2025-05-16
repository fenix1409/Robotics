import uz from './locales/uz/translation.json'
import ru from './locales/ru/translation.json'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
    resources: {
        ru: { translation: ru },
        uz: { translation: uz }
    },
    fallbackLng: 'ru',
    interpolation: {
        escapeValue: false
    }
})

export default i18n