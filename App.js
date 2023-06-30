import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity,Image } from "react-native";
import On from './assets/tests/on.png'
import Off from './assets/tests/off.png'


export default function App() {

  const [metroS, setMetroS] = useState('metro');
  const [metro, setMetro] = useState(0);
  const [metroOff, setMetroOff] = useState(On);

  const metroPlu = (metro) => {
    if(metro > 1){
      setMetroS('metros')
    } else {
      setMetroS('metro')
    }  
  }

  const metroOnOff = () => {
    if(metroOff === On){
      setMetroOff(Off)
    } else {
      setMetroOff(On)
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
            <TouchableOpacity style={styles.dots} onPress={() => metroOnOff() }>
              <Image
                source={metroOff}
                style={{ width: 90, height: 25 }}
                />
            </TouchableOpacity>
            <Text> {(metro * 3.28084).toFixed(2)} ft</Text>
          </View>

           <View style={styles.metroContainer}>
            <TouchableOpacity style={styles.dots} onPress={() => metroOnOff() }>
              <Image
                source={metroOff}
                style={{ width: 90, height: 25 }}
                />
            </TouchableOpacity>
            <Text> {(metro * 39.3701).toFixed(2)} inches</Text>
          </View>

          <View style={styles.metroContainer}>
            <TouchableOpacity style={styles.dots} >
              <Image
                source={On}
                style={{ width: 90, height: 25 }}
                />
            </TouchableOpacity>
            <Text>{metro} {metroS}</Text>
          </View>

          <View style={styles.metroContainer}>
            <TouchableOpacity style={styles.dots} onPress={() => metroOnOff() }>
              <Image
                source={metroOff}
                style={{ width: 90, height: 25 }}
                />
            </TouchableOpacity>
            <Text>{metro / 100} cm</Text>
          </View>
          
          <View style={styles.metroContainer}>
            <TouchableOpacity style={styles.dots} onPress={() => metroOnOff() }>
              <Image
                source={metroOff}
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
