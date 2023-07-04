import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity,Image } from "react-native";




export default function Time() {

 

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>Time Converter</Text>

        <View style={styles.timeContainer}>

          <View style={styles.specificTime}>
            <Text>Pacific{'\n'}PDT/PST</Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Pacific"
                placeholderTextColor="#D3D3D3"
                numeric
                keyboardType="numeric"
                maxLength={8}
                value=""
                //onChangeText={setNumVal}
                onChangeText=""
                // value={numVal.toString()}
            /> 
          </View>

          <View style={styles.specificTime}>
            <Text>Eastern{'\n'}EDT/EST</Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Eastern"
                placeholderTextColor="#D3D3D3"
                numeric
                keyboardType="numeric"
                maxLength={8}
                value=""
                onChangeText=""
            /> 
          </View>
        </View>

   
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
  input: {
    borderRadius: 5,
    margin: 5,
    height: 40,
    width: 100,
    borderColor: "#4a4e69",
    borderWidth: 1,
    paddingLeft: 10
  },
  timeContainer: {
    flexDirection: 'row',
  },
  specificTime: {
    alignItems: 'center'
  }
 
});
