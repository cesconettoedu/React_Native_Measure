import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import arrow from '../assets/tests/bidirectionArrow1.png'
import icon from '../assets/tests/tempIcon.png'


export default function Time() {

  const [convertOne, setConvertOne] = useState();
  const [c, setC] = useState();
  const [f, setF] = useState();

  onFocusC = () => {
    setConvertOne(1)
  }
  onFocusF = () => {
    setConvertOne(2)
  }



  convertAll = () => {
    if(convertOne === 1){
      setF(`${((c * (9/5)) + 32).toFixed(1)}`)
    }
    if(convertOne === 2){
      if(f === ''){
        setC('')
      }else{

        setC(`${((f - 32) * (5/9)).toFixed(1)}`)
      }
    }
    
  }



  useEffect(() => {
      convertAll(convertOne);
    },[ c, f])

  useEffect(() => {
    setF('');
    setC('');
  },[convertOne])


  return (
    <View style={styles.container}>
      
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: 1, paddingTop: 3}}>
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
                maxLength={5}
                onFocus={onFocusC}
                value={String(c)}
                onChangeText={setC}
              /> 
            <Text style={styles.tempResult}>{c} °C</Text>  
                
          </View>
        
          <Image style={styles.arrows}
            source={arrow}
            resizeMode="contain"
            alt="arrow"
          /> 


          <View style={styles.wichOne}>
            <Text style={styles.tempResult}>{f} °F</Text>  
            
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder='°F'
                placeholderTextColor="#D3D3D3"
                numeric
                keyboardType="numeric"
                maxLength={5}
                onFocus={onFocusF}
                value={String(f)}
                onChangeText={setF}
              /> 
                
          </View>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    height: 90,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 5
  },
  infoTextTitle:{
    textAlign:'center', 
    fontSize: 20,
    
  },
  icon: {
    width: 35,
    height: 35
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
