import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView } from "react-native";

export default function App() {

  const [metroS, setMetroS] = useState('metro');
  const [metro, setMetro] = useState(0);

  const metroPlu = (metro) => {
    if(metro > 1){
      setMetroS('metros')
    } else {
      setMetroS('metro')
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

      <KeyboardAvoidingView
        style={styles.keyboardAvoid}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Text> {(metro * 3.28084).toFixed(2)} ft</Text>
        <Text> {(metro * 39.3701).toFixed(2)} inches</Text>
        <Text>{metro} {metroS}</Text>
        <Text>{metro / 100} cm</Text>
        <Text>{metro / 1000} mm</Text>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 5,
    margin: 5,
    height: 40,
    borderColor: "#4a4e69",
    borderWidth: 1,
    paddingLeft: 10
  },
});
