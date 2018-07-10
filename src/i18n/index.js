// Libs
import { addLocaleData } from 'react-intl'

import en from 'react-intl/locale-data/en'
import ru from 'react-intl/locale-data/ru'


addLocaleData([...en, ...ru])

export default {
  en: {
    'congrats.message': 'Congrats!!!<br /> You solved the<br /> puzzle!',

    'lid.label': '15 Puzzle',

    'remoteControl.start': 'Start',
    'remoteControl.reset': 'Reset'
  },
  ru: {
    'congrats.message': 'Поздравляем!!!<br /> Вы решили<br /> головоломку!',

    'lid.label': 'Игра в 15',

    'remoteControl.start': 'Старт',
    'remoteControl.reset': 'Сброс'
  }
}

