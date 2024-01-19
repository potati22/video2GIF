// 分 ： 秒
export function formatTime2(time: number) {
  const str = time.toString().split('.')
  const integer = Number(str[0])

  const minute = Math.floor(integer / 60)
  const second = integer % 60

  const minuteStr = minute.toString().padStart(2, '0')
  const secondStr = second.toString().padStart(2, '0')

  return minuteStr + ':' + secondStr
}

// 分 ： 秒 . 毫秒
export function formatTime3(time: number) {
  const str = time.toString().split('.')
  const integer = Number(str[0])
  const decimals = str[1] ? str[1] : '0'

  const minute = Math.floor(integer / 60)
  const second = integer % 60

  const minuteStr = minute.toString().padStart(2, '0')
  const secondStr = second.toString().padStart(2, '0')
  const millisecondStr = decimals.padEnd(2, '0')

  return minuteStr + ':' + secondStr + '.' + millisecondStr
}
