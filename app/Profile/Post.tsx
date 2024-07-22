import { Dimensions, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
// Icons
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// Context
import { useTheme } from '../../context/ThemeContext';

const Post = () => {
  const { theme } = useTheme();
  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container2}>
          <TouchableOpacity style={[styles.wrap2, { borderColor: theme.text }]}>
            <Ionicons style={styles.icon2} name="copy" size={19} color={theme.text} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap2, { borderColor: theme.text }]}>
            <MaterialCommunityIcons style={styles.icon2} name="play-box-multiple" size={20} color={theme.text} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap2, { borderColor: theme.text }]}>
            <Ionicons style={styles.icon2} name="copy" size={19} color={theme.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
          <TouchableOpacity style={[styles.wrap2, { borderColor: theme.text }]}>
            <Ionicons style={styles.icon2} name="copy" size={19} color={theme.text} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap2, { borderColor: theme.text }]}>
            <MaterialCommunityIcons style={styles.icon2} name="play-box-multiple" size={20} color={theme.text} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap2, { borderColor: theme.text }]}>
            <MaterialCommunityIcons style={styles.icon2} name="play-box-multiple" size={20} color={theme.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
          <TouchableOpacity style={[styles.wrap2, { borderColor: theme.text }]}>
            <MaterialCommunityIcons style={styles.icon2} name="play-box-multiple" size={20} color={theme.text} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap2, { borderColor: theme.text }]}>
            <Ionicons style={styles.icon2} name="copy" size={19} color={theme.text} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wrap2, { borderColor: theme.text }]}>
            <Ionicons style={styles.icon2} name="copy" size={19} color={theme.text} />
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