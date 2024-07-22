import { Dimensions, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
// Context
import { useTheme } from '../../context/ThemeContext';

const Create = () => {
  const {theme} = useTheme();
  return (
    <SafeAreaView style={[styles.safeView, {backgroundColor: theme.bgc}]}>

      <View style={styles.header}>
        <Text style={[styles.text1, {color: theme.text}]}>Create</Text>
      </View>

    </SafeAreaView>
  )
}

export default Create

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
  },


  header:{
    height: 50,
    width: '100%',
    // borderWidth: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  text1:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 15
  }
})