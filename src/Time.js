import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Button, SafeAreaView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Time() {
  
  const [dateEst, setDateEst] = useState(new Date(1598051730000));
  const [modeEst, setModeEst] = useState('date');
  const [showEst, setShowEst] = useState(false);

  
  
  
  //////////////     EST    ////////////////////////////
  const onChangeEst = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowEst(false);
    setDateEst(currentDate);
  };

  const showModeEst = (currentMode) => {
    setShowEst(true);
    setModeEst(currentMode);
  };
  
  const showTimepickerEst = () => {
    showModeEst('time');
  };
  
  
  
  
  const [datePst, setDatePst] = useState(new Date(1598051730000));
  const [modePst, setModePst] = useState('date');
  const [showPst, setShowPst] = useState(false);
  const [showPstEst, setShowPstEst] = useState(false);
  const [newEST, setNewEST] = useState();
  
  //////////////     PST    ////////////////////////////
  const onChangePst = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowPst(false);
    setDatePst(currentDate);
    hoursPlusthree(currentDate);
  };

  const showModePst = (currentMode) => {
    setShowPst(true);
    setModePst(currentMode);
  };

  const showTimepickerPst = () => {
    showModePst('time');
    setShowPstEst(true);
    
  };

  const hoursPlusthree = (datePst) => {
    // console.log(datePst.getHours());
    let newHour = datePst.getHours();
    //console.log(newHour);
    if(newHour === 21){
      setNewEST(0)
    } else if (newHour === 22){
      setNewEST(1)
    } else if(newHour === 23){
      setNewEST(2)
    } else {
      setNewEST(newHour+3)
    }
   
  }


  return (
    <SafeAreaView>
    
    <View style={styles.timeContainer}>

      <View>
        <Text>Pacific{'\n'}PDT/PST</Text>
        <Text>{datePst.getHours().toLocaleString()}:{datePst.getMinutes().toLocaleString()}</Text>
        {showPst && (
          <DateTimePicker
          testID="dateTimePicker"
          value={datePst}
          mode={modePst}
          is24Hour={true}
          onChange={onChangePst}
          />
          )}
        <Button onPress={showTimepickerPst} title="Show time picker!" />
      </View>







      <View>
        <Text>Eastern{'\n'}EDT/EST</Text>
        
        {showPstEst &&
          <Text>{newEST}:{datePst.getMinutes().toLocaleString()}</Text>
        }
        {!showPstEst &&
          <Text>{dateEst.getHours().toLocaleString()}:{dateEst.getMinutes().toLocaleString()}</Text>
        }
        
        {showEst && (
          <DateTimePicker
            testID="dateTimePicker"
            value={dateEst}
            mode={modeEst}
            is24Hour={true}
            onChange={onChangeEst}
          />
          )}
        <Button style={{}} onPress={showTimepickerEst} title="Show time picker!" />



      </View>

    </View>   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-around',

  },
});
