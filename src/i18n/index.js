// Libs
import { addLocaleData } from 'react-intl'

// Locale data
import en from 'react-intl/locale-data/en'
import ru from 'react-intl/locale-data/ru'


addLocaleData([...en, ...ru])

export default {
  en: {
    'congrats.message': 'Congrats!!!<br /> You solved the<br /> puzzle!',

    'lid.label': '15 Puzzle',

    'remoteControl.pause': 'Pause',
    'remoteControl.reset': 'Reset',
    'remoteControl.resume': 'Resume',
    'remoteControl.start': 'Start',

    'settingsDialog.settings': 'Settings'
  },
  ru: {
    'congrats.message': 'Поздравляем!!!<br /> Вы решили<br /> головоломку!',

    'lid.label': 'Игра в 15',

    'remoteControl.pause': 'Пауза',
    'remoteControl.reset': 'Сброс',
    'remoteControl.resume': 'Продолж.',
    'remoteControl.start': 'Старт',

    'settingsDialog.settings': 'Настройки'
  }
}

