import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from "react-native";

import Home from './src/Home';

export default function App() {


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Home/>

      
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
