import { Dimensions, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
// Context
import { useStoreContext } from '../../context/Context';
// Icons
import { Feather } from '@expo/vector-icons';
import SearchInput from '../../components/search/SearchInput';

const Search = () => {
  const { router, useAuthSelector, useThemeSelector } = useStoreContext();
  const { isAuthenticated } = useAuthSelector;
  const { theme } = useThemeSelector;
  const color = theme.colors;
  // Handle search
  const [search, setSearch] = useState('');
  const handleChange = (text: any) => setSearch(text);
  const clearText = () => {
    setSearch('');
  }
  return (
    <SafeAreaView style={[styles.safeView, { backgroundColor: color.background }]}>

      <ScrollView showsVerticalScrollIndicator={false}>

        <SearchInput
          value={search}
          onChangeText={handleChange}
          clearText={clearText}
        />

        <View style={styles.container2}>
          <View style={[styles.wrap2, { borderColor: color.text }]}></View>
          <View style={[styles.wrap2, { borderColor: color.text }]}></View>
          <View style={[styles.wrap2, { borderColor: color.text }]}></View>
        </View>
        <View style={styles.container2}>
          <View style={[styles.wrap2, { borderColor: color.text }]}></View>
          <View style={[styles.wrap2, { borderColor: color.text }]}></View>
          <View style={[styles.wrap2, { borderColor: color.text }]}></View>
        </View>
        <View style={styles.container2}>
          <View style={[styles.wrap2, { borderColor: color.text }]}></View>
          <View style={[styles.wrap2, { borderColor: color.text }]}></View>
          <View style={[styles.wrap2, { borderColor: color.text }]}></View>
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
    height: 37,
    width: '95%',
    // borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },

  searchIcon: {
    height: 35,
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    height: '100%',
    minWidth: '75%',
    // borderWidth: 1,
  },


  searchWrap: {
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  searchInput2: {
    height: 40,
    width: 240,
    // borderWidth: 1,
    borderRadius: 10,
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
    borderWidth: 0.5,
    // backgroundColor: 'blue'
  }
})