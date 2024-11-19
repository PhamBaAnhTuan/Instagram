import { Dimensions, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
// Context
import { useStoreContext } from '../context/Context';
// Icons
import { Entypo } from '@expo/vector-icons';

const SignIn = () => {
  const { router, useAuthSelector, useThemeSelector } = useStoreContext();
  const { isAuthenticated } = useAuthSelector;
  const { theme } = useThemeSelector;
  const color = theme.colors;

  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: color.background }]}>

      <View style={styles.logoContainer}>
        <Text style={{ fontSize: 37, fontWeight: 'bold', color: color.text, fontFamily: 'serif' }}>Instagram</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.textInput, { backgroundColor: color.onText, borderColor: color.text, color: color.text }]}
          placeholder='Fullname'
          keyboardType='default'
          placeholderTextColor={color.disabled}
        />
        <TextInput
          style={[styles.textInput, { backgroundColor: color.onText, borderColor: color.text, color: color.text }]}
          placeholder='Email'
          keyboardType='email-address'
          placeholderTextColor={color.disabled}
        />
        <TextInput
          style={[styles.textInput, { backgroundColor: color.onText, borderColor: color.text, color: color.text }]}
          placeholder='Password'
          keyboardType='default'
          placeholderTextColor={color.disabled}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.signupBtnContainer}>
        <Text style={[styles.text4, { color: color.onText }]}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signinWithFacebookContainer}>
        <Entypo name="facebook" size={24} color="#3797ef" />
        <Text style={[styles.text5, { color: color.text }]}>Log in with Facebook</Text>
      </TouchableOpacity>

      <View style={styles.otherMethodContainer}>
        <Text style={[styles.text6, { color: color.text }]}>Have an account yet? </Text>
        <TouchableOpacity onPress={() => router.push('SignIn')}>
          <Text style={[styles.text6, { color: '#3797ef' }]}>Log in</Text>
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


  logoContainer: {
    height: 220,
    width: '100%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20
  },


  inputContainer: {
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


  signupBtnContainer: {
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


  signinWithFacebookContainer: {
    height: 40,
    width: 200,
    // borderWidth: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  text5: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#3797ef',
    paddingLeft: 10
  },


  otherMethodContainer: {
    height: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90
  },
  text6: {
    fontSize: 13,
    fontWeight: 'bold',
    opacity: 0.9
  }
})