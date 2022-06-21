import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  texto: string;
  color?: string;
  colorLetra?: string;
  ancho?: boolean;
  action: (numeroTexto: string) => void;
}

export default function ButtonCalc({
  texto,
  color = '#2D2D2D',
  colorLetra = '#FFF',
  ancho = false,
  action,
}: Props) {
  return (
    <TouchableOpacity onPress={() => action(texto)}>
      <View
        style={[
          styles.boton,
          {backgroundColor: color, width: ancho ? 180 : 80},
        ]}>
        <Text style={[styles.botonTexto, {color: colorLetra}]}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
  },
});
