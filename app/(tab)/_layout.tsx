import React from 'react';
// Router
import { Stack, Tabs } from 'expo-router';
// Icons
import { Ionicons, Octicons, Foundation, Feather, FontAwesome } from '@expo/vector-icons';
// Context
import { useTheme } from '../../context/ThemeContext';

const Layout = () => {

  const {theme} = useTheme();
  
  interface TabBarProps {
    focused: boolean;
    color: string;
    size: number;
    // name: string;
  }
  return (

    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: theme.bgc,
        tabBarInactiveBackgroundColor: theme.bgc,
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle:{
          fontSize: 10,
          fontWeight: 'bold',
          marginBottom: 3,
        },
        tabBarShowLabel: false,

        tabBarIconStyle:{
         paddingBottom: 50,
         // borderWidth: 1
        },
        tabBarActiveTintColor: theme.text,
        tabBarStyle:{
          height: 90,
          borderColor: theme.bgc
        }
      }}
    >
      <Tabs.Screen
        name='Home'
        options={{
          title: 'Home',
          tabBarIcon(props: TabBarProps) {
            return (
              <Foundation
                name={'home'}
                size={30}
                color={props.focused ? theme.text : 'gray'}
              />
            );
          }
        }}
      />
      <Tabs.Screen
        name='Search'
        options={{
          title: 'Search',
          tabBarIcon(props: TabBarProps) {
            return (
              <Feather
                name={'search'}
                size={24}
                color={props.focused ? theme.text : 'gray'}
              />
            );
          }
        }}
      />
      <Tabs.Screen
        name='Create'
        options={{
          title: 'Create',
          tabBarIcon(props: TabBarProps) {
            return (
              <Octicons
                name={'diff-added'}
                size={24}
                color={props.focused ? theme.text : 'gray'}
              />
            );
          }
        }}
      />
      <Tabs.Screen
        name='Reel'
        options={{
          title: 'Reel',
          tabBarIcon(props: TabBarProps) {
            return (
              <FontAwesome
                name={'film'}
                size={21}
                color={props.focused ? theme.text : 'gray'}
              />
            );
          }
        }}
      />
      <Tabs.Screen
        name='Profile'
        options={{
          title: 'Profile',
          tabBarIcon(props: TabBarProps) {
            return (
              <Ionicons
                name={'person'}
                size={24}
                color={props.focused ? theme.text : 'gray'}
              />
            );
          }
        }}
      />
    </Tabs>
  )
}

export default Layout;