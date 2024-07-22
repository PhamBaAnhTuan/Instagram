import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface Props{
   img: any,
   userName: string,
}
const StoryCard = (props: Props) => {
   const { theme } = useTheme();
   return (
      <TouchableOpacity style={styles.container}>
         <View style={styles.imgWrap}><Image style={styles.img} source={props.img} resizeMode='cover' /></View>
         <Text style={[styles.text, {color: theme.text}]}>{props.userName}</Text>
      </TouchableOpacity>
   )
}

export default StoryCard;

const styles = StyleSheet.create({
   container:{
      height: 110,
      width: 95,
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      marginLeft: 5
   },
   imgWrap:{
      height: 85,
      width: 85,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3.5,
      borderColor: 'plum',
   },
   img:{
      height: 73,
      width: 73,
      borderRadius: 50,
   },
   text:{
      fontSize: 10,
      fontWeight: '500'
   }
})