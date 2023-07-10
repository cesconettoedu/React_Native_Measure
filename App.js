import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, Image } from "react-native";


import Temp from './src/Temp'
import Measure from './src/Measure';
import Time from './src/Time';
import Weight from './src/Weight';

import trena from './assets/gifs/trena.gif'
import scale from './assets/gifs/scale.gif'
import time from './assets/gifs/time.gif'
import eulogo from './assets/eulogoSquareMeasure.png'

export default function App() {


  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLogo(true);
    }, 2000);  
  },[])

  return (
    <View style={{backgroundColor: '#EDECE3'}}>

      {!showLogo &&
        // <View style={styles.container}>
        //   <Image
        //     source={trena}
        //     alt="trena"
        //   />
        //   <Image
        //     source={scale}
        //     alt="scale"
        //   />
        //   <Image
        //     source={time}
        //     alt="time"
        //   /> 
        <View style={styles.containerLogo}>
          <Image
            source={eulogo}
            alt="eulogo"
          />
          <Text style={styles.title}> Ed's Measure </Text>

        </View>
      }
  
      {showLogo &&
        <View style={styles.container}>
          <Temp/>
          <Weight/>
          <Measure/>
          <Time/>      
        </View>
      }
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 40,
    justifyContent: 'center',
  },
  containerLogo: {
    paddingLeft: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    height: '100%'
  },
  title: {
    textAlign: 'center',
    color: '#7FB069',
    fontSize: 40,
    fontWeight: 600
  },
});
