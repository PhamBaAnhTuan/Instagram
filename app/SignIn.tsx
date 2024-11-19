import { Dimensions, Image, Platform, SafeAreaView, 
  StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View 
} from 'react-native';
import React from 'react';
// Context
import { useStoreContext } from '../context/Context';
// Icons
import { Entypo } from '@expo/vector-icons';
import { TabBar } from 'react-native-tab-view';

const SignIn = () => {
  const { router, dispatch, useAuthSelector, useThemeSelector } = useStoreContext();
  const { isAuthenticated } = useAuthSelector;
  const { theme } = useThemeSelector;
  const color = theme.colors;

  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: color.background }]}>

      {/* <StatusBar backgroundColor={color.text}></StatusBar> */}
      <View style={styles.logoContainer}>
        <Text style={{fontSize: 37, fontWeight: 'bold', color: color.text, fontFamily: 'serif'}}>Instagram</Text>
      </View>

      <View style={styles.inputContainer}>
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

      <View style={styles.forgotPassContainer}>
        <TouchableOpacity><Text style={[styles.text3, { color: color.text }]}>Forgot Password?</Text></TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signInBtnContainer} onPress={() => router.replace('Home')}>
        <Text style={[styles.text4, { color: color.onText }]}>Sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInWithFacebookContainer}>
        <Entypo name="facebook" size={24} color="#3797ef" />
        <Text style={[styles.text5, { color: color.text }]}>Log in with Facebook</Text>
      </TouchableOpacity>

      <View style={styles.otherMethodContainer}>
        <Text style={[styles.text6, { color: color.text }]}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push('SignUp')}>
          <Text style={[styles.text6, { color: '#3797ef' }]}>Sign up</Text>
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


  forgotPassContainer: {
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


  signInBtnContainer: {
    height: 50,
    width: 330,
    // borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: '#3797ef'
  },
  text4: {
    fontSize: 15,
    fontWeight: 'bold',
  },


  signInWithFacebookContainer: {
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
    paddingLeft: 10
  },


  otherMethodContainer: {
    height: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150
  },
  text6: {
    // height: 30,
    fontSize: 13,
    fontWeight: 'bold',
    opacity: 0.9,
    // borderWidth: 1,
  }
})