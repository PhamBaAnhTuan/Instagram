import { Dimensions, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
// Context
import { useStoreContext } from '../../context/Context';
// Icons
import { Ionicons } from '@expo/vector-icons';

const Post = () => {
  // Redux
  const { router, useAuthSelector, useThemeSelector } = useStoreContext();
  const { isAuthenticated, user, posts } = useAuthSelector;
  const { theme } = useThemeSelector;
  const color = theme.colors;
  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: color.background }]}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container1}>
          <TouchableOpacity style={[styles.wrap1, {borderColor: color.text}]}>
            <Ionicons style={styles.icon1} name="play" size={15} color={color.text} />
            <Text style={[styles.text1, {color: color.text}]}>77</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap1, {borderColor: color.text}]}>
            <Ionicons style={styles.icon1} name="play" size={15} color={color.text} />
            <Text style={[styles.text1, {color: color.text}]}>77</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap1, {borderColor: color.text}]}>
            <Ionicons style={styles.icon1} name="play" size={15} color={color.text} />
            <Text style={[styles.text1, {color: color.text}]}>77</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container1}>
          <TouchableOpacity style={[styles.wrap1, {borderColor: color.text}]}>
            <Ionicons style={styles.icon1} name="play" size={15} color={color.text} />
            <Text style={[styles.text1, {color: color.text}]}>77</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap1, {borderColor: color.text}]}>
            <Ionicons style={styles.icon1} name="play" size={15} color={color.text} />
            <Text style={[styles.text1, {color: color.text}]}>77</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap1, {borderColor: color.text}]}>
            <Ionicons style={styles.icon1} name="play" size={15} color={color.text} />
            <Text style={[styles.text1, {color: color.text}]}>77</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container1}>
          <TouchableOpacity style={[styles.wrap1, {borderColor: color.text}]}>
            <Ionicons style={styles.icon1} name="play" size={15} color={color.text} />
            <Text style={[styles.text1, {color: color.text}]}>77</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap1, {borderColor: color.text}]}>
            <Ionicons style={styles.icon1} name="play" size={15} color={color.text} />
            <Text style={[styles.text1, {color: color.text}]}>77</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap1, {borderColor: color.text}]}>
            <Ionicons style={styles.icon1} name="play" size={15} color={color.text} />
            <Text style={[styles.text1, {color: color.text}]}>77</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Post

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    height: 1000,
  },


  container1: {
    height: 200,
    width: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
  },
  wrap1: {
    height: '100%',
    width: '33.33%',
    borderWidth: 0.3,
    // backgroundColor: 'blue'
  },
  icon1: {
    position: 'absolute',
    bottom: 5,
    left: 5,
  },
  text1: {
    fontSize: 12,
    position: 'absolute',
    bottom: 5,
    left: 20,
  }
})