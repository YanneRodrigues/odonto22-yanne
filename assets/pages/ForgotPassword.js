import  React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput } from 'react-native'
import { useNavigation, useRoute,  } from '@react-navigation/native'

export default function AboutScreen() {
  const navigation = useNavigation()

  const [novaSenha, setNovaSenha] = useState('')  
  const [confSenha, setConfSenha] = useState('')  

  const route = useRoute()
  const name = route.params?.name

  const handleHomeClick = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
    <Image style={styles.logo2} source={require('../img/icons8-tooth-100.png')} />
    <Text style={styles.sorridents2}>SORRIDENTS</Text>
    <Text>Esqueceu sua senha?</Text>

    
            <Text style={styles.senha}>Nova senha</Text>
            <TextInput 
              style={styles.input2}placeholder= '*********' secureTextEntry
              value={novaSenha}
              onChangeText={text => setNovaSenha(text)}
            />
    

    
            <Text style={styles.confSenha}>Confirmar senha</Text>
            <TextInput 
              style={styles.input2}placeholder= '*********' secureTextEntry
              value={confSenha}
              onChangeText={text => setConfSenha(text)}
            />
    

      
      <TouchableOpacity style={styles.button}>
          <Button title='Confirmar senha' color='#000080' />
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
  button: {
    width: 350,
    marginTop: 10,
  },
  senha: {
    fontWeight: 'bold',
    color: '#000080',
    alignItems: 'center',
    width: '350',
    height: 50,
    marginRight: 265,
    fontSize: 15,
    marginTop: 50,
  },
  input2:{
    color: '#999',
    width: 350,
    padding: 10,
    marginVertical: 10,
    fontSize: 15,
    backgroundColor: '#ddd',
    borderColor: '#000080',
    marginTop: -20
  },
  confSenha: {
    fontWeight: 'bold',
    color: '#000080',
    alignItems: 'center',
    width: '350',
    height: 50,
    marginRight: 230,
    fontSize: 15,
  },
})