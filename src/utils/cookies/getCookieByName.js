const getCookieByName = (cookieName) => {
  const cookie = {}
  document.cookie.split(';').forEach((el) => {
    const [key, value] = el.split('=')
    cookie[key.trim()] = value
  })
  return cookie[cookieName] || ''
}

export { getCookieByName }
