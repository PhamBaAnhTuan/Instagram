import { Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
// Context
import { useStoreContext } from '../../context/Context';
// Icons
import {
  FontAwesome6, FontAwesome, Octicons, MaterialIcons,
  Feather, AntDesign, Ionicons, Fontisto, MaterialCommunityIcons
} from '@expo/vector-icons';
// Top tab
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { router } from 'expo-router';
// Components
import StoryCard from '../../components/home/StoryCard';
import Post from '../Profile/Post';
import Reel from '../Profile/Reel';
import Tag from '../Profile/Tag';

const TopTab = createMaterialTopTabNavigator();
interface Props {
  focused: boolean
}
const Profile = () => {
  const { router, useAuthSelector, useThemeSelector } = useStoreContext();
  const { isAuthenticated, user, posts } = useAuthSelector;
  const { theme } = useThemeSelector;
  const color = theme.colors;
  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: color.background }]}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={[styles.userName, { color: color.text }]}>phbatuan</Text>
          </TouchableOpacity>

          <View style={styles.wrap1}>
            <TouchableOpacity style={styles.iconWrap}>
              <FontAwesome6 name="threads" size={25} color={color.text} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconWrap}>
              <Octicons name="diff-added" size={25} color={color.text} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconWrap} onPress={() => router.push('Profile/Setting')}>
              <Feather name="menu" size={27} color={color.text} />
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.userInfoContainer}>

          <View style={styles.imgContainer}>
            <TouchableOpacity>
              <Image style={styles.userImg} source={require('../../assets/home/image/TuanPham.jpg')} resizeMode='cover' />
            </TouchableOpacity>
            <Text style={[styles.userNameText, { color: color.text }]}>Tuan Pham</Text>
          </View>

          <View style={styles.rightContainer}>
            <View style={styles.wrap}>
              <Text style={[styles.number2, { color: color.text }]}>99</Text>
              <Text style={[styles.text2b, { color: color.text }]}>Posts</Text>
            </View>
            <View style={styles.wrap}>
              <Text style={[styles.number2, { color: color.text }]}>753K</Text>
              <Text style={[styles.text2b, { color: color.text }]}>Follower</Text>
            </View>
            <View style={styles.wrap}>
              <Text style={[styles.number2, { color: color.text }]}>845</Text>
              <Text style={[styles.text2b, { color: color.text }]}>Following</Text>
            </View>

          </View>

        </View>

        <View style={styles.modifyContainer}>
          <TouchableOpacity style={[styles.wrap3, { backgroundColor: color.text }]}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: color.background }}>Modify profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.wrap3, { backgroundColor: color.text }]}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: color.background }}>Share profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.storyContainer}>
          <ScrollView horizontal={true} >
            <StoryCard
              img={require('../../assets/home/image/TuanPham.jpg')}
              userName="lately"
            />
            <StoryCard
              img={require('../../assets/home/image/Zeros.jpg')}
              userName="Mink Lok"
            />
            <StoryCard
              img={require('../../assets/home/image/tuan2.jpg')}
              userName="Tripping"
            />
            <StoryCard
              img={require('../../assets/home/image/tuan1.jpg')}
              userName="TuiTuanNe"
            />
            <StoryCard
              img={require('../../assets/home/image/tuan2.jpg')}
              userName="phbatuan"
            />
          </ScrollView>
        </View>

        {/* <View style={styles.container5}> */}
        <TopTab.Navigator
          screenOptions={() => ({
            tabBarActiveTintColor: color.text,
            tabBarShowLabel: false,
            swipeEnabled: false,
            tabBarStyle: {
              backgroundColor: color.background,
            },
            tabBarIconStyle: {
              alignItems: 'center',
              justifyContent: 'center',
            }
          })}
        >
          <TopTab.Screen
            name="Post"
            component={Post}
            options={{
              title: 'Post',
              tabBarIcon(props: Props) {
                return (
                  // <AntDesign name='appstore-o' size={20} color={props.focused ? color.text : 'gray'} />
                  <MaterialCommunityIcons name="grid" size={24} color={props.focused ? color.text : 'gray'} />
                );
              },
            }} />
          <TopTab.Screen
            name="Reel"
            component={Reel}
            options={{
              title: 'Reel',
              tabBarIcon(props: Props) {
                return (
                  <FontAwesome name='film' size={20} color={props.focused ? color.text : 'gray'} />
                );
              },

            }} />
          <TopTab.Screen
            name="Tag"
            component={Tag}
            options={{
              title: 'Tag',
              tabBarIcon(props: Props) {
                return (
                  <Fontisto name='hashtag' size={20} color={props.focused ? color.text : 'gray'} />
                );
              },

            }} />
        </TopTab.Navigator>
        {/* </View> */}
      </ScrollView>

    </SafeAreaView>
  )
}

export default Profile

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
    justifyContent: 'space-between',
    // borderWidth: 1,
    paddingHorizontal: 5
  },

  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 10
  },

  wrap1: {
    height: '100%',
    width: 140,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // borderWidth: 1,
  },
  iconWrap: {
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1
  },


  userInfoContainer: {
    height: 140,
    width: '100%',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    // borderWidth: 1,
    marginTop: 10
  },

  imgContainer: {
    height: '100%',
    width: 100,
    // borderWidth: 1,
    paddingTop: 20,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  userImg: {
    height: 80,
    width: 80,
    borderRadius: 50
  },
  userNameText: {
    fontSize: 13,
    fontWeight: 'bold',
  },

  rightContainer: {
    height: 'auto',
    width: 220,
    // borderWidth: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-around'
  },

  wrap: {
    height: 100,
    width: 70,
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number2: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text2b: {
    fontSize: 13,
    // fontWeight: 'bold',
  },


  modifyContainer: {
    height: 30,
    width: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginVertical: 5
  },

  wrap3: {
    height: '100%',
    width: 150,
    // borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray'
  },


  storyContainer: {
    height: 110,
    width: '100%',
    marginTop: 15,
    // borderWidth: 1
  },

  container5: {
    height: 'auto',
    width: '100%'
  }
})