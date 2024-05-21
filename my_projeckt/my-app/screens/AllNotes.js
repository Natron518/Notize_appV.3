import { AsyncStorage } from '@react-native-community/async-storage';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Divider, List, ListItem} from '@ui-kitten/components';
import React, {  useState } from 'react';
import { TextInput, View , Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
const { Dimensions } = require('react-native');
//import { StatusBar } from 'expo-status-bar';
//import * as eva from "@eva-design/eva";

// BottomNavigation
//import { NavigationContainer, useFocusEffect, useNavigation } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { ApplicationProvider, BottomNavigation, BottomNavigationTab, Button, Layout} from '@ui-kitten/components';

//import { StyleSheet } from 'react-native';

//Dimensions, Keyboard,KeyboardAvoidingViewBase,PlatformColor, KeyboardAvoidingView, useEffect

// storige
//import { AsyncStorage } from 'react-native';

//import { Dialog } from '@rneui/base';
//import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';



export default function AllNotes() {
   const [notes, setNotes] = useState([])
   const navigation = useNavigation()
  
   
  useFocusEffect(
        React.useCallback(() => {
        getNotes()
    }, [] )
    )

    const getNotes = () => {
        AsyncStorage.getItem("NOTES_AS").then((notes) => {
            setNotes(JSON.parse(notes))
        })
 }
 // Ihr kann noch geendert werden aber zum moment ist es: 
 // "List Items" Format
 const renderItem = ({ item, index}) => (
    <ListItem
      title={<text category ="h5"> {item}</text>}
      onPress={() => navigation.navigate("Note", {
          singleNote: item
      })}
    />
  );

  
   return (
    <View style = {{backgroundColor: "#222B45", flex: 1}}>
        <text style={styles.title} category="h1"> Notes</text>
        <List
      style={styles.container}
      data={notes.reverse()}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
    />
    </View>
  )
}

//styles von items
const styles = StyleSheet.create({
 container:{
     fontSize: 20
 },

 item: {
     marginVertical: 4
 },

 title: {
     textAlign: "center",
     marginTop: 50
 },

 notes: {
     fontSize: 24
  }
});
//<Button style = {StyleSheet.Bottom} appearance="filled" onPress={}></Button>

// @ui-kitten/components react-native-screens @eva-design/eva react-native-svg
    // @react-native-community/async-storage 
    // @react-navigation/bottom-tabs 
    // @react-navigation/native


//  const Header = (props: ViewProps): React.ReactElement => (
//     <View {...props}>
//     <Text category='h6'>
//       Maldives
//     </Text>
//     <Text category='s1'>
//       By Wikipedia
//     </Text>
//   </View>
//  ); 

//  <Card
//  style={styles.card}
//  header={Header}
//  >

//
//
//
//
//
//
//