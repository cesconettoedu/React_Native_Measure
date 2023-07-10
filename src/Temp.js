import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import arrow from '../assets/tests/bidirectionArrow1.png'
import icon from '../assets/tests/hourconvert.png'


export default function Time() {

 

  onFocusC = () => {
    setConvertOne(1)
  }
  onFocusF = () => {
    setConvertOne(1)
  }


  return (
    <View style={styles.container}>
      
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: 1}}>
        <Text style={styles.infoTextTitle}>Temperature Converter   </Text>
        <Image style={styles.icon}
          source={icon}
          resizeMode="contain"
          alt="icon"
        /> 
      </View>

      <View style={styles.tempCont}>

        <View style={styles.wichOne}>
            
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder='°C'
                placeholderTextColor="#D3D3D3"
                numeric
                keyboardType="numeric"
                maxLength={8}
                onFocus={onFocusC}
                //value={String(kilo)}
                //onChangeText={setKilo}
              /> 
            <Text style={styles.tempResult}>00 °C</Text>  
                
          </View>
        
          <Image style={styles.arrows}
            source={arrow}
            resizeMode="contain"
            alt="arrow"
          /> 


          <View style={styles.wichOne}>
            <Text style={styles.tempResult}>32 °F</Text>  
            
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder='°F'
                placeholderTextColor="#D3D3D3"
                numeric
                keyboardType="numeric"
                maxLength={8}
                onFocus={onFocusF}
                //value={String(kilo)}
                //onChangeText={setKilo}
              /> 
                
          </View>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    height: 95,
    borderRadius: 5,
    marginBottom: 10,
  },
  infoTextTitle:{
    textAlign:'center', 
    fontSize: 20,
    
  },
  icon: {
    width: 40,
    height: 40
  },

  tempCont: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  input: {
    borderRadius: 5,
    margin: 5,
    height: 40,
    width: 70,
    borderColor: "#4a4e69",
    borderWidth: 1,
    marginBottom: 10,
    textAlign: 'center'
  },
  arrows: {
    bottom: -20,
    width: 15, 
    height: 15,
  },
  wichOne: {
    alignItems:'center',
    flexDirection: 'row',
  },
  tempResult: {
    
    fontSize: 17,
    fontWeight: 800,
  }  
 

});
