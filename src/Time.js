import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity,Image } from "react-native";




export default function Time() {

 

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>Time</Text>

   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    margin: 10,
    justifyContent: 'center',
  },
 
});
