import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, SafeAreaView } from "react-native";

import Temp from './src/Temp'
import Measure from './src/Measure';
import Time from './src/Time';
import Weight from './src/Weight';

export default function App() {


  return (
    <View style={{backgroundColor: '#EDECE3'}}>
      <View style={styles.container}>
  
        <Temp/>
        <Weight/>
        <Measure/>
        <Time/>
        
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 40,
    justifyContent: 'center',
  }, 
});
