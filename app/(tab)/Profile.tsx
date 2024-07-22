import { Dimensions, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
// Context
import { useTheme } from '../../context/ThemeContext';
// Icons
import { FontAwesome6, FontAwesome, Octicons, MaterialIcons, Feather, AntDesign, Ionicons, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
// Components
import StoryCard from '../../components/home/StoryCard';
// Top tab
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Post from '../Profile/Post';
import Reel from '../Profile/Reel';
import Tag from '../Profile/Tag';

const TopTab = createMaterialTopTabNavigator();
interface Props {
  focused: boolean
}
const Profile = () => {
  const { theme } = useTheme();
  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={[styles.userName, { color: theme.text }]}>phbatuan</Text>
          </TouchableOpacity>
  
          <View style={styles.wrap1}>
            <TouchableOpacity style={styles.iconWrap}>
              <FontAwesome6 name="threads" size={25} color={theme.text} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconWrap}>
              <Octicons name="diff-added" size={25} color={theme.text} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconWrap}>
              <Feather name="menu" size={27} color={theme.text} />
            </TouchableOpacity>
          </View>
  
        </View>
  
        <View style={styles.container2}>
  
          <View style={styles.wrap2a}>
            <TouchableOpacity>
              <Image style={styles.img2} source={require('../../assets/home/image/TuanPham.jpg')} resizeMode='cover' />
            </TouchableOpacity>
            <Text style={[styles.text2a, { color: theme.text }]}>Tuan Pham</Text>
          </View>
  
          <View style={styles.wrap2b}>
            <View style={styles.box2}>
              <Text style={[styles.number2, { color: theme.text }]}>99</Text>
              <Text style={[styles.text2b, { color: theme.text }]}>Posts</Text>
            </View>
            <View style={styles.box2}>
              <Text style={[styles.number2, { color: theme.text }]}>753K</Text>
              <Text style={[styles.text2b, { color: theme.text }]}>Follower</Text>
            </View>
            <View style={styles.box2}>
              <Text style={[styles.number2, { color: theme.text }]}>845</Text>
              <Text style={[styles.text2b, { color: theme.text }]}>Following</Text>
            </View>
  
          </View>
  
        </View>
  
        <View style={styles.container3}>
          <TouchableOpacity style={[styles.wrap3, {backgroundColor: theme.text}]}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: theme.bgc }}>Modify profile</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={[styles.wrap3, {backgroundColor: theme.text}]}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: theme.bgc }}>Share profile</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.container4}>
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
  
        <View style={styles.container5}>
          <TopTab.Navigator
            screenOptions={() => ({
              tabBarActiveTintColor: theme.text,
              tabBarShowLabel: false,
              swipeEnabled: false,
              tabBarStyle: {
                backgroundColor: theme.bgc,
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
                    // <AntDesign name='appstore-o' size={20} color={props.focused ? theme.text : 'gray'} />
                    <MaterialCommunityIcons name="grid" size={24} color={props.focused ? theme.text : 'gray'} />
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
                    <FontAwesome name='film' size={20} color={props.focused ? theme.text : 'gray'} />
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
                    <Fontisto name='hashtag' size={20} color={props.focused ? theme.text : 'gray'} />
                  );
                },
  
              }} />
          </TopTab.Navigator>
        </View>
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


  container2: {
    height: 140,
    width: '100%',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    // borderWidth: 1,
    marginTop: 10
  },

  wrap2a: {
    height: '100%',
    width: 100,
    // borderWidth: 1,
    paddingTop: 20,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  img2: {
    height: 80,
    width: 80,
    borderRadius: 50
  },
  text2a: {
    fontSize: 13,
    fontWeight: 'bold',
  },

  wrap2b: {
    height: 'auto',
    width: 220,
    // borderWidth: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-around'
  },

  box2: {
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


  container3: {
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


  container4: {
    height: 110,
    width: '100%',
    marginTop: 15,
    // borderWidth: 1
  },

  container5: {
    height: 700,
    width: '100%'
  }
})