import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, SafeAreaView } from "react-native";
import arrow from '../assets/tests/bidirectionArrow1.png'


export default function Weight() {


  return (
    <SafeAreaView>
    
      <Text style={styles.infoTextTitle}>Weight Converter</Text>


      <View style={styles.weightCont}>

        <View style={styles.wichOne}>
          <Text>kilo</Text>       
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder='   0.0 Kg'
            placeholderTextColor="#D3D3D3"
            numeric
            keyboardType="numeric"
            maxLength={8}
            // value={numVal}
            // onChangeText={setNumVal}
          /> 
        </View>


        <Image style={styles.arrows}
          source={arrow}
          resizeMode="contain"
          alt="arrow"
        /> 


        <View style={styles.wichOne}>
          <Text>grams</Text>       
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder='   0.0 g'
            placeholderTextColor="#D3D3D3"
            numeric
            keyboardType="numeric"
            maxLength={8}
            // value={numVal}
            // onChangeText={setNumVal}
          /> 
        </View>


        <Image style={styles.arrows}
          source={arrow}
          resizeMode="contain"
          alt="arrow"
        /> 


        <View style={styles.wichOne}>
          <Text>pound / lb</Text>       
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder='   0.0 lbs'
            placeholderTextColor="#D3D3D3"
            numeric
            keyboardType="numeric"
            maxLength={8}
            // value={numVal}
            // onChangeText={setNumVal}
          /> 
        </View>


        <Image style={styles.arrows}
          source={arrow}
          resizeMode="contain"
          alt="arrow"
        /> 


        <View style={styles.wichOne}>
          <Text>ounce</Text>       
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder='   0.0 oz '
            placeholderTextColor="#D3D3D3"
            numeric
            keyboardType="numeric"
            maxLength={8}
            // value={numVal}
            // onChangeText={setNumVal}
          /> 
        </View>
 

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
    justifyContent: 'space-around',
  },
  input: {
    borderRadius: 5,
    margin: 5,
    height: 40,
    width: 60,
    borderColor: "#4a4e69",
    borderWidth: 1,
  },
  arrows: {
    bottom: -35,
    width: 15, 
    height: 15,
  },
  wichOne: {
    alignItems:'center',
    
  }  
 
});
