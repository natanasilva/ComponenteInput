import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Button, Alert } from 'react-native';
import Inputs from './components/Inputs';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Login Info', `Username: ${username}\nPassword: ${password}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Inputs
        label="Usuário"
        value={username}
        onChangeText={setUsername}
        placeholder="Digite seu usuário"
      />
      <Inputs
        label="Senha"
        value={password}
        onChangeText={setPassword}
        placeholder="Digite sua senha"
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});
