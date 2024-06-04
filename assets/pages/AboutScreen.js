import * as React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function AboutScreen() {
  const navigation = useNavigation()

  const route = useRoute()
  const name = route.params?.name

  const handleHomeClick = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
    <Image style={styles.logo2} source={require('../img/icons8-tooth-100.png')} />
    <Text style={styles.sorridents2}>SORRIDENTS</Text>
      <Text style={styles.bemVindo}>Bem-Vindo: {name}</Text>
      <TouchableOpacity style={styles.button}>
          <Button title='Voltar' color='#000080' onPress={handleHomeClick}/>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  sorridents2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4682B4'
  },
  bemVindo: {
    marginTop: 250,
    fontSize: 22,
    color: '#000080'
  },
  button: {
    width: 350,
    marginTop: 10,
  },
})