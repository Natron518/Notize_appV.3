import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StyleSheet, View } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';


//import * as eva from "@eva-design/eva";

// BottomNavigation
//import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { ApplicationProvider, BottomNavigation, BottomNavigationTab, Layout} from '@ui-kitten/components';
//import CreateNote from './screens/CreateNote';
//import AllNotes from './screens/AllNotes';
//import Note from './screens/Note';
//import { Dimensions } from 'react-native';
//import { AppRegistry } from 'react-native';

import { StyleSheet, View } from 'react-native'; 
import React from 'react';
const { Navigator, Screen } = createBottomTabNavigator();
AppRegistry.registerComponent('YourAppName', () => App);
//--USERS


//--ORDERS = Notes


//-Navigation
const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Create'/>
    <BottomNavigationTab title='All Notes'/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Create' component={CreateNote}/>
    <Screen name='AllNotes' component={AllNotes}/>
    <Screen name='Note' component={Note}/>
  </Navigator>
);

// original

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark} >
    <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
  </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

});

// @ui-kitten/components react-native-screens @eva-design/eva react-native-svg
    // @react-native-community/async-storage 
    // @react-navigation/bottom-tabs 
    // @react-navigation/native


