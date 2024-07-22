import { Dimensions, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
// Context
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
// Icons
import { Entypo } from '@expo/vector-icons';

const SignIn = () => {
  const { theme } = useTheme();
  const {router} = useAuth();

  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: theme.bgc }]}>

      <View style={styles.container1}>
        <Image source={require('../assets/icon/InstagramText.png')} />
      </View>

      <View style={styles.container2}>
        <TextInput
          style={[styles.textInput, { backgroundColor: theme.bgc, borderColor: theme.text }]}
          placeholder='Fullname'
          keyboardType='default'
          placeholderTextColor={theme.text}
        />
        <TextInput
          style={[styles.textInput, { backgroundColor: theme.bgc, borderColor: theme.text }]}
          placeholder='Email'
          keyboardType='email-address'
          placeholderTextColor={theme.text}
        />
        <TextInput
          style={[styles.textInput, { backgroundColor: theme.bgc, borderColor: theme.text }]}
          placeholder='Password'
          keyboardType='default'
          placeholderTextColor={theme.text}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.container4}>
        <Text style={[styles.text4, {color: theme.text}]}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container5}>
        <Entypo name="facebook" size={24} color="#3797ef" />
        <Text style={[styles.text5, {color: theme.text}]}>Log in with Facebook</Text>
      </TouchableOpacity>

      <View style={styles.container6}>
        <Text style={[styles.text6, {color: theme.text}]}>Have an account yet? </Text>
        <TouchableOpacity onPress={() => router.push('SignIn')}>
          <Text style={[styles.text6, {color: '#3797ef'}]}>Log in</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 30,
  },


  container1: {
    height: 220,
    width: '100%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20
  },


  container2: {
    height: 'auto',
    width: '100%',
    // borderWidth: 1,
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    width: 330,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 10
  },


  container3: {
    height: 30,
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: 15,
    paddingTop: 10,
    // borderWidth: 1
  },
  text3: {
    fontSize: 12,
  },


  container4: {
    height: 50,
    width: 330,
    // borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    backgroundColor: '#3797ef'
  },
  text4: {
    fontSize: 15,
    fontWeight: 'bold',
  },


  container5: {
    height: 40,
    width: 200,
    // borderWidth: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  text5:{
    fontSize: 13,
    fontWeight: 'bold',
    color: '#3797ef',
    paddingLeft: 10
  },


  container6:{
    height: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90
  },
  text6:{
    fontSize: 13,
    fontWeight: 'bold',
    opacity: 0.9
  }
})