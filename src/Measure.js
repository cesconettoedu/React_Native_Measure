import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity,Image } from "react-native";
import On from '../assets/tests/on.png'
import Off from '../assets/tests/off.png'
import icon from '../assets/tests/trena.png'


export default function Measure() {

  const [numVal, setNumVal] = useState('');
  const [ftBtn, setFtBtn] = useState(Off);
  const [inchesBtn, setInchesBtn] = useState(Off);
  const [metroBtn, setMetroBtn] = useState(Off);
  const [cmBtn, setBtn] = useState(Off);
  const [mmBtn, setMmBtn] = useState(Off);
  const [placeholder, setPlaceholder] = useState('Measure');
  const [inputExt, setInputExt] = useState('  ');

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
      setInputExt(' ft ');
      setFtFormula(numVal);
      setInchesFormula((numVal * 12).toFixed(3)); 
      setMetroFormula((numVal / 3.281).toFixed(3)); 
      setCmFormula((numVal * 30.48).toFixed(3)); 
      setMmFormula((numVal * 304.8).toFixed(3));
    }
    if(measureBtnNum === 2){
      setFtBtn(Off); setInchesBtn(On); setMetroBtn(Off); setBtn(Off); setMmBtn(Off);
      setPlaceholder("inches(s)");
      setInputExt(' in ');
      setFtFormula((numVal / 12).toFixed(3));
      setInchesFormula(numVal); 
      setMetroFormula((numVal / 39.37).toFixed(3)); 
      setCmFormula((numVal * 2.54).toFixed(3)); 
      setMmFormula((numVal * 25.4).toFixed(3));
    } 
    if(measureBtnNum === 3){
      setFtBtn(Off); setInchesBtn(Off); setMetroBtn(On); setBtn(Off); setMmBtn(Off);
      setPlaceholder("metter(s)");
      setInputExt(' m ');
      setFtFormula((numVal * 3.28084).toFixed(3));
      setInchesFormula((numVal * 39.3701).toFixed(3)); 
      setMetroFormula(numVal); 
      setCmFormula((numVal / 100).toFixed(3)); 
      setMmFormula((numVal / 1000).toFixed(3));
    }   
    if(measureBtnNum === 4){
      setFtBtn(Off); setInchesBtn(Off); setMetroBtn(Off); setBtn(On); setMmBtn(Off);
      setPlaceholder("centimeter(s)");
      setInputExt(' cm ');
      setFtFormula((numVal / 30.484).toFixed(3));
      setInchesFormula((numVal / 2.54).toFixed(3)); 
      setMetroFormula((numVal / 100).toFixed(3)); 
      setCmFormula(numVal); 
      setMmFormula((numVal * 10).toFixed(3));
    }   
    if(measureBtnNum === 5){
      setFtBtn(Off); setInchesBtn(Off); setMetroBtn(Off); setBtn(Off); setMmBtn(On);
      setPlaceholder("millimeter(s)");
      setInputExt(' mm ');
      setFtFormula((numVal / 304.8).toFixed(3));
      setInchesFormula((numVal / 25.4).toFixed(3)); 
      setMetroFormula((numVal / 1000).toFixed(3)); 
      setCmFormula((numVal / 10).toFixed(3)); 
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
      
      <View >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: 10}}>
            <Text style={styles.infoTextTitle}>Measure Converter   </Text>
            <Image style={styles.icon}
              source={icon}
              resizeMode="contain"
              alt="icon"
            /> 
          </View>

          <View style={styles.metroContainer}>
              <Text style={styles.numResult}> {ftFormula} ft</Text>
            <TouchableOpacity  onPress={() => {setMeasureBtnNum(1)} }>
              <Image
                source={ftBtn}
                style={{ width: 90, height: 25 }}
                />
            </TouchableOpacity>
          </View>

           <View style={styles.metroContainer}>
              <Text style={styles.numResult}> {inchesFormula} in</Text>
            <TouchableOpacity   onPress={() => {setMeasureBtnNum(2)} }>
              <Image
                source={inchesBtn}
                style={{ width: 90, height: 25 }}
                />
            </TouchableOpacity>
          </View>

          <View style={styles.metroContainer}>
              <Text style={styles.numResult}>{metroFormula} m</Text>
            <TouchableOpacity  onPress={() => {setMeasureBtnNum(3)} }>
              <Image
                source={metroBtn}
                style={{ width: 90, height: 25 }}
                />
            </TouchableOpacity>
          </View>

          <View style={styles.metroContainer}>
              <Text style={styles.numResult}>{cmFormula} cm</Text>
            <TouchableOpacity  onPress={() => {setMeasureBtnNum(4)} }>
              <Image
                source={cmBtn}
                style={{ width: 90, height: 25 }}
                />
            </TouchableOpacity>
          </View>
          
          <View style={styles.metroContainer}>
              <Text style={styles.numResult}>{mmFormula} mm</Text>
            <TouchableOpacity  onPress={() => {setMeasureBtnNum(5)} }>
              <Image
                source={mmBtn}
                style={{ width: 90, height: 25 }}
                />
            </TouchableOpacity>
          </View>
         
          <View style={styles.inputCont}>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder={placeholder}
              placeholderTextColor="#D3D3D3"
              numeric
              keyboardType="numeric"
              maxLength={8}
              value={numVal}
              onChangeText={setNumVal}
            /> 
            <Text style={styles.inputExt}>({inputExt})</Text>
          </View>

        </KeyboardAvoidingView>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 5
  },
  input: {
    borderRadius: 5,
    margin: 5,
    height: 40,
    width: '33%',
    borderColor: "#4a4e69",
    borderWidth: 1,
    paddingRight: 10,
    textAlign: 'right',
    marginBottom: 10,
  },
  inputCont: {
    flexDirection: 'row',
    left: 100
  },
  inputExt: {
    paddingLeft: 5,
    bottom: -15
  },
  metroContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
    paddingRight: 40,
  },
  infoTextTitle: {
    textAlign:'center', 
    fontSize: 20,
  },
  icon: {
    width: 40,
    height: 40
  },
  numResult: {
    paddingRight: 15,
    fontSize: 17,
    fontWeight: 800,
  }
});
