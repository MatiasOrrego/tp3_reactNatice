import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput style={styles.input} placeholder="Usuario" value={user} onChangeText={setUser} />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry value={pass} onChangeText={setPass} />
      <Button title="Ingresar" onPress={() => router.replace('/(tabs)/inicio' as any)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15 },
});
