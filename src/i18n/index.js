// Libs
import { addLocaleData } from 'react-intl'

import en from 'react-intl/locale-data/en'
import ru from 'react-intl/locale-data/ru'


addLocaleData([...en, ...ru])

export default {
  en: {
    'lid.label': '15 Puzzle',

    'remoteControl.start': 'Start',
    'remoteControl.reset': 'Reset'
  },
  ru: {
    'lid.label': 'Игра в 15',

    'remoteControl.start': 'Старт',
    'remoteControl.reset': 'Сброс'
  }
}

