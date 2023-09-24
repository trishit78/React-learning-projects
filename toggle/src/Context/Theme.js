import React,{useContext,createContext} from "react";

export const ThemeContext = React.createContext({
    themeMode:"Light",
    lightTheme:()=>{},
    darkTheme:()=>{}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}
