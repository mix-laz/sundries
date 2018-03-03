/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import { StackNavigator,DrawerNavigator,TabNavigator } from 'react-navigation';
//import ActionBar from './src/components/actionBar';
import NewsDetail from './backed/src/screens/NewsDetail';
//import Toolbar from './src/components/toolbar';
  
import Icon  from 'react-native-vector-icons/Ionicons';
import Home from './backed/src/tabs/Home';
import Settings from './backed/src/tabs/Settings';
import Profile from './backed/src/screens/Profile';
import Modal from './backed/src/screens/Modal';
import Drawer from './backed/src/components/Drawer';
import Marijuana from './backed/src/screens/Marijuana';
import GoogleNews   from "./backed/src/screens/Google_News";
import Weather   from "./backed/src/screens/Weather";
 


// Stack navigation for Settings and Profile screens
const SettingsTab = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      header: null,               // Hide the header
      headerBackTitle: 'Back',    // Title back button Back when we navigate to Profile from Settings
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      // Customize header's title with user name passed to navigate()
      // You can pass any props you'd like. For instance: navigate('Profile', { user: 'Tom' }
      title: `${navigation.state.params.user}'s Profile`,
    }),
  },  
  Marijuana: {
    screen:Marijuana,
    navigationOptions: ({ navigation }) => ({
      // Customize header's title with user name passed to navigate()
      // You can pass any props you'd like. For instance: navigate('Profile', { user: 'Tom' }
      title: 'News',
    }),
  },  
  GoogleNews:{
    screen:GoogleNews,
    navigationOptions: ({ navigation }) => ({ 
      title: "Google News",      
    }),
  },
  NewsDetail:{
    screen:NewsDetail,
    navigationOptions: ({ navigation }) => ({ 
      title: navigation.state.params.title,
    })   
  },

Weather:{
  screen:Weather,
  navigationOptions: ({ navigation }) => ({ 
    title: "Weather"
  })
}
}, 
{
  headerMode: 'screen',
});
 
// Tab navigation for Home and Settings screens
const TabNavigation = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => <Icon 
        name={"ios-home"}
        size={26}
        style={{ color: tintColor }}
      />
    },
  },
  Settings: {
    screen: SettingsTab,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor, focused }) => <Icon 
        name={focused ? 'ios-settings' : 'ios-settings-outline'}
        size={26}       
        style={{ color: tintColor }}
      />
    },
  }  
},{tabBarOptions:{showIcon:true}}); 

 

// Wrap tab navigation into drawer navigation
const TabsWithDrawerNavigation = DrawerNavigator({
  Tabs: {
    screen: TabNavigation,
  }
}, {
  // Register custom drawer component
  contentComponent: props => <Drawer {...props} />
});

// And lastly stack together drawer with tabs and modal navigation
// because we want to be able to call Modal screen from any other screen
 const FullNavigator = StackNavigator({
  TabsWithDrawer: {
    screen: TabsWithDrawerNavigation,
  }
}, {
  // In modal mode screen slides up from the bottom
  mode: 'modal',
  // No headers for modals. Otherwise we'd have two headers on the screen, one for stack, one for modal.
  headerMode: 'none',
});

export default class App extends Component {
  render() { 
    // issue solution with visibility of status bar      
    return <FullNavigator></FullNavigator>// style={{ marginTop: Expo.Constants.statusBarHeight}}
  }
}



