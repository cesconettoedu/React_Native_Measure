import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Button, SafeAreaView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Time() {

  //////////////     PST    ////////////////////////////
  const [datePst, setDatePst] = useState(new Date(2019, 2, 18));
  const [modePst, setModePst] = useState('date');
  const [showPst, setShowPst] = useState(false);
  const [showPstEst, setShowPstEst] = useState(false);
  const [newEST, setNewEST] = useState();
  
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
    setShowEstPst(false);
    setShowPstEst(true);
  };

  const hoursPlusthree = (datePst) => {
    let newHour = datePst.getHours();
    
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

  
  //////////////     EST    ////////////////////////////
  const [dateEst, setDateEst] = useState(new Date(2019, 2, 18));
  const [modeEst, setModeEst] = useState('date');
  const [showEst, setShowEst] = useState(false);
  const [newPst, setNewPst] = useState();
  const [showEstPst, setShowEstPst] = useState(false);

  const onChangeEst = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowEst(false);
    setDateEst(currentDate);
    hoursLessthree(currentDate);
  };
  
  const showModeEst = (currentMode) => {
    setShowEst(true);
    setModeEst(currentMode);
  };
  
  const showTimepickerEst = () => {
    showModeEst('time');
    setShowPstEst(false);
    setShowEstPst(true);
  };
  
  const hoursLessthree = (datePst) => {
    let newHour = datePst.getHours();
    
    if(newHour === 0){
      setNewPst(21)
    } else if (newHour === 1){
      setNewPst(22)
    } else if(newHour === 2){
      setNewPst(23)
    } else {
      setNewPst(newHour-3)
    }
    
  }
  
  


  return (
    <SafeAreaView>
    
      <Text style={styles.infoText}>Time Converter</Text>
      
      <View style={styles.timeContainer}>
        <View>
          <Text style={styles.infoText}>Pacific{'\n'}PDT/PST</Text>
            {showEstPst &&
              <Text style={styles.infoText}>{newPst}:{dateEst.getMinutes().toLocaleString()}</Text>
            }
            {!showEstPst &&
              <Text style={styles.infoText}>{datePst.getHours().toLocaleString()}:{datePst.getMinutes().toLocaleString()}</Text>
            }
          
          {showPst && (
            <DateTimePicker
            display="spinner"
            testID="dateTimePicker"
            value={datePst}
            mode={modePst}
            minuteInterval={10}
            is24Hour={true}
            onChange={onChangePst}
            />
            )}
          <Button onPress={showTimepickerPst} title="Show time picker!" />
        </View>


        <View>
          <Text style={styles.infoText}>Eastern{'\n'}EDT/EST</Text>
          
          {showPstEst &&
            <Text style={styles.infoText}>{newEST}:{datePst.getMinutes().toLocaleString()}</Text>
          }
          {!showPstEst &&
            <Text style={styles.infoText}>{dateEst.getHours().toLocaleString()}:{dateEst.getMinutes().toLocaleString()}</Text>
          }
          
          {showEst && (
            <DateTimePicker
              display="spinner"
              testID="dateTimePicker"
              value={dateEst}
              mode={modeEst}
              minuteInterval={10}
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
  infoText:{
    textAlign:'center'
  }

});
