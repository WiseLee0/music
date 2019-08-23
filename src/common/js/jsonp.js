import originJSONP from 'jsonp'
export function jsonp (url, data, option) {
  url += (url.indexOf('?') < 0 ? `?${param(data)}` : `&${param(data)}`)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) resolve(data)
      else reject(err)
    })
  })
}
function param (data) {
  let url = ''
  for (const key in data) {
    let value = data[key] !== undefined ? data[key] : ''
    url += `&${key}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}