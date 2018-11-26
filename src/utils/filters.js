export function capitalize(value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function formatDate(timestamp, separator = '-') {
  let date = new Date(timestamp)
  let year = date.getFullYear()
  let month = String(date.getMonth() + 1).padStart(2, '0')
  let day = String(date.getDate()).padStart(2, '0')
  let arr = [year, month, day]
  return arr.join(separator)
}

export function formatTime(timestamp) {
  let date = new Date(timestamp)
  let hour = String(date.getHours()).padStart(2, '0')
  let minute = String(date.getMinutes()).padStart(2, '0')
  let second = String(date.getSeconds()).padStart(2, '0')
  let arr2 = [hour, minute, second]
  return arr2.join(':')
}

// 保留两位小数，整数部门每三位一个逗号
// 例如: 1234.1 (1,234.10)   12(12.00)
export function formatPrice(val) {
  if (Number(val)!= val){
    return val
  }
  var str=Number(val).toFixed(2)+'';
  var arr=str.split('.');
  var a=arr[0];
  var b=arr[1];
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(a)) {
    a = a.replace(rgx, '$1' + ',' + '$2');
  }
  return a+'.'+b;
}