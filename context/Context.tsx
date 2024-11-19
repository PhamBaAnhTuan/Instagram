import { StyleSheet, Text, View } from 'react-native';
import React, { createContext, useContext, useState, useEffect } from 'react';
// Router
import { useRouter, useNavigation } from "expo-router";
// Route get params
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store/store';

export const Context = createContext<any>(null);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   // Dispatch for redux
   const dispatch: AppDispatch = useDispatch<AppDispatch>();
   // Redux
   const useAuthSelector = useSelector((state: RootState) => state.auth);
   const useThemeSelector = useSelector((state: RootState) => state.theme);
   // Router
   const router = useRouter();
   const navigation = useNavigation();

   return (
      <Context.Provider value={{
         router, navigation,
         useAuthSelector, useThemeSelector, dispatch
      }}>
         {children}
      </Context.Provider>
   )
}

export const useStoreContext = () => {
   const value = useContext(Context);
   if (!value) {
      throw new Error('useStore must be used within an Context');
   }
   return value;
}