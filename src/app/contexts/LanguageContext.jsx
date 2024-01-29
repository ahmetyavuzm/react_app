"use client"
import React from 'react'


const defaultLanguage = 'en'

export const LanguageContext = React.createContext()

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = React.useState(defaultLanguage)

    const changeLanguage = (language) => {
        setLanguage(language)
    }

    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;