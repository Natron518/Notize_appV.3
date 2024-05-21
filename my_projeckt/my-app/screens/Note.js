// hir kann man notes löschen
import { AsyncStorage } from '@react-native-community/async-storage';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Divider, List, ListItem } from '@ui-kitten/components';
import React, {  useState } from 'react';
import { StyleSheet,View } from 'react-native';

// -- To_Do: Muss Noch ein PDF Botton Machen.
//import { StatusBar } from 'expo-status-bar';

import * as eva from "@eva-design/eva";

// BottomNavigation
//import { NavigationContainer, useFocusEffect, useNavigation } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { ApplicationProvider, BottomNavigation, BottomNavigationTab, Button, Layout } from '@ui-kitten/components';

//import 'react-native';
//import { AsyncStorage } from 'react-native';

//Keyboard, Dimensions, PlatformColor, KeyboardAvoidingView, KeyboardAvoidingViewBase, TextInput

// storige

//import { Dialog } from '@rneui/base';
//import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export default function Note({route}) {
   const [notes, setNotes] = useState([])
   const {singleNote} = route.parse
   const navigation = useNavigation()
  
    useFocusEffect(
        React.useCallback(() => {
        getNotes()
    }, [] )
    )

    // zeigt dalle Notes von Storage
    const getNotes = () => {
        AsyncStorage.getItem("NOTES_AS").then((notes) => {
            setNotes(JSON.parse(notes))
        })
 }
 
 // löscht die Notes
    const deletNote = async() => {
        const newNotes = await notes.filter((note) => note !== singleNote);
        await AsyncStorage.setItem("NOTES_AS", JSON.stringify(newNotes)).then(() => navigation.navigate("AllNotes"))
    }
  
   return (
    <View style = {{backgroundColor: "#222B45", flex: 1}}>
        <Text style= {styles.title} category = "h1">
            Notes
        </Text>
        <Text style= {{fontSize: 22, margin: 20 }} >
           {singleNote}
        </Text>
        <view style= {Style.Button}></view>
        <Button onPress={deletNote} style= {styles.Button}>
        Delete
        </Button>
    </View>
  )
}

//styles von items
const styles = StyleSheet.create({
 container:{
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
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