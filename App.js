import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, SafeAreaView } from "react-native";

import Measure from './src/Measure';
import Time from './src/Time';
import Weight from './src/Weight';

export default function App() {


  return (
    <SafeAreaView>
      <View style={styles.container}>
  
        <StatusBar style="auto" />

        <Weight/>
        <Measure/>
        <Time/>
        
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 70,
    justifyContent: 'center',
  },
  compon:{

  }
 
});
