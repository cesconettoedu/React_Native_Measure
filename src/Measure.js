import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity,Image } from "react-native";
import On from '../assets/tests/on.png'
import Off from '../assets/tests/off.png'



export default function Measure() {

  const [numVal, setNumVal] = useState('');
  const [ftBtn, setFtBtn] = useState(Off);
  const [inchesBtn, setInchesBtn] = useState(Off);
  const [metroBtn, setMetroBtn] = useState(Off);
  const [cmBtn, setBtn] = useState(Off);
  const [mmBtn, setMmBtn] = useState(Off);
  const [placeholder, setPlaceholder] = useState('Measure')

  const [ftFormula, setFtFormula] = useState();
  const [inchesFormula, setInchesFormula] = useState();
  const [metroFormula, setMetroFormula] = useState();
  const [cmFormula, setCmFormula] = useState();
  const [mmFormula, setMmFormula] = useState();

  const [measureBtnNum, setMeasureBtnNum] = useState();

  const measureBtn = (measureBtnNum) => {
    if(measureBtnNum === 1){
      setFtBtn(On); setInchesBtn(Off); setMetroBtn(Off); setBtn(Off); setMmBtn(Off);
      setPlaceholder("feet(s)");
      setFtFormula(numVal);
      setInchesFormula((numVal * 12).toFixed(2)); 
      setMetroFormula((numVal / 0.3048).toFixed(2)); 
      setCmFormula((numVal / 30.48).toFixed(2)); 
      setMmFormula((numVal / 304.8).toFixed(2));
    }
    if(measureBtnNum === 2){
      setFtBtn(Off); setInchesBtn(On); setMetroBtn(Off); setBtn(Off); setMmBtn(Off);
      setPlaceholder("inches(s)");
      setFtFormula((numVal / 12).toFixed(2));
      setInchesFormula(numVal); 
      setMetroFormula((numVal / 39.37).toFixed(2)); 
      setCmFormula((numVal * 2.54).toFixed(2)); 
      setMmFormula((numVal * 25.4).toFixed(2));
    } 
    if(measureBtnNum === 3){
      setFtBtn(Off); setInchesBtn(Off); setMetroBtn(On); setBtn(Off); setMmBtn(Off);
      setPlaceholder("metro(s)");
      setFtFormula((numVal * 3.28084).toFixed(2));
      setInchesFormula((numVal * 39.3701).toFixed(2)); 
      setMetroFormula(numVal); 
      setCmFormula((numVal / 100).toFixed(2)); 
      setMmFormula((numVal / 1000).toFixed(2));
    }   
    if(measureBtnNum === 4){
      setFtBtn(Off); setInchesBtn(Off); setMetroBtn(Off); setBtn(On); setMmBtn(Off);
      setPlaceholder("centimeters(s)");
      setFtFormula((numVal / 30.484).toFixed(2));
      setInchesFormula((numVal / 2.54).toFixed(2)); 
      setMetroFormula((numVal / 100).toFixed(2)); 
      setCmFormula(numVal); 
      setMmFormula((numVal * 10).toFixed(2));
    }   
    if(measureBtnNum === 5){
      setFtBtn(Off); setInchesBtn(Off); setMetroBtn(Off); setBtn(Off); setMmBtn(On);
      setPlaceholder("milímetro(s)");
      setFtFormula((numVal / 304.8).toFixed(2));
      setInchesFormula((numVal / 25.4).toFixed(2)); 
      setMetroFormula((numVal / 1000).toFixed(2)); 
      setCmFormula((numVal / 10).toFixed(2)); 
      setMmFormula(numVal);
    }        
  }
  

  useEffect(() => {
    measureBtn(measureBtnNum)
  },[measureBtnNum, numVal])

  
  useEffect(() => {
   
  },[])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />


      <View >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          
          <Text>Measure Converter</Text>

          <View style={styles.metroContainer}>
            <TouchableOpacity  onPress={() => {setMeasureBtnNum(1)} }>
              <Image
                source={ftBtn}
                style={{ width: 90, height: 25 }}
                />
            </TouchableOpacity>
            <Text> {ftFormula} ft</Text>
          </View>

           <View style={styles.metroContainer}>
            <TouchableOpacity   onPress={() => {setMeasureBtnNum(2)} }>
              <Image
                source={inchesBtn}
                style={{ width: 90, height: 25 }}
                />
            </TouchableOpacity>
            <Text> {inchesFormula} inches</Text>
          </View>

          <View style={styles.metroContainer}>
            <TouchableOpacity  onPress={() => {setMeasureBtnNum(3)} }>
              <Image
                source={metroBtn}
                style={{ width: 90, height: 25 }}
                />
            </TouchableOpacity>
            <Text>{metroFormula} metro</Text>
          </View>

          <View style={styles.metroContainer}>
            <TouchableOpacity  onPress={() => {setMeasureBtnNum(4)} }>
              <Image
                source={cmBtn}
                style={{ width: 90, height: 25 }}
                />
            </TouchableOpacity>
            <Text>{cmFormula} cm</Text>
          </View>
          
          <View style={styles.metroContainer}>
            <TouchableOpacity  onPress={() => {setMeasureBtnNum(5)} }>
              <Image
                source={mmBtn}
                style={{ width: 90, height: 25 }}
                />
            </TouchableOpacity>
            <Text>{mmFormula} mm</Text>
          </View>
         

            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder={placeholder}
              placeholderTextColor="#D3D3D3"
              numeric
              keyboardType="numeric"
              maxLength={8}
              value={numVal}
              //onChangeText={setNumVal}
              onChangeText={setNumVal}
              // value={numVal.toString()}
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
    width: '33%',
    borderColor: "#4a4e69",
    borderWidth: 1,
    paddingLeft: 10
  },
  metroContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  }
});
