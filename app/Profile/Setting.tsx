import { Dimensions, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
// Icons
import { Feather, Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';
// Context
import { useStoreContext } from '../../context/Context';
// Components
import SettingCard from '../../components/profile/SettingCard';
// Action
import { setTheme } from '../../redux/reducer/themeActions';
import SearchInput from '../../components/search/SearchInput';

const Setting = () => {
   // Redux
   const { router, dispatch, useAuthSelector, useThemeSelector } = useStoreContext();
   const { isAuthenticated, user, posts } = useAuthSelector;
   const { theme } = useThemeSelector;
   const color = theme.colors;
   const setThemeOn = (theme: string) => {
      dispatch(setTheme(theme));
   }
   // Handle search
   const [search, setSearch] = useState('');
   const handleChange = (text: any) => setSearch(text);
   const clearText = () => {
      setSearch('');
   }
   return (
      <SafeAreaView style={[styles.safeView, { backgroundColor: color.background }]}>

         <View style={styles.header}>
            <TouchableOpacity style={styles.backIcon} onPress={() => router.push('Profile')}>
               <Ionicons name="arrow-back-outline" size={24} color={color.text} />
            </TouchableOpacity>

            <Text style={[styles.title, { color: color.text }]}>Settings and Activities</Text>
         </View>

         <SearchInput
            value={search}
            onChangeText={handleChange}
            clearText={clearText}
         />

         <View>
            <SettingCard
               onPress={() => dispatch(setTheme('light'))}
               title='Light Theme'
               icon={<Feather name="bookmark" size={24} color={color.text} />}
            />
            <SettingCard
               onPress={() => dispatch(setTheme('dark'))}
               title='Dark Theme'
               icon={<MaterialIcons name="translate" size={24} color={color.text} />}
            />
            <SettingCard
               onPress={() => router.replace('SignIn')}
               title='Sign Out'
               icon={<MaterialIcons name="translate" size={24} color={color.text} />}
            />
         </View>
      </SafeAreaView>
   )
}

export default Setting

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
   },


   header: {
      height: 50,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
   },

   backIcon: {
      height: 35,
      width: 35,
      marginLeft: 7,
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1
   },
   title: {
      fontSize: 17,
      fontWeight: 'bold',
      marginLeft: 20
   },


   searchContainer: {
      height: 37,
      width: '95%',
      // borderWidth: 1,
      borderRadius: 10,
      marginVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'darkgray'
   },

   searchIcon: {
      width: 35,
      // borderWidth: 1,
      marginLeft: 15
   },
   searchInput: {
      height: 40,
      width: 350,
      // borderWidth: 1,
      borderRadius: 10,
      alignSelf: 'flex-start'
   },
})