//获取当前时间状态
export const getTime = () => {
  let message = ''
  let hour = new Date().getHours()
  if (hour <= 9) {
    message = '早上'
  } else if (hour < 12) {
    message = '上午'
  } else if (hour < 19) {
    message = '下午'
  } else {
    message = '晚上'
  }
  return message
}
