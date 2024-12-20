import { Dimensions, Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router';
// Icons
import { Feather, Ionicons, Entypo } from '@expo/vector-icons';
// Context
import { useStoreContext } from '../../context/Context';
import ChatList from '../../components/chat/ChatList';

const Chat = () => {
   // Redux
   const { router, useAuthSelector, useThemeSelector } = useStoreContext();
   const { isAuthenticated, user, posts } = useAuthSelector;
   const { theme } = useThemeSelector;
   const color = theme.colors;
   // 
   const navigation = useNavigation();
   return (
      <SafeAreaView style={[styles.safeView, { backgroundColor: color.background }]}>

         <View style={styles.header}>
            <View style={styles.wrapA}>
               <TouchableOpacity onPress={() => router.replace('Home')}>
                  <Ionicons style={styles.backIcon} name="arrow-back-outline" size={24} color={color.text} />
               </TouchableOpacity>

               <TouchableOpacity style={styles.userNameWrap}>
                  <Text style={[styles.userName, { color: color.text }]}>phbatuan</Text>
                  <Entypo name="chevron-small-down" size={24} color={color.text} />
               </TouchableOpacity>
            </View>

            <View style={styles.wrapB}>
               <TouchableOpacity style={styles.icon}>
                  <Ionicons name="chatbubbles-outline" size={24} color={color.text} />
               </TouchableOpacity>
               <TouchableOpacity style={styles.icon}>
                  <Ionicons name="create-outline" size={24} color={color.text} />
               </TouchableOpacity>
            </View>
         </View>

         <View style={styles.searchContainer}>
            <Feather style={styles.searchIcon} name="search" size={20} color={color.background} />
            <KeyboardAvoidingView behavior='padding'>
               <TextInput
                  style={styles.searchInput}
                  placeholder='Search'
                  placeholderTextColor={color.background}
               />
            </KeyboardAvoidingView>
         </View>

         <View style={styles.container1}>
            <Text style={[styles.text1, { color: color.text }]}>Message</Text>
            <TouchableOpacity>
               <Text style={[styles.text1, { color: 'blue' }]}>Message waiting</Text>
            </TouchableOpacity>
         </View>

         <View style={styles.container2}>
            <ChatList
               onPress={() => router.push('Chat/ChatDetail')}
               userImg={require('../../assets/home/image/Kendrick.jpg')}
               userName='Kendrick Lamar'
               mess='Wassap asian boiz!'
               time={2}
               online={true}
            />
            <ChatList
               onPress={() => router.push('Chat/ChatDetail')}
               userImg={require('../../assets/home/image/robe.jpg')}
               userName='Hustlang Robber'
               mess='Can u come to my stu?'
               time={19}
               online={true}
            />
            <ChatList
               onPress={() => router.push('ChatDetail')}
               userImg={require('../../assets/home/image/Zeros.jpg')}
               userName='Zeros'
               mess='e bro, duo k?'
               time={3}
               online={false}
            />
            <ChatList
               onPress={() => router.push('ChatDetail')}
               userImg={require('../../assets/home/image/Jcole.jpg')}
               userName='J.Cole'
               mess='Let hang out bro!'
               time={27}
               online={true}
            />
         </View>

      </SafeAreaView>
   )
}

export default Chat

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
   },


   header: {
      height: 50,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15
   },

   wrapA: {
      height: '100%',
      width: 230,
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'space-between',
      // borderWidth: 1,
      // marginLeft: 10
   },
   backIcon: {
      // marginLeft: 10
   },

   userNameWrap: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1,
      marginLeft: 20
   },
   userName: {
      width: 'auto',
      fontSize: 20,
      fontWeight: 'bold',
      // marginLeft: 20,
      // borderWidth: 1
   },

   wrapB: {
      height: '100%',
      width: 70,
      flexDirection: 'row',
      alignSelf: 'flex-end',
      alignItems: 'center',
      justifyContent: 'space-between',
      // borderWidth: 1,
      // marginLeft: 140
   },
   icon: {
      height: 30,
      width: 30,
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center'
   },


   searchContainer: {
      height: 37,
      width: '95%',
      // borderWidth: 1,
      borderRadius: 10,
      marginVertical: 5,
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
   },


   container1: {
      height: 40,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15
   },
   text1: {
      fontSize: 15,
      fontWeight: 'bold',
   },


   container2: {
      height: 'auto',
      width: '100%',
      // borderWidth: 1,
   }
})