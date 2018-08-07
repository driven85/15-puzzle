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

    'settingsDialog.settings': 'Settings',
    'settingsDialog.pinkGrey': 'Pink grey',
    'settingsDialog.greenBrown': 'Green brown',
    'settingsDialog.sound': 'Sound',

    'warning.message': 'Well, well.. Are you trying to cheat? \
      You can\'t move tiles when the game is paused!',
    'warning.button': 'Got It!'
  },
  ru: {
    'congrats.message': 'Поздравляем!!!<br /> Вы решили<br /> головоломку!',

    'lid.label': 'Игра в 15',

    'remoteControl.pause': 'Пауза',
    'remoteControl.reset': 'Сброс',
    'remoteControl.resume': 'Продолж.',
    'remoteControl.start': 'Старт',

    'settingsDialog.settings': 'Настройки',
    'settingsDialog.pinkGrey': 'Розово-серый',
    'settingsDialog.greenBrown': 'Зелено-коричневый',
    'settingsDialog.sound': 'Звук',

    'warning.message': 'Так, так.. Вы пытаетесь мухлевать? \
      Вы не можете перемещать костяшки, когда игра на паузе!',
    'warning.button': 'Понятно!'
  }
}

