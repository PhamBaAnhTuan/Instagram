import { Dimensions, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
// Context
import { useTheme } from '../../context/ThemeContext';
// Icons
import { Ionicons } from '@expo/vector-icons';

const Post = () => {
  const { theme } = useTheme();
  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container1}>
          <TouchableOpacity style={[styles.wrap1, {borderColor: theme.text}]}>
            <Ionicons style={styles.icon1} name="play" size={15} color={theme.text} />
            <Text style={[styles.text1, {color: theme.text}]}>77</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap1, {borderColor: theme.text}]}>
            <Ionicons style={styles.icon1} name="play" size={15} color={theme.text} />
            <Text style={[styles.text1, {color: theme.text}]}>77</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap1, {borderColor: theme.text}]}>
            <Ionicons style={styles.icon1} name="play" size={15} color={theme.text} />
            <Text style={[styles.text1, {color: theme.text}]}>77</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container1}>
          <TouchableOpacity style={[styles.wrap1, {borderColor: theme.text}]}>
            <Ionicons style={styles.icon1} name="play" size={15} color={theme.text} />
            <Text style={[styles.text1, {color: theme.text}]}>77</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap1, {borderColor: theme.text}]}>
            <Ionicons style={styles.icon1} name="play" size={15} color={theme.text} />
            <Text style={[styles.text1, {color: theme.text}]}>77</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap1, {borderColor: theme.text}]}>
            <Ionicons style={styles.icon1} name="play" size={15} color={theme.text} />
            <Text style={[styles.text1, {color: theme.text}]}>77</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container1}>
          <TouchableOpacity style={[styles.wrap1, {borderColor: theme.text}]}>
            <Ionicons style={styles.icon1} name="play" size={15} color={theme.text} />
            <Text style={[styles.text1, {color: theme.text}]}>77</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap1, {borderColor: theme.text}]}>
            <Ionicons style={styles.icon1} name="play" size={15} color={theme.text} />
            <Text style={[styles.text1, {color: theme.text}]}>77</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap1, {borderColor: theme.text}]}>
            <Ionicons style={styles.icon1} name="play" size={15} color={theme.text} />
            <Text style={[styles.text1, {color: theme.text}]}>77</Text>
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