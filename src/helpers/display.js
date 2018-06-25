export const paddedNumber = number => ('000' + number).slice(-3)

export const formattedTime = timeSecs => {
  const hours = Math.floor(timeSecs / 3600)
  const mins = Math.floor((timeSecs % 3600) / 60)
  const secs = timeSecs % 60

  return ('00' + hours).slice(-2) + ':' + 
    ('00' + mins).slice(-2) + ':' + 
    ('00' + secs).slice(-2)
}

