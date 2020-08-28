import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import styles from '../styles/styles';

export default ({ initial = 0, add = 1, decrease = 1 }) => {
  const [number, setNumber] = useState(initial)

  const increment = () => setNumber(number + add)
  const subtract = () => setNumber(number - decrease)
  const zero = () => setNumber(0)
  const saveList = () => setList([...list, number])

  const [fontSize, setFontSize] = useState(15)
  const changeFontSize = () => fontSize <=44 && setFontSize(fontSize +2 )

  const [list, setList] = useState([])

  return (
    <View style={styles.app}>
      <Text style={styles.title}>Seja Bem Vindo ao ContaClick</Text >

      <View style={[styles.buttonView, { width: 300 }]}>
	    <Button title="Subtrair" onPress={subtract} color="#A20A20"></Button>
	    <Text style={{ fontSize }}>{number}</Text>
	    <Button title="Somar" onPress={increment} color = "#080"></Button>
      </View>
      
      <View style={[styles.buttonView, { width: 350 }]}>
      <Button title="Zerar" onPress={zero}></Button>
      <Button title="Fonte" onPress={changeFontSize}></Button>
      </View>


      <Button title="Salvar" onPress={saveList}></Button>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {list.map(n => (<Text style={{ marginRight: 7 }}>{n}</Text>))}
      </View>
    </View>
  )
}