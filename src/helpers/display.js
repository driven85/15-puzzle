export const paddedNumber = (number, paddingSize) => {
  const padding = [...Array(paddingSize)]
    .map(p => 0).join('')

  return (padding + number).slice(-paddingSize)
}

export const formattedTime = timeSecs => {
  const pretty = n => paddedNumber(n, 2)

  const hours = Math.floor(timeSecs / 3600)
  const mins = Math.floor((timeSecs % 3600) / 60)
  const secs = timeSecs % 60

  return `${pretty(hours)}:${pretty(mins)}:${pretty(secs)}`
}

