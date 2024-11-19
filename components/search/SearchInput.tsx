import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react';
// Context
import { useStoreContext } from '../../context/Context';
// Icons
import { Feather } from '@expo/vector-icons';

interface Props{
   value: string,
   onChangeText: any,
   clearText: any
}

const SearchInput = (props: Props) => {
   const { useThemeSelector } = useStoreContext();
   const { theme } = useThemeSelector;
   const color = theme.colors;
   return (
      <View style={[styles.searchContainer, { backgroundColor: color.divider }]}>
         <TouchableOpacity style={styles.searchIcon}>
            <Feather name="search" size={21} color={color.text} />
         </TouchableOpacity>

         <TextInput
            style={[styles.searchInput, { color: color.text }]}
            placeholder='Search'
            placeholderTextColor={color.disabled}
            value={props.value}
            onChangeText={props.onChangeText}
         />
         {props.value === '' ? null
            : <TouchableOpacity onPress={props.clearText} style={styles.searchIcon}>
               <Feather name="x" size={20} color={color.text} />
            </TouchableOpacity>
         }
      </View>
   )
}

export default SearchInput

const styles = StyleSheet.create({
   searchContainer: {
      height: 37,
      width: '95%',
      // borderWidth: 1,
      borderRadius: 10,
      marginVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
   },

   searchIcon: {
      height: 35,
      width: '10%',
      alignItems: 'center',
      justifyContent: 'center',
   },
   searchInput: {
      height: '100%',
      minWidth: '75%',
      // borderWidth: 1,
   },
})