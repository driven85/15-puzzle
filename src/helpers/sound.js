export const playSound = sound => {
  sound.currentTime = 0
  sound.play()
}

