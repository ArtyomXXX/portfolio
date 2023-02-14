import en from './translation/en.json';
import ru from './translation/ru.json';

import {initReactI18next} from 'react-i18next';
import i18next from 'i18next';

const resources = {
    en: {
        translation: en,
    },
    ru: {
        translation: ru,
    }
}

i18next
.use(initReactI18next)
.init({
    resources,
    lang: JSON.parse(localStorage.getItem('language')),
    fallbacking: 'ru',
})

export default i18next;