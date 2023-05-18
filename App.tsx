import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Bem vindo</Text>
        <Text style={styles.texto}>TRÊS RIOS</Text>
      </View>
      <Text style={styles.description}></Text>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },

  title: {
    fontFamily:'Cambria',
    top:30,
    left:150

  },

  description:{
    fontFamily:'Cambria',
    textAlign:'center',

  },

  card:{
    position:'absolute',
    backgroundColor:'#FFFFFF',
    zIndex:1,
    width:600,
    height:300,
    top:30,
    left:1
  },
  
  texto:{
    fontSize:30,
    top:30,
    left:100
  }


});
