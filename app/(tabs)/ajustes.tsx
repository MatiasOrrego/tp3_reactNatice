import { View, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Ajustes() {
  const router = useRouter();

  return (
    <View style={{ padding: 20 }}>
      <Button title="Cerrar sesión" onPress={() => router.replace('/')} />
    </View>
  );
}
