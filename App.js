import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { SafeAreaView, View, TouchableOpacity, Text, TextInput, StyleSheet, Image, KeyboardAvoidingView, Pressable, Modal, ImageBackground } from "react-native";

export default function App() {

  const [metroS, setMetroS] = useState('metro');
  const [metro, setMetro] = useState(0);
  const [ft, setFt] = useState(0);
  const [inches, setInches] = useState(0);


  const metroPlu = (metro) => {
    if(metro > 1){
      setMetroS('metros')
    } else {
      setMetroS('metro')
    }
    
  }

  const metroToFt = (metro) => {
    let ft = 0
    ft = (metro * 3.28084).toFixed(2);
    setFt(ft)
  }

  const metroToInches = (metro) => {
    let inches = 0
    inches = (metro * 39.3701).toFixed(2);
    setInches(inches)
  }



  useEffect(() => {
    metroPlu(metro);
    metroToFt(metro);
    metroToInches(metro);

  },[metro])


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <KeyboardAvoidingView
        style={styles.keyboardAvoid}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Text>{metro} {metroS} = {ft} ft = {inches} inches</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder=" metro"
          placeholderTextColor="#4a4e69"
          keyboardType="numeric"
          maxLength={5}
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
