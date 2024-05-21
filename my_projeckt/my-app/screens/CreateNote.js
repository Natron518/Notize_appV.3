//Hir Wird Notes Geschriben & Gespeichert
//import * as eva from "@eva-design/eva";
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { NavigationContainer, useNavigation } from '@react-navigation/native';
//import { ApplicationProvider, BottomNavigation, BottomNavigationTab, Button, Layout} from '@ui-kitten/components';
//import { StatusBar } from 'expo-status-bar';
//import { Dimensions, Keyboard, PlatformColor, StyleSheet, Text, , View } from 'react-native';
//import { AsyncStorage } from 'react-native';
//import { Dialog } from '@rneui/base';

import { AsyncStorage } from '@react-native-community/async-storage';
import { useNavigation } from "@react-navigation/native";
import { Button } from "@ui-kitten/components";
import React, { useState } from 'react';
import {Dimension,KeyboardAvoidingView, StyleSheet,TextInput, View} from "react-native"; 

// BottomNavigation
// storige

// original

export default function CreateNote() {
   const [note, setNote] = useState("")
   const navigation = useNavigation()

// 
  const saveNote = async () => {
      const value = await AsyncStorage.alignItem ("NOTES_AS") 
        const n = value ? JSON.parse(value) : []
      n.push(note)
      await AsyncStorage.setItem("NOTES_AS", JSON.stringify(n)).then(() => navigation.navigate("AllNotes"))
      setNote("")
  }
  
   return (
    <View style= {styles.container}>
        <TextInput
        value={Note}
        onChangeText={setNote}
        style={{color: "#fff", fontsize: 22}}
        multiline = {true}
        autoFocus
        selectionColor="#fff"
        />  
        <KeyboardAvoidingView behavior ={Platform.OS === "ios" ? "padding" : "height"} style ={styles.Bottom}>
            
        <Button style = {StyleSheet.Bottom} appearance="filled" onPress={saveNote}>CreateNote</Button>

        
        </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222B45',
    color: "white",
    padding: 30,
    paddingTop: 80,
    width: Dimensions.get("window").width
  },
  Button: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36
    
  },
    Button: {
    marginBottom: 30
  }
});
//<Button style = {StyleSheet.Bottom} appearance="filled" onPress={}></Button>

// @ui-kitten/components react-native-screens @eva-design/eva react-native-svg
    // @react-native-community/async-storage 
    // @react-navigation/bottom-tabs 
    // @react-navigation/native

