import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from "react-native";

import Measure from './src/Measure';

export default function App() {


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Measure/>

      
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
 
});
