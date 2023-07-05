import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, SafeAreaView } from "react-native";
import arrow from '../assets/tests/bidirectionArrow1.png'


export default function Weight() {


  return (
    <SafeAreaView>
    
      <Text style={styles.infoTextTitle}>Weight Converter</Text>
      <View style={styles.weightCont}>


        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder='kilo'
          placeholderTextColor="#D3D3D3"
          numeric
          keyboardType="numeric"
          maxLength={8}
          // value={numVal}
          // onChangeText={setNumVal}
        /> 


        <Image style={styles.arrows}
          source={arrow}
          resizeMode="contain"
          alt="arrow"
        /> 


        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder='Lb'
          placeholderTextColor="#D3D3D3"
          numeric
          keyboardType="numeric"
          maxLength={8}
          // value={numVal}
          // onChangeText={setNumVal}
        /> 

      </View>
       
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  infoTextTitle:{
    textAlign:'center', 
    fontSize: 20,
    paddingBottom: 10,
  },
  weightCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-around',
  },
  input: {
    borderRadius: 5,
    margin: 5,
    height: 40,
    width: '33%',
    borderColor: "#4a4e69",
    borderWidth: 1,
    paddingLeft: 10
  },
  arrows: {
    bottom: -10
  }
 
});
