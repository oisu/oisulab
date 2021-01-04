export const openChat = () => {
  window.fcWidget.open()
}

export const langs = [
  {
    key: 'en',
    text: '🇺🇸 English',
    value: 'en'
  },
  {
    key: 'ja',
    text: '🇯🇵 日本語',
    value: 'ja'
  },
]

const defaultLang = langs[0]

export const getLang = (langKey: string) => {
  const lang = langs.find(l => l.key === langKey)
  return lang || defaultLang
}
