import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import arrow from '../assets/tests/bidirectionArrow1.png'
import icon from '../assets/tests/bal.png'


export default function Weight() {

  const [convertOne, setConvertOne] = useState();
  const [kilo, setKilo] = useState();
  const [grams, setGrams] = useState();
  const [lbPound, setLbPound] = useState();
  const [oz, setOz] = useState();

  
  onFocusKg = () => {
    setConvertOne(1)
  }

  onFocusGr = () => {
    setConvertOne(2)
  }

  onFocusLb = () => {
    setConvertOne(3)
  }

  onFocusOz = () => {
    setConvertOne(4)
  }

  
  convertAll = () => {
    if(convertOne === 1){
      setGrams(`${kilo * 1000}`)
      setLbPound(`${(kilo * 2.205).toFixed(2)}`)
      setOz(`${(kilo * 35.274).toFixed(2)}`)
    }
    if(convertOne === 2){
      setKilo(`${grams / 1000}`)
      setLbPound(`${(grams / 453.6).toFixed(2)}`)
      setOz(`${(grams / 28.35).toFixed(2)}`)
    }
    if(convertOne === 3){
      setKilo(`${(lbPound / 2.205).toFixed(2)}`)
      setGrams(`${(lbPound * 453.6).toFixed(2)}`)
      setOz(`${(lbPound * 16).toFixed(2)}`)
    }
    if(convertOne === 4){
      setKilo(`${(oz / 35.274).toFixed(2)}`)
      setGrams(`${(oz * 28.35).toFixed(2)}`)
      setLbPound(`${(oz / 16).toFixed(2)}`)
    }
  }


  useEffect(() => {
    convertAll(convertOne);
  },[convertOne, kilo, grams, lbPound, oz])

  useEffect(() => {
    setGrams('');
    setLbPound('');
    setOz('');
    setKilo('');
  },[convertOne])



  return (
    < View style={styles.container}>
      
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: 5, paddingTop:5}}>
        <Text style={styles.infoTextTitle}>Weight   </Text>
        <Image style={styles.icon}
          source={icon}
          resizeMode="contain"
          alt="icon"
        /> 
      </View>


      <View style={styles.weightCont}>

        <View style={styles.wichOne}>
          <Text>kilo</Text>  
          
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder='  0.0 Kg'
              placeholderTextColor="#D3D3D3"
              numeric
              keyboardType="numeric"
              maxLength={8}
              onFocus={onFocusKg}
              value={String(kilo)}
              onChangeText={setKilo}
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
            placeholder='  0.0 g'
            placeholderTextColor="#D3D3D3"
            numeric
            keyboardType="numeric"
            maxLength={8}
            onFocus={onFocusGr}
            value={String(grams)}
            onChangeText={setGrams}
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
            placeholder='  0.0 lbs'
            placeholderTextColor="#D3D3D3"
            numeric
            keyboardType="numeric"
            maxLength={8}
            onFocus={onFocusLb}
            value={String(lbPound)}
            onChangeText={setLbPound}
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
            placeholder='  0.0 oz '
            placeholderTextColor="#D3D3D3"
            numeric
            keyboardType="numeric"
            maxLength={8}
            onFocus={onFocusOz}
            value={String(oz)}
            onChangeText={setOz}
          /> 
        </View>

      </View>
       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: '#f6f6f6',
    borderRadius: 5
  },
  infoTextTitle:{
    textAlign:'center', 
    fontSize: 20,
    fontStyle: "italic"
  },
  icon: {
    width: 30,
    height: 30
  },
  weightCont: {
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
    paddingLeft: 5,
    marginBottom: 10,
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
