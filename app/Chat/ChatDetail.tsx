import { Dimensions, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
// Route get params
import { useRoute } from "@react-navigation/native";
// Icons
import { Feather, Ionicons, Entypo, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
// Context
import { useStoreContext } from '../../context/Context';

const ChatDetail = () => {
   // Redux
   const { router, useAuthSelector, useThemeSelector } = useStoreContext();
   const { isAuthenticated, user, posts } = useAuthSelector;
   const { theme } = useThemeSelector;
   const color = theme.colors;

   const route = useRoute();
   const userChat = route.params?.user;
   // Handle text
   const [text, setText] = useState('');
   const handleText = (text: string) => setText(text);
   return (
      <SafeAreaView style={[styles.safeView, { backgroundColor: color.background }]}>
         <View style={styles.header}>

            <View style={styles.wrapLeft}>

               <TouchableOpacity style={styles.backIcon} onPress={() => router.back()}>
                  <Ionicons name="arrow-back-outline" size={25} color={color.text} />
               </TouchableOpacity>

               <TouchableOpacity style={styles.userWrap}>
                  <Image style={styles.userImg} source={require('../../assets/home/image/Kendrick.jpg')} resizeMode='cover' />

                  <View style={styles.nameWrap}>
                     <Text style={[styles.nickName, { color: color.text }]}>Tuan Pham</Text>
                     <Text style={{ fontSize: 11, color: color.text }} >Tuan Pham</Text>
                  </View>
               </TouchableOpacity>

            </View>

            <View style={styles.wrapRight}>
               <TouchableOpacity>
                  <Feather name="phone" size={24} color={color.text} />
               </TouchableOpacity>
               <TouchableOpacity>
                  <Feather name="video" size={27} color={color.text} />
               </TouchableOpacity>
            </View>
         </View>

         {text === ''
            ? (<View style={[styles.inputContainer, {backgroundColor: color.divider}]}>
               <View style={styles.inputWrap}>
                  <TouchableOpacity style={styles.camIcon}>
                     <Entypo name="camera" size={22} color={color.background} />
                  </TouchableOpacity>
                  <TextInput style={styles.input} placeholder='Type a message...' onChangeText={handleText} />
               </View>

               <View style={styles.iconWrap}>
                  <TouchableOpacity><Feather name="mic" size={25} color="black" /></TouchableOpacity>
                  <TouchableOpacity><Feather name="image" size={25} color="black" /></TouchableOpacity>
                  <TouchableOpacity><MaterialCommunityIcons name="sticker-emoji" size={25} color="black" /></TouchableOpacity>
               </View>
            </View>)

            : (<View style={[styles.inputContainer, {backgroundColor: color.divider}]}>
               <View style={styles.inputWrap}>
                  <TouchableOpacity style={styles.camIcon}>
                     <FontAwesome name="search" size={24} color={color.background} />
                  </TouchableOpacity>
                  <TextInput style={styles.input} placeholder='Type a message...' onChangeText={handleText} />
               </View>

               <TouchableOpacity style={styles.sendIcon}>
                  <Feather name="send" size={24} color={color.text} />
               </TouchableOpacity>
            </View>)
         }

      </SafeAreaView>
   )
}

export default ChatDetail

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
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },

   wrapLeft: {
      height: '100%',
      width: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
   },
   backIcon: {
      height: 30,
      width: 30,
      marginLeft: 10
   },

   userWrap: {
      height: 50,
      width: 'auto',
      marginLeft: 15,
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'space-between'
   },
   userImg: {
      height: 35,
      width: 35,
      borderRadius: 50
   },

   nameWrap: {
      marginLeft: 10
   },
   nickName: {
      fontSize: 13,
      fontWeight: 'bold'
   },


   wrapRight: {
      height: '100%',
      width: 70,
      marginRight: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
   },


   inputContainer: {
      position: 'absolute',
      bottom: 5,
      height: 50,
      width: 350,
      // borderWidth: 1,
      borderRadius: 25,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',
   },

   inputWrap: {
      height: '100%',
      width: 'auto',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'flex-start',
   },

   camIcon: {
      height: 42,
      width: 42,
      borderRadius: 30,
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 3,
      backgroundColor: 'lightblue'
   },

   input: {
      marginLeft: 5,
      height: '100%',
      maxWidth: 250,
      // borderWidth: 1
   },

   iconWrap: {
      height: '100%',
      width: 130,
      flexDirection: 'row',
      alignSelf: 'flex-end',
      alignItems: 'center',
      justifyContent: 'space-around',
      // borderWidth: 1,
      marginRight: 5
   },
   sendIcon: {
      height: 40,
      width: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      // borderWidth: 1
   }
})