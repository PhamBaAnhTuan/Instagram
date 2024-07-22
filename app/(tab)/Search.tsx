import { Dimensions, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';
// Context
import { useTheme } from '../../context/ThemeContext';
// Icons
import { Feather } from '@expo/vector-icons';

const Search = () => {
  const { theme } = useTheme();
  return (
    <SafeAreaView style={[styles.safeView, {backgroundColor: theme.bgc}]}>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.searchContainer}>
          <Feather style={styles.searchIcon} name="search" size={20} color={theme.bgc} />
          <KeyboardAvoidingView behavior='padding'>
            <TextInput
              style={styles.searchInput}
              placeholder='Search'
              placeholderTextColor={theme.bgc}
            />
          </KeyboardAvoidingView>
        </View>
  
        <View style={styles.container2}>
          <View style={[styles.wrap2, {borderColor: theme.text}]}></View>
          <View style={[styles.wrap2, {borderColor: theme.text}]}></View>
          <View style={[styles.wrap2, {borderColor: theme.text}]}></View>
        </View>
        <View style={styles.container2}>
          <View style={[styles.wrap2, {borderColor: theme.text}]}></View>
          <View style={[styles.wrap2, {borderColor: theme.text}]}></View>
          <View style={[styles.wrap2, {borderColor: theme.text}]}></View>
        </View>
        <View style={styles.container2}>
          <View style={[styles.wrap2, {borderColor: theme.text}]}></View>
          <View style={[styles.wrap2, {borderColor: theme.text}]}></View>
          <View style={[styles.wrap2, {borderColor: theme.text}]}></View>
        </View>
        <View style={styles.container2}>
          <View style={[styles.wrap2, {borderColor: theme.text}]}></View>
          <View style={[styles.wrap2, {borderColor: theme.text}]}></View>
          <View style={[styles.wrap2, {borderColor: theme.text}]}></View>
        </View>
        <View style={styles.container2}>
          <View style={[styles.wrap2, {borderColor: theme.text}]}></View>
          <View style={[styles.wrap2, {borderColor: theme.text}]}></View>
          <View style={[styles.wrap2, {borderColor: theme.text}]}></View>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
  },


  searchContainer: {
    height: 40,
    width: 330,
    // borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
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
    width: 280,
    // borderWidth: 1,
    borderRadius: 10,
  },


  container2:{
    height: 125,
    width: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
  },
  wrap2:{
    height: '100%',
    width: '33.33%',
    borderWidth: 0.5,
    // backgroundColor: 'blue'
  }
})