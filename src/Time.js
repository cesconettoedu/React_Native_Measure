import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Button, SafeAreaView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Time() {
  const [datePst, setDatePst] = useState(new Date(1598051730000));
  const [modePst, setModePst] = useState('date');
  const [showPst, setShowPst] = useState(false);

  const [dateEst, setDateEst] = useState(new Date(1598051730000));
  const [modeEst, setModeEst] = useState('date');
  const [showEst, setShowEst] = useState(false);


  //////////////     PST    ////////////////////////////
  const onChangePst = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowPst(false);
    setDatePst(currentDate);
  };

  const showModePst = (currentMode) => {
    setShowPst(true);
    setModePst(currentMode);
  };

  const showTimepickerPst = () => {
    showModePst('time');
  };


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
        <Text>{dateEst.getHours().toLocaleString()}:{dateEst.getMinutes().toLocaleString()}</Text>
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
