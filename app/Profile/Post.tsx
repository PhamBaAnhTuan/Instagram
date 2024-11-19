import { Dimensions, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
// Icons
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// Context
import { useStoreContext } from '../../context/Context';

const Post = () => {
  // Redux
  const { router, useAuthSelector, useThemeSelector } = useStoreContext();
  const { isAuthenticated, user, posts } = useAuthSelector;
  const { theme } = useThemeSelector;
  const color = theme.colors;
  return (
    <View style={[styles.safeView, { backgroundColor: color.background }]}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container2}>
          <TouchableOpacity style={[styles.wrap2, { borderColor: color.text }]}>
            <Ionicons style={styles.icon2} name="copy" size={19} color={color.text} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap2, { borderColor: color.text }]}>
            <MaterialCommunityIcons style={styles.icon2} name="play-box-multiple" size={20} color={color.text} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap2, { borderColor: color.text }]}>
            <Ionicons style={styles.icon2} name="copy" size={19} color={color.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
          <TouchableOpacity style={[styles.wrap2, { borderColor: color.text }]}>
            <Ionicons style={styles.icon2} name="copy" size={19} color={color.text} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap2, { borderColor: color.text }]}>
            <MaterialCommunityIcons style={styles.icon2} name="play-box-multiple" size={20} color={color.text} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap2, { borderColor: color.text }]}>
            <MaterialCommunityIcons style={styles.icon2} name="play-box-multiple" size={20} color={color.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
          <TouchableOpacity style={[styles.wrap2, { borderColor: color.text }]}>
            <MaterialCommunityIcons style={styles.icon2} name="play-box-multiple" size={20} color={color.text} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap2, { borderColor: color.text }]}>
            <Ionicons style={styles.icon2} name="copy" size={19} color={color.text} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap2, { borderColor: color.text }]}>
            <Ionicons style={styles.icon2} name="copy" size={19} color={color.text} />
          </TouchableOpacity>
        </View>
      </ScrollView>

    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    height: 1000,
    width: '100%'
  },


  container2: {
    height: 125,
    width: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
  },
  wrap2: {
    height: '100%',
    width: '33.33%',
    borderWidth: 0.3,
    // backgroundColor: 'blue'
  },
  icon2: {
    position: 'absolute',
    top: 5,
    right: 5,
  }
})