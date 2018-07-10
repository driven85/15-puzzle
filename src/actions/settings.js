export const SWITCH_LOCALE = 'SWITCH_LOCALE'


export const switchLocale = locale => ({
  type: SWITCH_LOCALE,
  payload: { locale }
})

