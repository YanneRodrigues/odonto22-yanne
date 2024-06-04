import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleAboutClick = () => {
    if (name != '' && email != '' && senha != '') {
      navigation.navigate('About', { name });
    }else{
      alert('Você não preencheu os dados necessários.')
    }

    //navigation.navigate('About', {cor: name})
  };
  const handleForgotClick = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../img/icons8-tooth-100.png')}
      />
      <Text style={styles.sorridents}>SORRIDENTS</Text>
      <Text style={styles.h1}>AGENDE SUA CONSULTA</Text>
      <Text style={styles.h2}>Bem-vindo! Digite seus dados abaixo.</Text>
      <Text style={styles.nome}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={(t) => setName(t)}
      />

      <Text style={styles.email}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={(t) => setEmail(t)}
      />
      <Text style={styles.senha}>Senha</Text>
      <TextInput
        style={styles.input2}
        placeholder="*********"
        secureTextEntry
        value={senha}
        onChangeText={(t) => setSenha(t)}
      />

      <TouchableOpacity style={styles.esqueciSenha} onPress={handleForgotClick}>
        <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Button title="ENTRAR" color="#000080" onPress={handleAboutClick} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    color: '#999',
    width: 350,
    padding: 10,
    marginVertical: 10,
    fontSize: 15,
    backgroundColor: '#ddd',
    borderColor: '#000080',
  },
  input2: {
    color: '#999',
    width: 350,
    padding: 10,
    marginVertical: 10,
    fontSize: 15,
    backgroundColor: '#ddd',
    borderColor: '#000080',
  },
  sorridents: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4682B4',
  },
  h1: {
    color: '#000080',
    fontSize: 27,
    fontWeight: 'bold',
    paddingVertical: 10,
    marginTop: 20,
  },
  h2: {
    color: '#777',
    fontSize: 15,
  },
  nome: {
    fontWeight: 'bold',
    color: '#000080',
    marginTop: 40,
    marginRight: 310,
  },
  email: {
    fontWeight: 'bold',
    color: '#000080',
    marginRight: 310,
  },
  senha: {
    fontWeight: 'bold',
    color: '#000080',
    marginRight: 310,
  },
  button: {
    width: 350,
    marginTop: 20,
  },
  forgotBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000080',
    marginLeft: 212,
  },
});
