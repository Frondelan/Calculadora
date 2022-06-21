import React from 'react';
import {Text, View} from 'react-native';
import ButtonCalc from '../components/ButtonCalc';
import useCalculadora from '../hooks/useCalculadora';
import {styles} from '../theme/appTheme';

export default function CalculadoraScreen() {
  const {
    numero,
    numeroAnterior,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnOperaciones,
    armarNumero,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.resultado}>
        {numero}
      </Text>
      <View style={styles.fila}>
        <ButtonCalc
          texto="C"
          color="#9B9B9B"
          colorLetra="#000"
          action={limpiar}
        />
        <ButtonCalc
          texto="+/-"
          color="#9B9B9B"
          colorLetra="#000"
          action={positivoNegativo}
        />
        <ButtonCalc
          texto="del"
          color="#9B9B9B"
          colorLetra="#000"
          action={btnDelete}
        />
        <ButtonCalc
          texto="/"
          color="#FF9427"
          action={() => btnOperaciones('/')}
        />
      </View>
      <View style={styles.fila}>
        <ButtonCalc texto="7" action={armarNumero} />
        <ButtonCalc texto="8" action={armarNumero} />
        <ButtonCalc texto="9" action={armarNumero} />
        <ButtonCalc
          texto="X"
          color="#FF9427"
          action={() => btnOperaciones('*')}
        />
      </View>
      <View style={styles.fila}>
        <ButtonCalc texto="4" action={armarNumero} />
        <ButtonCalc texto="5" action={armarNumero} />
        <ButtonCalc texto="6" action={armarNumero} />
        <ButtonCalc
          texto="-"
          color="#FF9427"
          action={() => btnOperaciones('-')}
        />
      </View>
      <View style={styles.fila}>
        <ButtonCalc texto="1" action={armarNumero} />
        <ButtonCalc texto="2" action={armarNumero} />
        <ButtonCalc texto="3" action={armarNumero} />
        <ButtonCalc
          texto="+"
          color="#FF9427"
          action={() => btnOperaciones('+')}
        />
      </View>
      <View style={styles.fila}>
        <ButtonCalc texto="0" action={armarNumero} ancho />
        <ButtonCalc texto="." action={armarNumero} />
        <ButtonCalc texto="=" color="#FF9427" action={calcular} />
      </View>
    </View>
  );
}
