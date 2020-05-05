export const getCookieAcceptance = cname => {
  const name = `${cname}=`
  const cookieArray = document.cookie.split(';')

  const cValues = cookieArray.map(cookie => {
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1)
    }

    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length)
    }
    return null
  })

  const trueValues = cValues.filter(v => v === 'true')
  const v = trueValues[0]
  return Boolean(v === 'true')
}

export const setCookie = (cname, cvalue, exdays) => {
  const d = new Date()
  d.setTime(d.getTime() + (exdays*24*60*60*1000))
  const expires = "expires="+ d.toUTCString()
  document.cookie = `${cname}=${cvalue};${expires};path=/`
}