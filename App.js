import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, SafeAreaView, ScrollView } from "react-native";


import Temp from './src/Temp'
import Measure from './src/Measure';
import Time from './src/Time';
import Weight from './src/Weight';
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
      <SafeAreaView>
      {!showLogo &&
     
        <View style={styles.containerLogo}>
          <Image
            source={eulogo}
            alt="eulogo"
          />
          <Text style={styles.title}> Ed's Converter </Text>

        </View>
      }
  
      {showLogo &&
        <View style={styles.container}>

        <View style={{flexDirection: 'row', marginBottom: 2}}>
          <Image 
            source = {eulogo} 
            style = {{ width: 45 , height: 45 , marginRight: 30, borderRadius: 30, backgroundColor: '#000000' }}
            />   
          <Text style={styles.eds}>Ed's Converter</Text>
        </View>



          <ScrollView style={{height:"93%"}}>
            <Temp/>
            <Weight/>
            <Measure/>
            <Time/>      
          </ScrollView>
        </View>
      }
    </SafeAreaView>
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
  eds: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: "600",
    paddingLeft: 30 
  },
});
