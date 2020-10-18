import React, { useContext, useEffect, useState } from "react"

const THEME = ["light", "dark"]

export const THEMEContext = React.createContext({
  theme: "dark",
  setTHEME: () => {},
})

export const THEMEContextProvider = ({ children }) => {
  const [theme, setTHEME] = useState("dark")
  useEffect(() => {
    setTHEME(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : THEME[1]
    )
  }, [])

  //   const [theme, setTHEME] = useState(
  //     localStorage.getItem("theme") ? localStorage.getItem("theme") : THEME[1]
  //   )
  const setTHEMEF = () => {
    if (theme == THEME[0]) {
      localStorage.setItem("theme", THEME[1])
      setTHEME(THEME[1])
    } else {
      localStorage.setItem("theme", THEME[0])
      setTHEME(THEME[0])
    }
  }

  return (
    <THEMEContext.Provider value={{ theme, setTHEME: setTHEMEF }}>
      {children}
    </THEMEContext.Provider>
  )
}
export function useStyle() {
  const { theme, setTHEME } = useContext(THEMEContext)
  //   console.log(useContext(THEMEContext))
  return [theme, setTHEME]
}

// export const useLang = () => {
//     const {langId, setLangId} = useContext(LangContext);
//     const align = langId == 'en' ? 'left' : 'right';
//     return [lang(langId), align, setLangId, langId];
//   };
