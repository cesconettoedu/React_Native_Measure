import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity,Image } from "react-native";
import On from '../assets/tests/on.png'
import Off from '../assets/tests/off.png'


export default function Home() {

  const [metroS, setMetroS] = useState('metro');
  const [metro, setMetro] = useState(0);
  const [ftBtn, setFtBtn] = useState(On);
  const [inchesBtn, setInchesBtn] = useState(Off);
  const [metroBtn, setMetroBtn] = useState(Off);
  const [cmBtn, setBtn] = useState(Off);
  const [mmBtn, setMmBtn] = useState(Off);

//to change word to plural
  const metroPlu = (metro) => {
    if(metro > 1){
      setMetroS('metros')
    } else {
      setMetroS('metro')
    }  
  }

  const measureBtn = (x) => {
    if(x === 1){
       setFtBtn(On); setInchesBtn(Off); setMetroBtn(Off); setBtn(Off); setMmBtn(Off);
    }
    if(x === 2){
        setFtBtn(Off); setInchesBtn(On); setMetroBtn(Off); setBtn(Off); setMmBtn(Off);
    } 
    if(x === 3){
        setFtBtn(Off); setInchesBtn(Off); setMetroBtn(On); setBtn(Off); setMmBtn(Off);
    }   
    if(x === 4){
        setFtBtn(Off); setInchesBtn(Off); setMetroBtn(Off); setBtn(On); setMmBtn(Off);
    }   
    if(x === 5){
        setFtBtn(Off); setInchesBtn(Off); setMetroBtn(Off); setBtn(Off); setMmBtn(On);
    }        
    }
  

  useEffect(() => {
    if(metro === ''){
      setMetro(0)
    }
    metroPlu(metro);
  },[metro])


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />


      <View style={styles.measure}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoid}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.metroContainer}>
            <TouchableOpacity style={styles.dots} onPress={() => {measureBtn(1)} }>
              <Image
                source={ftBtn}
                style={{ width: 90, height: 25 }}
                />
            </TouchableOpacity>
            <Text> {(metro * 3.28084).toFixed(2)} ft</Text>
          </View>

           <View style={styles.metroContainer}>
            <TouchableOpacity style={styles.dots}  onPress={() => {measureBtn(2)} }>
              <Image
                source={inchesBtn}
                style={{ width: 90, height: 25 }}
                />
            </TouchableOpacity>
            <Text> {(metro * 39.3701).toFixed(2)} inches</Text>
          </View>

          <View style={styles.metroContainer}>
            <TouchableOpacity style={styles.dots} onPress={() => {measureBtn(3)} }>
              <Image
                source={metroBtn}
                style={{ width: 90, height: 25 }}
                />
            </TouchableOpacity>
            <Text>{metro} {metroS}</Text>
          </View>

          <View style={styles.metroContainer}>
            <TouchableOpacity style={styles.dots} onPress={() => {measureBtn(4)} }>
              <Image
                source={cmBtn}
                style={{ width: 90, height: 25 }}
                />
            </TouchableOpacity>
            <Text>{metro / 100} cm</Text>
          </View>
          
          <View style={styles.metroContainer}>
            <TouchableOpacity style={styles.dots} onPress={() => {measureBtn(5)} }>
              <Image
                source={mmBtn}
                style={{ width: 90, height: 25 }}
                />
            </TouchableOpacity>
            <Text>{metro / 1000} mm</Text>
          </View>
         

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder=" metro(s)"
              placeholderTextColor="#D3D3D3"
              keyboardType="numeric"
              maxLength={8}
              value={metro}
              onChangeText={setMetro}
              /> 

        </KeyboardAvoidingView>
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
    width: '30%',
    borderColor: "#4a4e69",
    borderWidth: 1,
    paddingLeft: 10
  },
  metroContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  }
});
