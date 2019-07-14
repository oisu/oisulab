import React from 'react'

export interface ILangContext {
  lang: string,
  setLang: (lang: string) => undefined
}

export const LangContext = React.createContext({
  lang: 'en',
  setLang: (lang: string) => undefined
})
