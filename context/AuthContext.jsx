import { StyleSheet, Text, View } from 'react-native';
import React, { createContext, useContext, useState, useEffect } from 'react';
// Router
import { useRouter, useNavigation } from "expo-router";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
   // Router
   const router = useRouter();
   const navigation = useNavigation();
   // User sign in provider
   const [user, setUser] = useState(null);
   const [isAuthenticated, setIsAuthenticated] = useState(undefined);

   useEffect(() => {
      // const unsub = onAuthStateChanged(auth, (user) => {
      //    if (user) {
      //       setIsAuthenticated(true);
      //       setUser(user);
      //    } else {
      //       setIsAuthenticated(false);
      //       setUser(null);
      //    }
      // })
      setIsAuthenticated(false);
   }, [isAuthenticated]);
   return (
   <AuthContext.Provider value={{ router, navigation, user, isAuthenticated}}>
      {children}
   </AuthContext.Provider>
  )
}

export const useAuth = () => {
   const value = useContext(AuthContext);
   if (!value) {
      throw new Error('useAuth must be used within an AuthContext');
   }
   return value;
}