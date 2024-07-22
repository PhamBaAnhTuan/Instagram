import React, { useContext } from "react";
import { createContext } from "react";
import { useColorScheme } from "react-native";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

   const scheme = useColorScheme();
   const theme = {
      bgc: scheme === 'light' ? 'white' : 'black',
      text: scheme === 'light' ? 'black' : 'white',
      // text: scheme === 'light'? 'white' : '#0f0f0f',
      // bgc: scheme === 'light'? '#0f0f0f' : 'white',
   }

   return (
      <ThemeContext.Provider value={{ theme }}>
         {children}
      </ThemeContext.Provider>
   )
};

export const useTheme = () => {
   const value = useContext(ThemeContext);
   if (!value) {
      throw new Error('useTheme must be used within a ThemeProvider');
   }
   return value;
}