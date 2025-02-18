import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

type CardIntegrantesProps={
  lista:undefined;
}
export default function CardIntegrantes({lista}:CardIntegrantesProps) {
  return (
    <View style={style.container}>
    <Text>{lista.name} - Nome Integrande</Text>
    <Image style={style.box} source={{uri:lista.image}} alt='foto pessoal do grupo'/>
    <Text>{lista.frase} - Frase</Text>
  </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    height: 200,
    width: 200,
  },
});