import { Dimensions, Image, Platform, SafeAreaView,
   ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View 
} from 'react-native';
import React from 'react';
// Icons
import { Feather, FontAwesome5 } from '@expo/vector-icons';
// Component
import StoryCard from '../../components/home/StoryCard';
import Post from '../../components/home/Post';
// Context
import { useStoreContext } from '../../context/Context';

const Home = () => {
   const { router, useAuthSelector, useThemeSelector } = useStoreContext();
   const { isAuthenticated, user, posts } = useAuthSelector;
   const { theme } = useThemeSelector;
   const color = theme.colors;
   return (
      <SafeAreaView style={[styles.safeView, {backgroundColor: color.background}]}>

         <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.headerContainer}>
               <Image style={styles.title} source={require('../../assets/icon/InstagramText.png')} />

               <View style={styles.headerRight}>
                  <TouchableOpacity onPress={undefined}>
                     <Feather name="heart" size={24} color={color.text} />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => router.push('Chat/Chat')} >
                     <FontAwesome5 name="facebook-messenger" size={23} color={color.text} />
                  </TouchableOpacity>
               </View>
            </View>

            <View style={styles.storyContainer}>
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

            <View style={styles.postContainer}>
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


   headerContainer: {
      height: 60,
      width: '100%',
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20
   },

   title: {
      resizeMode: 'cover',
      height: 30,
      width: 110
   },

   headerRight: {
      height: '100%',
      width: 70,
      // borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },


   storyContainer: {
      height: 110,
      width: '100%',
      // borderWidth: 1
   },


   postContainer: {
      height: 'auto',
      width: '100%',
      marginTop: 10
   }
})