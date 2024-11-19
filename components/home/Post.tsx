import { Dimensions, Image, Pressable, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
// Icons
import { Entypo, FontAwesome5, FontAwesome, Ionicons, Feather, AntDesign } from '@expo/vector-icons';
// Context
import { useStoreContext } from '../../context/Context';

interface Props{
   userImg: any,
   userName: string,
   img: any,
   caption: string,
}
const Post = (props: Props) => {
   // Redux
   const { router, useAuthSelector, useThemeSelector } = useStoreContext();
   const { isAuthenticated, user, posts } = useAuthSelector;
   const { theme } = useThemeSelector;
   const color = theme.colors;
   // handle heart
   const [heart, setHeart] = useState('hearto');
   const [colors, setColor] = useState(color.text);
   const handleHeart = () => {
      setHeart(heart === 'heart' ? 'hearto' : 'heart');
      setColor(colors === color.text ? 'red' : color.text);
   };
   // handle save post
   const [save, setSave] = useState('bookmark-o');
   const handleSave = () => {
      setSave(save === 'bookmark-o' ? 'bookmark' : 'bookmark-o');
      ToastAndroid.show('Saved in Collection', ToastAndroid.SHORT);
   };
   return (
      <View style={styles.container}>

         <View style={styles.container1}>
            <TouchableOpacity style={styles.wrap1}>
               <Image style={styles.img1} source={props.userImg} resizeMode='cover' />
               <Text style={[styles.text1, { color: color.text }]}>{props.userName}</Text>
            </TouchableOpacity>
            <TouchableOpacity >
               <Entypo name="dots-three-vertical" size={17} color={color.text} />
            </TouchableOpacity>
         </View>

         <Pressable>
            <Image style={styles.post} source={props.img} resizeMode='cover' />
         </Pressable>

         <View style={styles.container2}>
            <View style={styles.wrap2}>
               <TouchableOpacity onPress={handleHeart}>
                  <AntDesign name={heart} size={24} color={colors} />
               </TouchableOpacity>

               <TouchableOpacity>
                  <Ionicons name="chatbubble-outline" size={24} color={color.text} />
               </TouchableOpacity>

               <TouchableOpacity>
                  <Feather name="send" size={24} color={color.text} />
               </TouchableOpacity>
            </View>

            <TouchableOpacity style={{paddingRight: 5}} onPress={handleSave}>
               <FontAwesome name={save} size={24} color={color.text} />
            </TouchableOpacity>
         </View>

         <View style={styles.container3}>
            <Text style={[styles.text3a, { color: color.text }]}>{props.userName}</Text>
            <Text style={[styles.text3b, { color: color.text }]}>{props.caption}</Text>
         </View>
      </View>
   )
}

export default Post;

const styles = StyleSheet.create({
   container: {
      height: 'auto',
      width: Dimensions.get('screen').width,
      marginBottom: 15
   },


   container1: {
      height: 50,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 12
   },

   wrap1: {
      height: '100%',
      width: 'auto',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',

   },
   img1: {
      height: 40,
      width: 40,
      borderRadius: 50,
   },
   text1: {
      fontSize: 13,
      fontWeight: 'bold',
      marginLeft: 10,
      // color: 'white',
   },
   post: {
      height: 365,
      width: '100%',
   },


   container2: {
      height: 50,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: 10,
      // paddingHorizontal: 10,
      // borderWidth: 1
   },

   wrap2: {
      height: '100%',
      width: 140,
      // paddingLeft: 7,
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
   },


   container3: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
      paddingLeft: 10,
      flexDirection: 'row'
   },
   text3a: {
      fontSize: 13,
      fontWeight: 'bold'
   },
   text3b: {
      width: 250,
      // borderWidth: 1,
      fontSize: 13,
      // fontWeight: 'bold',
      paddingHorizontal: 5,
      textAlign: 'justify'
   }
})