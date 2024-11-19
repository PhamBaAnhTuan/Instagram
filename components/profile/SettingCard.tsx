import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
// Icons
import { Feather, Entypo } from '@expo/vector-icons';
// Context
import { useStoreContext } from '../../context/Context';

interface Props {
   onPress: any,
   icon: any,
   title: string,
}
const SettingCard = (props: Props) => {
   // Redux
   const { useThemeSelector } = useStoreContext();
   const { theme } = useThemeSelector;
   const color = theme.colors;
   return (
      <TouchableOpacity style={styles.view} onPress={props.onPress}>
         <View style={styles.container1}>
            <View style={styles.icon}>{props.icon}</View>
            <Text style={{color: color.text}}>{props.title}</Text>
         </View>
         <Entypo name="chevron-small-right" size={24} color={color.text} />
      </TouchableOpacity>
   )
}

export default SettingCard

const styles = StyleSheet.create({
   view: {
      height: 50,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20
   },

   container1: {
      height: '100%',
      width: '40%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
   },

   icon:{
      height: '100%',
      width: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 15
   }
})