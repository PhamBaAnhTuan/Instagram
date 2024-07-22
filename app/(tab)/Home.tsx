import { Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
// Icons
import { Feather, FontAwesome5 } from '@expo/vector-icons';
// Component
import StoryCard from '../../components/home/StoryCard';
import Post from '../../components/home/Post';
// Context
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

const Home = () => {
   // Theme
   const { theme, getTheme } = useTheme();
   const {router} = useAuth();
   return (
      <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>

         <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container1}>
               <Image style={styles.title1} source={require('../../assets/icon/InstagramText.png')} />

               <View style={styles.wrap1}>
                  <TouchableOpacity onPress={getTheme}>
                     <Feather name="heart" size={24} color={theme.text} />
                  </TouchableOpacity>
                  
                  <TouchableOpacity onPress={() => router.push('Chat')} >
                     <FontAwesome5 name="facebook-messenger" size={23} color={theme.text} />
                  </TouchableOpacity>
               </View>
            </View>

            <View style={styles.container2}>
               <ScrollView horizontal={true} >
                  <StoryCard
                     img={require('../../assets/home/image/TuanPham.jpg')}
                     userName="Tuan Pham"
                  />
                  <StoryCard
                     img={require('../../assets/home/image/Zeros.jpg')}
                     userName="Mink Lok"
                  />
                  <StoryCard
                     img={require('../../assets/home/image/tuan2.jpg')}
                     userName="Tuantaitu"
                  />
                  <StoryCard
                     img={require('../../assets/home/image/tuan1.jpg')}
                     userName="TuiTuanNe"
                  />
                  <StoryCard
                     img={require('../../assets/home/image/tuan2.jpg')}
                     userName="phbatuan"
                  />
                  <StoryCard
                     img={require('../../assets/home/image/TuanPham.jpg')}
                     userName="Tuan Pham"
                  />
               </ScrollView>
            </View>

            <View style={styles.container3}>
               <Post
                  userImg={require('../../assets/home/image/Kendrick.jpg')}
                  userName='Kendrick Lamar'
                  caption='Love your self and make sure that you love being your self!'
                  img={require('../../assets/home/image/Kendrick.jpg')}
               />
               <Post
                  userImg={require('../../assets/home/image/Jcole.jpg')}
                  userName='J.Cole World'
                  caption='Love your self and make sure that you love being your self'
                  img={require('../../assets/home/image/Jcole.jpg')}
               />
               <Post
                  userImg={require('../../assets/home/image/tuan2.jpg')}
                  userName='phbatuan'
                  caption='Love your self and make sure that you love being your self'
                  img={require('../../assets/home/image/TuanPham.jpg')}
               />
            </View>
         </ScrollView>

      </SafeAreaView>
   )
}

export default Home

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
   },


   container1: {
      height: 60,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20
   },

   title1: {
      resizeMode: 'cover',
      height: 30,
      width: 110
   },

   wrap1: {
      height: '100%',
      width: 70,
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },


   container2: {
      height: 110,
      width: '100%',
      // borderWidth: 1
   },


   container3: {
      height: 'auto',
      width: '100%',
      marginTop: 10
   }
})