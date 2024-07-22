import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
// Icons
import { Feather, Ionicons, Entypo } from '@expo/vector-icons';
// Context
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

interface Props {
   userImg: any,
   userName: string,
   mess: string,
   time: number,
   online: boolean
}
const ChatList = (props: Props) => {
   const { theme } = useTheme();
   return (
      <TouchableOpacity style={styles.container}>
         <View style={styles.wrap}>
            <Image style={styles.userImg} source={props.userImg} resizeMode='cover' />

            <View style={styles.wrap1}>
               <Text style={[styles.text1, { color: theme.text }]}>{props.userName}</Text>
               <View style={styles.box1}>
                  <Text style={[styles.mess, { color: theme.text }]}>{props.mess}</Text>
                  <Text style={{ color: theme.text }}> • </Text>
                  <Text style={[styles.mess, { color: theme.text }]}>{props.time} minutes ago</Text>
               </View>
            </View>
         </View>
         {props.online === true
            ? < Entypo name="dot-single" size={30} color="blue" />
            : <Entypo name="dot-single" size={30} color="gray" />
         }

      </TouchableOpacity>
   )
}

export default ChatList

const styles = StyleSheet.create({
   container: {
      height: 70,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // backgroundColor: 'gray',
      paddingHorizontal: 10,
      marginVertical: 2
   },

   wrap: {
      height: '100%',
      width: 'auto',
      flexDirection: 'row',
      paddingLeft: 5,
      // borderWidth: 1
   },
   userImg: {
      height: 60,
      width: 60,
      borderRadius: 35,
      alignSelf: 'center',
      // justifyContent: 'center',
      // borderWidth: 1,
   },


   wrap1: {
      height: '100%',
      width: 'auto',
      justifyContent: 'center',
      // borderWidth: 1,
      marginLeft: 10
   },
   text1: {
      fontSize: 14,
      fontWeight: 'bold'
   },

   box1: {
      width: 'auto',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },
   mess: {
      fontSize: 12,
      fontWeight: 'bold'
   }
})