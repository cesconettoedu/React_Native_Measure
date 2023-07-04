import React, { useState } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";

export default function Weight() {


  return (
    <SafeAreaView>
    
      <Text style={styles.infoTextTitle}>Weight Converter</Text>
       
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  infoTextTitle:{
    textAlign:'center', 
    fontSize: 20,
    paddingBottom: 10,
  },
 
});
