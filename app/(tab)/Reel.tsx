import { Dimensions, FlatList, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
// Icons
import { Ionicons, AntDesign, FontAwesome, FontAwesome6, Feather, Entypo } from '@expo/vector-icons';
// Context
import { useStoreContext } from '../../context/Context';

const Reel = () => {
  // Redux
  const { router, useAuthSelector, useThemeSelector } = useStoreContext();
  const { isAuthenticated, user, posts } = useAuthSelector;
  const { theme } = useThemeSelector;
  const color = theme.colors;
  // Handle follow
  const [follow, setFollow] = useState('Follow');
  const setFL = () => {
    follow === 'Follow'
      ? (setFollow('Following'), ToastAndroid.show('Following', ToastAndroid.SHORT))
      : (setFollow('Follow'), ToastAndroid.show('Unfollowed', ToastAndroid.SHORT));
  };
  // Handle heart
  const [heart, setHeart] = useState('hearto');
  const [colors, setColors] = useState(color.text);
  const handleHeart = () => {
    setHeart(heart === 'heart' ? 'hearto' : 'heart');
    setColors(colors === color.text ? 'red' : color.text);
  };
  const arr = [
    { author: 'TuanPham', like: 999, comment: 753, share: 94, music: 'band 4 band', caption: 'We can go band 4 band. Fack that we can go M 4 M!' },
    { author: 'phbatuan', like: 353, comment: 42, share: 54, music: 'Sprinter', caption: 'How its going on?.\nSeek nature mannn' },
    { author: 'Minh Lok', like: 213, comment: 142, share: 46, music: 'band 4 band', caption: 'We can go out for a while.\nFack that we can go M 4M' },
    { author: 'Youngz Boiz', like: 835, comment: 532, share: 86, music: 'Leona Messi', caption: 'We can go band 4 band.\nFack that we can go M 4M' }
  ];
  const renderItem = ({ item }: { item: any }) => (
    <View style={[styles.reelContainer, { backgroundColor: color.background }]}>


      <View style={styles.navbarInterAct}>
        <TouchableOpacity style={styles.likeWrap} onPress={handleHeart}>
          <AntDesign name={heart} size={25} color={colors} />
          <Text style={[styles.text1, { color: color.text }]} >{item.like}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.likeWrap}>
          <FontAwesome6 name="comment-alt" size={25} color={color.text} />
          <Text style={[styles.text1, { color: color.text }]} >{item.comment}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.likeWrap}>
          <Feather name="send" size={25} color={color.text} />
          <Text style={[styles.text1, { color: color.text }]} >{item.share}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.likeWrap}>
          <Entypo name="dots-three-vertical" size={20} color={color.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.captionContainer}>

        <View style={styles.in4Wrap}>
          <View style={styles.avtWrap}>
            <TouchableOpacity>
              <Image style={styles.avt} source={require('../../assets/icon/instagram.png')} resizeMode="center" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={{ fontSize: 13, fontWeight: 'bold', color: color.text, marginLeft: 10 }}>{item.author}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={[styles.flWrap, { borderColor: color.text }]} onPress={setFL}>
            <Text style={{ fontSize: 11, color: color.text }}>{follow}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.captionWrap}>
          <Text style={{ fontSize: 13, fontWeight: '400', color: color.text }}>{item.caption}</Text>
        </View>

      </View>

      <View style={styles.musicWrap}>
        <TouchableOpacity style={styles.musicBox}>
          <FontAwesome name="music" size={12} color={color.text} />
          <Text style={{ fontSize: 10, fontWeight: 'bold', marginLeft: 10, color: color.text }}>{item.music}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../../assets/home/image/tuan1.jpg')} resizeMode="center" style={styles.musicImg} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: color.background }]}>
      <TouchableOpacity style={styles.personIcon}>
        <Feather name="camera" size={24} color={color.text} />
      </TouchableOpacity>
      <FlatList
        data={arr}
        renderItem={renderItem}
        pagingEnabled
        showsVerticalScrollIndicator={false}
      />

    </SafeAreaView>
  )
}

export default Reel

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
  },


  reelContainer: {
    height: Dimensions.get('screen').height - 127,
    width: '100%',
    backgroundColor: 'lightgray'
  },

  personIcon: {
    zIndex: 1,
    position: 'absolute',
    right: 15,
    top: 45,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    // borderWidth: 1
  },


  navbarInterAct: {
    height: 270,
    width: 60,
    // borderWidth: 1,
    position: 'absolute',
    bottom: 35,
    right: 0,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  likeWrap: {
    height: 30,
    width: 30,
    // borderWidth: 1,
    // borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text1: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
    // paddingTop: 5
  },

  captionContainer: {
    height: 80,
    width: 300,
    // borderWidth: 1,
    position: 'absolute',
    left: 0,
    bottom: 35,
  },

  in4Wrap: {
    height: '50%',
    width: 260,
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  avtWrap: {
    height: '100%',
    width: 140,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    // borderWidth: 1
  },
  avt: {
    height: 40,
    width: 40,
    borderRadius: 30,
    // borderWidth: 1,
  },

  flWrap: {
    height: 25,
    width: 75,
    borderWidth: 0.7,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white'
  },

  captionWrap: {
    height: '50%',
    width: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
    paddingLeft: 15,
    alignItems: 'center',
  },

  musicWrap: {
    height: 30,
    width: '100%',
    // borderWidth: 1,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    // marginBottom: 5
  },
  musicBox: {
    height: 25,
    width: 'auto',
    // borderWidth: 1,
    borderRadius: 30,
    borderColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    backgroundColor: 'darkgray'
  },
  musicImg: {
    height: '100%',
    width: 30,
    borderWidth: 3,
    borderRadius: 7,
    borderColor: 'grey',
    marginRight: 5
  },


  container2: {
    height: 220,
    width: 50,
    backgroundColor: 'pink',
    position: 'absolute',
    bottom: 0,
    right: 0
  }
})