import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import arrow from '../assets/tests/bidirectionArrow1.png'
import clock from '../assets/tests/clock.png'
import icon from '../assets/tests/hourconvert.png'


export default function Time() {

  const [min, setMin] = useState('00');

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
    zeroOnMinute(currentDate);
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
    zeroOnMinute(currentDate);
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
  
  
//just to put a 00 when the min is 0
  const zeroOnMinute = (datePst) => {
    let newMin = datePst.getMinutes();
    
    if(newMin === 0){
      setMin('00')
    } else {
      setMin(newMin)
    }
  }

  return (
   <View style={styles.timeAll}>

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: 1}}>
        <Text style={styles.infoTextTitle}>Time  </Text>
        <Image style={styles.icon}
          source={icon}
          resizeMode="contain"
          alt="icon"
        /> 
      </View>
      
      <View style={styles.timeContainer}>
        <View>
          <Text style={styles.infoText}>Pacific - PDT/PST{'\n'} Vancouver</Text>
            {showEstPst &&
              <Text style={styles.infoTextTime}>{newPst}:{min}</Text>
            }
            {!showEstPst &&
              <Text style={styles.infoTextTime}>{datePst.getHours().toLocaleString()}:{min}</Text>
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
          <TouchableOpacity onPress={showTimepickerPst} style={{alignItems: 'center'}}>
            <Image style={styles.clock}
              source={clock}
              alt="clock"
            />  
          </TouchableOpacity>
        </View>
          
        <Image style={styles.arrows}
          source={arrow}
          resizeMode="contain"
          alt="arrow"
        />  

        <View>
          <Text style={styles.infoText}>Eastern - EDT/EST{'\n'}Toronto</Text>
          
          {showPstEst &&
            <Text style={styles.infoTextTime}>{newEST}:{min}</Text>
          }
          {!showPstEst &&
            <Text style={styles.infoTextTime}>{dateEst.getHours().toLocaleString()}:{min}</Text>
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
          <TouchableOpacity onPress={showTimepickerEst} style={{alignItems: 'center'}}>
            <Image style={styles.clock}
              source={clock}
              alt="clock"
            />  
          </TouchableOpacity>
        </View>
      
      </View>   
    </View>
  );
};

const styles = StyleSheet.create({
  timeAll: {
    backgroundColor: '#f6f6f6',
    height: 185,
    borderRadius: 5,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  infoTextTitle:{
    textAlign:'center', 
    fontSize: 20,
    fontStyle: "italic"    
  },
  icon: {
    width: 40,
    height: 40
  },
  infoText:{
    textAlign:'center'
  },
  infoTextTime:{
    fontSize: 25,
    textAlign:'center',
    fontWeight: 800,
    paddingBottom: 10,
  },
  arrows: {
    bottom: -40
  },
  clock: {
    width: 70,
    height:60,
  }
});
